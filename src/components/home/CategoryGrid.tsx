import Link from 'next/link';
import { categories } from '@/data/products';

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-[#FCFAF6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-3">Explore</p>
          <h2
            className="text-editorial text-[clamp(2rem,5vw,3.5rem)] text-[#292925]"
          >
            Shop by collection
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative aspect-square overflow-hidden"
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ backgroundColor: cat.accent, opacity: 0.12 }}
              />
              <div
                className="absolute inset-0 group-hover:opacity-25 transition-opacity duration-300"
                style={{ backgroundColor: cat.accent, opacity: 0.08 }}
              />

              {/* Solid colour block with category initial */}
              <div
                className="absolute inset-0 flex items-end"
                style={{ backgroundColor: cat.accent + '18' }}
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] opacity-10"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: cat.accent }}
                >
                  {cat.name[0]}
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#DCD6CA] transition-all duration-200" />

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#292925]/20 to-transparent">
                <p
                  className="text-[10px] tracking-widest uppercase font-medium text-[#292925] group-hover:text-[#292925]"
                >
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
