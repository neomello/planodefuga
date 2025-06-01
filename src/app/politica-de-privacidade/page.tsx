import Header from "@/components/Header";
import Footer from "@/components/Footer";

function PoliticaDePrivacidade() {
    return (
      <div className="max-w-2xl mx-auto p-8 text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">Política de Privacidade</h1>
        <p className="mb-4">
          Este site respeita a sua privacidade. As informações coletadas (como nome e e-mail) são utilizadas exclusivamente para autenticação, processamento de pagamentos e entrega segura de produtos digitais.
        </p>
        <p className="mb-4">
          Seus dados não são compartilhados com terceiros, salvo em situações estritamente necessárias, como intermediação de pagamentos via <strong>OpenPix</strong> ou cumprimento de obrigações legais.
        </p>
        <p className="mb-4">
          O uso contínuo deste site implica na aceitação desta política. Caso tenha dúvidas ou queira solicitar a exclusão dos seus dados, entre em contato através do e-mail: <a href="planodefugaikigai@gmail.com" className="text-yellow-400 underline">planodefugaikigai@gmail.com          om</a>.
        </p>
        <p className="text-sm text-gray-400 mt-6">Última atualização: Maio de 2025</p>
      </div>
    );
  }

  export default PoliticaDePrivacidade;
  