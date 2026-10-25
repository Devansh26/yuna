import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';

export default function GiftSets() {
  const giftProducts = getProductsByCategory('gifts');

  return (
    <section className="py-20 bg-[#FCFAF6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-3">For those you love</p>
          <h2 className="text-editorial text-[clamp(2rem,5vw,3.5rem)] text-[#292925]">
            Gift sets
          </h2>
          <p className="text-sm text-[#76563E] mt-4 max-w-sm mx-auto leading-relaxed">
            Beautifully packaged for birthdays, housewarmings, and every occasion worth celebrating.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gifts"
            className="text-[10px] tracking-widest uppercase text-[#292925] border-b border-[#292925] pb-0.5 hover:text-[#626A43] hover:border-[#626A43] transition-colors"
          >
            View all gift sets
          </Link>
        </div>
      </div>
    </section>
  );
}
