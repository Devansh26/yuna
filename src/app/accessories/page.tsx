import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools & Glassware',
  description: 'Bamboo whisks, ceramic bowls, glass latte cups, and tea preparation tools.',
};

export default function AccessoriesPage() {
  const products = getProductsByCategory('accessories');

  return (
    <div className="pt-32 pb-20 bg-[#FCFAF6]">
      <Container>
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-3">Collection</p>
          <h1 className="text-editorial text-[clamp(2.5rem,6vw,4rem)] text-[#292925]">
            Tools & Glassware
          </h1>
          <p className="text-sm text-[#76563E] mt-4 max-w-sm mx-auto leading-relaxed">
            Handcrafted bamboo whisks, ceramic bowls, and double-walled glass cups for a complete tea experience.
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
