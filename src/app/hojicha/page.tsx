import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hojicha',
  description: 'Roasted Japanese green tea, stone-ground to a fine powder. Warm, earthy, and naturally low in caffeine.',
};

export default function HojichaPage() {
  const products = getProductsByCategory('hojicha');

  return (
    <div className="pt-32 pb-20 bg-[#FCFAF6]">
      <Container>
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#76563E] mb-3">Collection</p>
          <h1 className="text-editorial text-[clamp(2.5rem,6vw,4rem)] text-[#292925]">Hojicha</h1>
          <p className="text-sm text-[#76563E] mt-4 max-w-sm mx-auto leading-relaxed">
            Roasted over charcoal for a warm, caramel flavour. Naturally low in caffeine — an ideal evening ritual.
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
