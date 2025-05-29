import { buffer } from 'micro';
import { sendProductEmail } from '../../utils/email';

// Desabilitar o bodyParser padrão do Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    // Verificar token de autorização
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Bearer ${process.env.OPENPIX_WEBHOOK_TOKEN}`) {
      return res.status(401).json({ error: 'Não autorizado' });
    }

    // Ler o corpo da requisição
    const rawBody = await buffer(req);
    const event = JSON.parse(rawBody.toString());

    // Log seguro apenas em desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      console.log(JSON.stringify(event, null, 2));
    }

    // Validação extra do evento
    if (
      event.event !== 'OPENPIX:CHARGE_COMPLETED' ||
      event.data?.charge?.status !== 'COMPLETED'
    ) {
      return res.status(400).json({ error: 'Evento inválido ou pagamento incompleto' });
    }

    // Enviar e-mail se houver cliente
    if (event.data?.customer?.email) {
      const customerName = event.data.customer.name || '';
      await sendProductEmail(event.data.customer.email, customerName);
    }

    // Confirmação explícita ao cliente
    return res.status(200).json({ message: 'Webhook processado com sucesso' });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Erro no webhook:', error.message);
    }
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}