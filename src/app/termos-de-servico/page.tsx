import Header from "@/components/Header";
import Footer from "@/components/Footer";

function TermosDeServico() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Termos de Serviço</h1>
      <p className="mb-2">
        Ao utilizar este site, você concorda em respeitar as regras e condições aqui descritas. O acesso e uso dos nossos serviços são permitidos apenas para fins legais e autorizados.
      </p>
      <p className="mb-2">
        O conteúdo digital adquirido é de uso pessoal e intransferível. Não é permitido compartilhar, revender ou distribuir o material sem autorização.
      </p>
      <p className="mb-2">
        Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. O uso contínuo do site após alterações implica concordância com os novos termos.
      </p>
      <p className="mb-2">
        Em caso de dúvidas, entre em contato pelo e-mail: contato@seudominio.com
      </p>
    </div>
  );
} 

export default TermosDeServico;