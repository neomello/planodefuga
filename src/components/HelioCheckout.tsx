'use client';

import { useEffect } from 'react';

interface HelioCheckoutProps {
  paylinkId: string;
  amount: string;
  themeMode?: 'dark' | 'light';
}

export function HelioCheckout({ 
  paylinkId = "683758ad19cee6584bf3e7d1", // Novo paylink
  amount, 
  themeMode = 'dark' 
}: HelioCheckoutProps) {
  const handlePayment = () => {
    // Link direto para checkout com redirecionamento para página de obrigado
    window.location.href = `https://app.hel.io/pay/${paylinkId}?success_url=${encodeURIComponent('https://planodefuga.app.br/obrigado')}`;
  };

  return (
    <div className="w-full">
      <button
        onClick={handlePayment}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-yellow-400/40"
      >
        Pagar com Cartão de Crédito
      </button>
    </div>
  );
} 