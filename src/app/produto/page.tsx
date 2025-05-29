'use client';

import { useState } from 'react';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function ProdutoPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para processar a compra via Pix
  const handleCompraPix = () => {
    setLoading(true);
    setError(null);
    window.location.href = 'https://openpix.com.br/pay/45c7b3c0-05a8-4b29-a707-20677e496715';
  };

  return (
    <main className="animate-fadeIn">
      {/* Seção Principal do Produto */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src="/img/livro-mockup.png" alt="Mockup do Livro" className="mx-auto w-64 md:w-80 drop-shadow-xl rounded-lg" />
          <div>
            <h1 className="text-4xl font-bold mb-4">Plano de Fuga – um livro direto, cru e necessário</h1>
            <p className="text-xl mb-6">Um manifesto escrito para quem está no limite. Nada de autoajuda superficial. Só verdade prática, provocação e ação real.</p>
            <ul className="space-y-2 text-lg mb-6">
              <li>🔓 Quebra o ciclo do automático</li>
              <li>🧠 Provoca reflexão sobre propósito e liberdade</li>
              <li>🚀 Dá o primeiro passo para alinhar vida com ação</li>
            </ul>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-yellow-400 text-3xl font-bold">R$27,00</span>
            </div>
            
            {/* Botões de pagamento */}
            <div className="space-y-4">
              <Link href="/pagamentopix" className="w-full">
                <button
                  className="w-full bg-purple-700 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 shadow-lg hover:shadow-purple-400/20"
                >
                  Pagar com Pix
                </button>
              </Link>

              <Link href="/pagamentocartao" className="w-full">
                <button
                  className="w-full bg-zinc-800 hover:bg-zinc-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-zinc-400/20"
                >
                  Pagar com Cartão de Crédito
                </button>
              </Link>
            </div>

            {error && <p className="mt-4 text-red-500">{error}</p>}
            <p className="text-gray-400 mt-2 text-sm">Após a confirmação do pagamento, entraremos em contato por e-mail para enviar o PDF do livro.</p>
          </div>
        </div>
      </section>
      {/* Seção Autor */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <div className="inline-block bg-black/80 border border-yellow-400/40 rounded-2xl p-8 shadow-lg">
          <img src="/img/avata_tidi_gamer.png" alt="Avatar Tidilodo" className="mx-auto w-32 rounded-full mb-4 border-4 border-yellow-400/30" />
          <h2 className="text-3xl font-semibold mb-2">Sobre o autor</h2>
          <p className="text-lg max-w-xl mx-auto mb-2">Thiago Tidilodo é consultor, estrategista e criador da Central de Fugas. Com mais de 20 anos ajudando pessoas e marcas a saírem da estagnação e viverem com propósito, ele escreveu este livro como um disparador de consciência.</p>
          <span className="text-yellow-400 font-mono">"A fuga começa quando você decide agir."</span>
        </div>
      </section>
      {/* Seção Depoimentos */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">O que estão dizendo:</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <blockquote className="italic text-yellow-400">"Esse livro me deu um tapa de lucidez."</blockquote>
          <blockquote className="italic text-yellow-400">"Finalmente alguém escreveu o que eu sentia."</blockquote>
          <blockquote className="italic text-yellow-400">"R$29,90 que valeram por uma terapia."</blockquote>
        </div>
      </section>
      <Footer />
    </main>
  );
} 