import Head from 'next/head';
import dynamic from 'next/dynamic';
const PagamentoCartao = dynamic(() => import('../src/components/PagamentoCartao'), { ssr: false });

export default function CheckoutPage() {
  return (
    <div className="text-white min-h-screen font-sans text-center px-6 py-16 bg-black" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255, 0, 128, 0.15), #000000 70%)' }}>
      <Head>
        <title>Pagar com Pix | Plano de Fuga</title>
        <meta name="description" content="Faça o pagamento do livro Plano de Fuga via Pix." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/img/frase_expert.png" />
      </Head>

      <div className="max-w-2xl mx-auto">
        <img src="/img/logo-horizontal.png" alt="FlowPay" className="mx-auto w-64 mb-6" />
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">A Fuga Começa Aqui</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Clique no botão para realizar o pagamento <br /> <strong>Plano de Fuga</strong> (PDF).
        </p>

        <div className="bg-white/5 p-8 rounded-2xl border border-pink-500/30 shadow-lg pulse-animation button-hover mb-8">
          <a href="https://openpix.com.br/pay/8578e3eb-29d5-4416-9a04-164e241e76c7" target="_blank" rel="noopener noreferrer">
            <img src="/img/botton.png" alt="Pagar Plano de Fuga" className="mx-auto w-60 rounded-lg" />
          </a>
        </div>

        {/* Cartão de Crédito */}
        <div className="mb-8">
          <PagamentoCartao />
        </div>

        <div className="bg-yellow-400/10 text-yellow-400 font-semibold text-lg rounded-xl px-6 py-4 mb-8 border border-yellow-400/30 shadow">
        Após o pagamento você será redirecionado para a página de confirmação. E PDF do Plano de Fuga chegará também no seu e-mail.
        </div>

        <div className="text-yellow-400/50">//////////</div>
        <p><br /></p>
        <p><br /></p>
        <div className="mt-20">
          <img src="/img/flowpay-horizontal.png" alt="FlowPay" className="mx-auto w-64 mb-4" />
          <p className="text-sm text-gray-400 italic">
            Infraestrutura de pagamentos rápida, estável e com visão de futuro. <br /> FlowPay, onde a liberdade encontra tecnologia.<br />
            <span className="text-pink-900">EM BREVE: suporte a Cripto direto no seu checkout. </span>
          </p>
        </div>
      </div>
    </div>
  );
} 