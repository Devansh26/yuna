import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function EditorialFeature() {
  return (
    <section className="bg-[#FCFAF6] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Image block */}
          <div className="relative">
            {/* Placeholder gradient standing in for a real product image */}
            <div
              className="aspect-[4/5] max-w-md mx-auto lg:mx-0"
              style={{ background: 'linear-gradient(135deg, #D98C98 0%, #E8A5B0 40%, #F6C8D1 70%, #FCFAF6 100%)' }}
            >
              {/* Decorative label */}
              <div className="absolute bottom-6 left-6 bg-[#FCFAF6]/90 backdrop-blur-sm px-4 py-3">
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#AA9068]">New blend</p>
                <p
                  className="text-xl text-[#292925] mt-0.5"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                  Strawberry Matcha
                </p>
              </div>
            </div>

            {/* Accent circle */}
            <div
              className="absolute -right-8 -top-8 w-32 h-32 rounded-full border border-[#D98C98]/30"
              style={{ borderStyle: 'dashed' }}
            />
          </div>

          {/* Text */}
          <div className="lg:pl-20 max-w-md">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#D98C98] mb-4">
              Our most-loved blend
            </p>
            <h2
              className="text-editorial text-[clamp(2.5rem,5vw,4rem)] text-[#292925] leading-none mb-6"
            >
              Pink, bright,
              <br />
              <em style={{ fontStyle: 'italic' }}>beautifully</em> you.
            </h2>
            <p className="text-sm text-[#76563E] leading-relaxed mb-4">
              Ceremonial matcha meets freeze-dried strawberry in a blend that is as pretty to look at as it is to drink. Serve over ice with oat milk for the perfect summer ritual.
            </p>
            <p className="text-xs text-[#AA9068] tracking-wide mb-8">
              No added sugar · Naturally coloured · From ₹1,490
            </p>
            <Link href="/products/strawberry-matcha-blend">
              <Button variant="secondary" size="md">
                Shop Strawberry Matcha
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
