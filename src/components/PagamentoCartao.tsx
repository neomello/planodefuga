"use client";
import { useState } from 'react';
// import { signInWithGoogle, useFirebaseUser } from '@/firebase/auth'; // Exemplo para futura integração

export default function PagamentoCartao() {
  // const user = useFirebaseUser(); // Quando integrar Firebase Auth
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [email, setEmail] = useState(user?.email || '');
  // const [nome, setNome] = useState(user?.displayName || '');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  // Esqueleto para login Google
  const handleGoogleLogin = async () => {
    // Aqui você vai chamar signInWithGoogle() do Firebase Auth futuramente
    alert('Login com Google ainda não implementado.');
  };

  const handlePagamento = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/openpix/create-charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nome })
      });

      const data = await response.json();

      if (data.paymentLinkUrl) {
        window.location.href = data.paymentLinkUrl;
      } else {
        throw new Error('Link de pagamento não gerado');
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao processar pagamento');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-yellow-400">
      <div className="bg-white/90 rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col items-center">
        <img src="/img/livro-mockup.png" alt="Logo" className="w-24 mb-4" />
        <h1 className="text-2xl font-bold text-yellow-500 mb-2">Pagamento com Cartão</h1>
        <p className="text-zinc-700 mb-6 text-center">
          Adquira o <strong>Plano de Fuga</strong> com cartão de crédito de forma 100% segura.
        </p>

        {/* Botão de login Google (visual padrão Google) */}
        <button
          className="mb-6 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium rounded shadow-sm px-4 py-2 w-full hover:bg-gray-50 transition"
          onClick={handleGoogleLogin}
        >
          <svg width="20" height="20" viewBox="0 0 48 48" className="inline-block">
            <g>
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.64 2.36 30.13 0 24 0 14.82 0 6.73 5.48 2.69 13.44l7.98 6.2C12.13 13.13 17.62 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.02l7.19 5.59C43.93 37.36 46.1 31.47 46.1 24.55z"/>
              <path fill="#FBBC05" d="M10.67 28.09c-1.01-2.99-1.01-6.19 0-9.18l-7.98-6.2C.64 16.36 0 20.07 0 24c0 3.93.64 7.64 2.69 11.29l7.98-6.2z"/>
              <path fill="#EA4335" d="M24 48c6.13 0 11.64-2.02 15.54-5.5l-7.19-5.59c-2.01 1.35-4.6 2.15-8.35 2.15-6.38 0-11.87-3.63-14.33-8.93l-7.98 6.2C6.73 42.52 14.82 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </g>
          </svg>
          <span>Entrar com Google</span>
        </button>

        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="mb-3 px-4 py-2 rounded border w-full"
          disabled={loading}
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="mb-6 px-4 py-2 rounded border w-full"
          disabled={loading}
        />
        <button
          onClick={handlePagamento}
          disabled={loading || !email || !nome}
          className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-bold transition disabled:opacity-50 w-full shadow-lg shadow-purple-500/50 hover:shadow-purple-400/50"
        >
          {loading ? 'Redirecionando...' : 'Pagar com Cartão'}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <p className="text-xs text-zinc-500 mt-6">
          Pagamento 100% seguro via OpenPix. Seus dados não são armazenados.
        </p>
      </div>
    </div>
  );
} 