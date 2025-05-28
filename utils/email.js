import nodemailer from 'nodemailer';

// Função para criar o transporter com retry
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    debug: process.env.NODE_ENV === 'development',
    logger: process.env.NODE_ENV === 'development'
  });
};

// Função para enviar o produto por e-mail
export async function sendProductEmail(email, name = '') {
  try {
    // Verificar variáveis de ambiente
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error('Configurações de email incompletas');
    }

    // Criar transporter
    const transporter = createTransporter();

    // Verificar conexão
    await transporter.verify();

    // Preparar e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Seu Plano de Fuga está pronto!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f59e0b;">Sua fuga foi autorizada!</h1>
          <p>Olá ${name || '!'}</p>
          <p>Obrigado por adquirir o livro <strong>Plano de Fuga</strong>. Você está dando o primeiro passo rumo à sua liberdade.</p>

          <p><strong>📘 Acesse agora o livro completo (PDF):</strong><br />
            <a href="https://drive.google.com/file/d/1Jquf_zqCplHV0Ycnu8AV-hKpSFkqjQCE/" style="color: #f59e0b;">
              Baixar Plano de Fuga
            </a>
          </p>

          <p><strong>🛠️ Bônus: WorkBook de aplicação prática:</strong><br />
            <a href="https://drive.google.com/file/d/1HdcrI8kEQ840mlq9rYFB6hJNNebxCjK6/" style="color: #f59e0b;">
              Baixar WorkBook
            </a>
          </p>

          <p><strong>🧠 Ferramenta extra: O Algoritmo da Liberdade</strong><br />
            <a href="https://drive.google.com/file/d/1FMNpxMR_Pkt5XP6S1Ax55ZwEGv2Lfhb7/view?usp=sharing" style="color: #f59e0b;">
              Baixar O Algoritmo da Liberdade
            </a>
          </p>

          <p>Não se esqueça de entrar em nosso grupo exclusivo no WhatsApp:</p>
          <p>
            <a href="https://chat.whatsapp.com/C3qRZDCkrLZ9r2ECwmElJs" style="color: #f59e0b;">
              Acessar Grupo do WhatsApp
            </a>
          </p>

          <p>Boa leitura e bem-vindo à sua jornada de liberdade!</p>
          <p>Thiago Tidilodo<br />Central de Fugas</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);

    if (process.env.NODE_ENV === 'development') {
      console.log('E-mail enviado:', {
        messageId: info.messageId,
        accepted: info.accepted.length,
        rejected: info.rejected.length
      });
    }

    return true;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Erro ao enviar e-mail:', {
        name: error.name,
        message: error.message,
        code: error.code
      });
    }
    return false;
  }
}