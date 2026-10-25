import { getBestsellers } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';

export default function Bestsellers() {
  const bestsellers = getBestsellers().slice(0, 4);

  return (
    <section className="py-20 bg-[#F6F3EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-3">Most loved</p>
            <h2 className="text-editorial text-[clamp(2rem,5vw,3.5rem)] text-[#292925]">
              Bestsellers
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:block text-[10px] tracking-widest uppercase text-[#292925] border-b border-[#292925] pb-0.5 hover:text-[#626A43] hover:border-[#626A43] transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="sm:hidden text-center mt-8">
          <Link
            href="/shop"
            className="text-[10px] tracking-widest uppercase text-[#292925] border-b border-[#292925] pb-0.5"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}
