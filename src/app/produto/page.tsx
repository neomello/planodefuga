'use client';

import { useState } from 'react';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function ProdutoPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="animate-fadeIn">
      {/* Header/Navegação */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/" className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition-colors">
            ← Central de Fugas
          </Link>
        </div>
      </nav>

      {/* Seção Principal do Produto */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Imagem do Produto */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/img/livro-mockup.png" 
                  alt="Mockup do Livro Plano de Fuga" 
                  className="mx-auto w-full max-w-md drop-shadow-2xl rounded-lg transition-transform hover:scale-105" 
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  LANÇAMENTO
                </div>
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="order-1 lg:order-2">
              <div className="mb-4">
                <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-400/30">
                  E-BOOK DIGITAL
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Plano de Fuga
                <span className="block text-xl md:text-2xl text-yellow-400 font-normal mt-2">
                  um livro direto, cru e necessário
                </span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
                Um manifesto escrito para quem está no limite. Nada de autoajuda superficial. 
                Só verdade prática, provocação e ação real.
              </p>
              
              {/* Benefícios */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-yellow-400">O que você vai encontrar:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl">🔓</span>
                    <span className="text-gray-300">Quebra o ciclo do automático e desperta sua consciência</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl">🧠</span>
                    <span className="text-gray-300">Provoca reflexão profunda sobre propósito e liberdade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl">🚀</span>
                    <span className="text-gray-300">Dá o primeiro passo para alinhar sua vida com ação real</span>
                  </li>
                </ul>
              </div>
              
              {/* Preço */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-yellow-400">R$ 27,00</span>
                  <div className="text-sm text-gray-400">
                    <div className="line-through">R$ 49,90</div>
                    <div className="text-green-400 font-semibold">46% OFF</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  🔥 Oferta por tempo limitado
                </p>
              </div>
              
              {/* Botões de Pagamento */}
              <div className="space-y-4 mb-6">
                <Link href="/pagamentopix" className="block">
                  <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-400/40 flex items-center justify-center gap-3 group">
                    <span className="text-2xl">📱</span>
                    <span className="text-lg">Pagar com Pix - Desconto Instantâneo</span>
                    <span className="text-sm bg-green-700 px-2 py-1 rounded group-hover:bg-green-600 transition-colors">
                      Aprovação Imediata
                    </span>
                  </button>
                </Link>
               
                <Link href="/pagamentocartao" className="block">
                  <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/40 flex items-center justify-center gap-3">
                    <span className="text-2xl">💳</span>
                    <span className="text-lg">Pagar com Cartão de Crédito</span>
                  </button>
                </Link>
              </div>

              {/* Informações de Entrega */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">📧</span>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-1">Entrega Imediata</h4>
                    <p className="text-sm text-gray-300">
                      Após a confirmação do pagamento, você receberá o PDF do livro 
                      diretamente no seu e-mail em até 5 minutos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Garantia */}
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">🛡️</span>
                  <div>
                    <h4 className="font-semibold text-yellow-400">Garantia de 7 dias</h4>
                    <p className="text-sm text-gray-300">
                      Não gostou? Devolvemos 100% do seu dinheiro.
                    </p>
                  </div>
                </div>
              </div>

              {loading && (
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 text-yellow-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400"></div>
                    Processando...
                  </div>
                </div>
              )}
              
              {error && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400">{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Autor */}
      <section className="bg-gray-900/50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-black/80 border border-yellow-400/30 rounded-2xl p-8 shadow-2xl">
            <img 
              src="/img/avata_tidi_gamer.png" 
              alt="Avatar Thiago Tidilodo" 
              className="mx-auto w-32 h-32 rounded-full mb-6 border-4 border-yellow-400/30 object-cover" 
            />
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Sobre o Autor</h2>
            <h3 className="text-xl font-semibold mb-4">Thiago Tidilodo</h3>
            <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-300 leading-relaxed">
              Consultor, estrategista e criador da Central de Fugas. Com mais de 20 anos 
              ajudando pessoas e marcas a saírem da estagnação e viverem com propósito, 
              ele escreveu este livro como um disparador de consciência.
            </p>
            <blockquote className="text-xl text-yellow-400 font-medium italic">
              "A fuga começa quando você decide agir."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-yellow-400">O que estão dizendo:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <div className="text-yellow-400 text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="italic text-gray-300 mb-3">
                "Esse livro me deu um tapa de lucidez."
              </blockquote>
              <p className="text-sm text-yellow-400">— Leitor verificado</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <div className="text-yellow-400 text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="italic text-gray-300 mb-3">
                "Finalmente alguém escreveu o que eu sentia."
              </blockquote>
              <p className="text-sm text-yellow-400">— Leitor verificado</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <div className="text-yellow-400 text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="italic text-gray-300 mb-3">
                "R$27,00 que valeram por uma terapia."
              </blockquote>
              <p className="text-sm text-yellow-400">— Leitor verificado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 py-16 px-6 border-t border-yellow-400/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para sua fuga?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Não deixe mais um dia passar no piloto automático.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pagamentopix">
              <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg">
                🚀 Começar Agora com Pix
              </button>
            </Link>
            <Link href="/pagamentocartao">
              <button className="bg-primary-purple:#7c3aed hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg">
                💳 Parcelar no Cartão
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}