const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configuração do transporter de email
const transporter = nodemailer.createTransport({
  host: functions.config().email.host,
  port: Number(functions.config().email.port),
  secure: true,
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.password,
  },
});

// Função para enviar email de teste
exports.sendTestEmail = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { email = 'tidilodo@gmail.com', name = '' } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Plano de Fuga" <${functions.config().email.user}>`,
      to: email,
      subject: 'Teste de Envio - Plano de Fuga',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f59e0b; font-size: 28px; margin-bottom: 20px;">Sua fuga foi autorizada!</h1>
            <p style="font-size: 18px; color: #333;">Olá ${name || '!'}</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Obrigado por adquirir o livro <strong>Plano de Fuga</strong>. Você está dando o primeiro passo rumo à sua liberdade.</p>
          </div>

          <div style="margin: 30px 0;">
            <h2 style="color: #f59e0b; font-size: 20px; margin-bottom: 15px;">📘 Acesse agora o livro completo (PDF):</h2>
            <a href="https://drive.google.com/file/d/1Jquf_zqCplHV0Ycnu8AV-hKpSFkqjQCE/" 
               style="display: inline-block; background-color: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Baixar Plano de Fuga
            </a>
          </div>

          <div style="margin: 30px 0;">
            <h2 style="color: #f59e0b; font-size: 20px; margin-bottom: 15px;">🛠️ Bônus: WorkBook de aplicação prática:</h2>
            <a href="https://drive.google.com/file/d/1HdcrI8kEQ840mlq9rYFB6hJNNebxCjK6/" 
               style="display: inline-block; background-color: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Baixar WorkBook
            </a>
          </div>

          <div style="margin: 30px 0;">
            <h2 style="color: #f59e0b; font-size: 20px; margin-bottom: 15px;">🧠 Ferramenta extra: O Algoritmo da Liberdade</h2>
            <a href="https://drive.google.com/file/d/1nT5JtzKfWt7FfIyXVjTGzRkP4-MR2tp7/view?usp=sharing" 
               style="display: inline-block; background-color: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Baixar O Algoritmo da Liberdade
            </a>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
            <p style="font-size: 16px; margin-bottom: 15px;">Não se esqueça de entrar em nosso grupo exclusivo no WhatsApp:</p>
            <a href="https://chat.whatsapp.com/C3qRZDCkrLZ9r2ECwmElJs" 
               style="display: inline-block; background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              <span style="font-size: 1.2em;">👉</span> Acessar Grupo do WhatsApp
            </a>
          </div>

          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="font-size: 16px; color: #666;">Boa leitura e bem-vindo à sua jornada de liberdade!</p>
            <p style="font-size: 16px; color: #666; margin-top: 10px;">Thiago Tidilodo<br />Central de Fugas</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ 
      message: 'E-mail enviado com sucesso!',
      details: {
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected
      }
    });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ 
      error: 'Falha ao enviar e-mail',
      details: {
        name: error.name,
        message: error.message,
        code: error.code
      }
    });
  }
}); 