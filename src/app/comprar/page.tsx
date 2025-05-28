import { HelioCheckout } from '../../components/HelioCheckout';

export default function ComprarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Comprar Plano de Fuga</h1>
      
      <div className="max-w-2xl mx-auto">
        <HelioCheckout 
          paylinkId="683752d0b2e2a4900b621c11"
          amount="29.90"
          themeMode="dark"
        />
      </div>
    </div>
  );
} 