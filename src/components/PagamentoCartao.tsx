"use client";
import { useState } from "react";

export default function PagamentoCartao() {
  const handlePagamento = () => {
    window.open(
      "https://app.hel.io/pay/683758ad19cee6584bf3e7d1?cardonly=true&success_url=https://planodefuga.app.br/obrigado",
      "_blank"
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <button
        onClick={handlePagamento}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-yellow-400/40"
      >
        Pagar com Cartão de Crédito
      </button>
    </div>
  );
} 