"use client";
import { useState } from "react";

export default function PagamentoPix() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [pixCode, setPixCode] = useState<string | null>(null);
  const [paymentLink, setPaymentLink] = useState<string | null>(null);

  const handlePagamento = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/openpix/create-charge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nome, paymentTypes: ["PIX"] }),
      });

      const data = await response.json();

      if (data.qrCodeImage || data.qrCode || data.paymentLinkUrl) {
        setQrCode(data.qrCodeImage || null);
        setPixCode(data.qrCode || null);
        setPaymentLink(data.paymentLinkUrl || null);
      } else {
        throw new Error("QR Code não gerado");
      }
    } catch (err: any) {
      setError(err.message || "Erro ao processar pagamento");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-yellow-400">
      <div className="bg-white/90 rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col items-center">
        <img src="/img/livro-mockup.png" alt="Logo" className="w-24 mb-4" />
        <h1 className="text-2xl font-bold text-yellow-500 mb-2">Pagamento via Pix</h1>
        <p className="text-zinc-700 mb-6 text-center">
          Adquira o <strong>Plano de Fuga</strong> via Pix de forma 100% segura.
        </p>
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="mb-3 px-4 py-2 rounded border w-full"
          disabled={loading || !!qrCode}
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="mb-6 px-4 py-2 rounded border w-full"
          disabled={loading || !!qrCode}
        />
        {!qrCode && (
          <button
            onClick={handlePagamento}
            disabled={loading || !email || !nome}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition disabled:opacity-50 w-full shadow-lg shadow-blue-500/50 hover:shadow-blue-400/50 !important"
          >
            {loading ? "Gerando QR Code..." : "Gerar QR Code Pix"}
          </button>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {qrCode && (
          <div className="flex flex-col items-center mt-6 w-full">
            <img src={qrCode} alt="QR Code Pix" className="w-48 h-48 mb-4" />
            {pixCode && (
              <div className="mb-2 w-full">
                <input
                  type="text"
                  value={pixCode}
                  readOnly
                  className="w-full px-2 py-1 rounded border text-xs text-center"
                  onClick={e => (e.target as HTMLInputElement).select()}
                />
                <button
                  className="mt-2 bg-yellow-400 text-black px-4 py-1 rounded font-bold hover:bg-yellow-500 transition"
                  onClick={() => {
                    navigator.clipboard.writeText(pixCode!);
                  }}
                >
                  Copiar código Pix
                </button>
              </div>
            )}
            {paymentLink && (
              <a
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 underline"
              >
                Pagar pelo app do banco
              </a>
            )}
            <button
              className="mt-6 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
              onClick={() => {
                setQrCode(null);
                setPixCode(null);
                setPaymentLink(null);
              }}
            >
              Gerar outro Pix
            </button>
          </div>
        )}
        <p className="text-xs text-zinc-500 mt-6">
          Pagamento 100% seguro via OpenPix. Seus dados não são armazenados.
        </p>
      </div>
    </div>
  );
} 