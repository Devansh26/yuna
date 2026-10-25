import Link from 'next/link';

export default function BrandStory() {
  return (
    <section className="py-20 bg-[#292925] text-[#FCFAF6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="max-w-md">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-6">Our story</p>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] text-[#FCFAF6] leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              Bringing Japan's
              <br />
              <em style={{ fontStyle: 'italic' }}>quietest rituals</em>
              <br />
              to India.
            </h2>
            <p className="text-sm text-[#AA9068] leading-relaxed mb-4">
              YUNA began with a simple question: why was it so hard to find genuinely good Japanese tea in India?
            </p>
            <p className="text-sm text-[#AA9068] leading-relaxed mb-8">
              We source directly from small family farms in Uji, Kyoto and Kagoshima — places where tea is not a commodity but a craft. Every tin that reaches you carries that intention.
            </p>
            <Link
              href="/story"
              className="text-[10px] tracking-widest uppercase text-[#FCFAF6] border-b border-[#FCFAF6]/40 pb-0.5 hover:border-[#FCFAF6] transition-colors"
            >
              Read our story
            </Link>
          </div>

          {/* Visual grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { bg: '#343D2D', label: 'Uji, Kyoto' },
              { bg: '#626A43', label: 'Stone-ground' },
              { bg: '#4a3426', label: 'Hand-roasted' },
              { bg: '#3d3d37', label: 'Thoughtfully packed' },
            ].map((item) => (
              <div
                key={item.label}
                className="aspect-square flex items-end p-4"
                style={{ backgroundColor: item.bg }}
              >
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#FCFAF6]/60">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
