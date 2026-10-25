import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matcha',
  description: 'Ceremonial and everyday matcha sourced from Uji, Kyoto and Kagoshima, Japan.',
};

export default function MatchaPage() {
  const products = getProductsByCategory('matcha');

  return (
    <div className="pt-32 pb-20 bg-[#FCFAF6]">
      <Container>
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#626A43] mb-3">Collection</p>
          <h1 className="text-editorial text-[clamp(2.5rem,6vw,4rem)] text-[#292925]">Matcha</h1>
          <p className="text-sm text-[#76563E] mt-4 max-w-sm mx-auto leading-relaxed">
            Stone-ground green tea powder from Uji, Kyoto and Kagoshima. For the traditional bowl and the everyday latte.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
