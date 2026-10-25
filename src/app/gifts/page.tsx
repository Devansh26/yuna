import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gift Sets',
  description: 'Beautifully packaged matcha and hojicha gift sets. Perfect for birthdays, housewarmings, and every occasion.',
};

export default function GiftsPage() {
  const products = getProductsByCategory('gifts');

  return (
    <div className="pt-32 pb-20 bg-[#FCFAF6]">
      <Container>
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#292925] mb-3">For those you love</p>
          <h1 className="text-editorial text-[clamp(2.5rem,6vw,4rem)] text-[#292925]">Gift Sets</h1>
          <p className="text-sm text-[#76563E] mt-4 max-w-sm mx-auto leading-relaxed">
            Thoughtfully curated sets, gift-ready in YUNA packaging. For birthdays, housewarmings, and every celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
