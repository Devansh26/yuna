import Link from 'next/link';

const matchaFacts = [
  { icon: '🍵', label: 'Colour', value: 'Vivid emerald green' },
  { icon: '☕', label: 'Flavour', value: 'Grassy, umami, light bitterness' },
  { icon: '⚡', label: 'Caffeine', value: 'Moderate–high' },
  { icon: '🌅', label: 'Best time', value: 'Morning or afternoon' },
  { icon: '🌿', label: 'Process', value: 'Shade-grown & stone-ground' },
];

const hojijaFacts = [
  { icon: '🍵', label: 'Colour', value: 'Warm amber brown' },
  { icon: '☕', label: 'Flavour', value: 'Roasted, caramel, toasty' },
  { icon: '😴', label: 'Caffeine', value: 'Naturally low' },
  { icon: '🌙', label: 'Best time', value: 'Afternoon or evening' },
  { icon: '🔥', label: 'Process', value: 'Roasted over charcoal' },
];

export default function Comparison() {
  return (
    <section className="py-20 bg-[#F6F3EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-3">Not sure where to start?</p>
          <h2 className="text-editorial text-[clamp(2rem,5vw,3.5rem)] text-[#292925]">
            Matcha vs Hojicha
          </h2>
          <p className="text-sm text-[#76563E] mt-4 max-w-md mx-auto leading-relaxed">
            Two exceptional Japanese teas with very different personalities. Here's what makes each one special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Matcha card */}
          <div className="bg-[#FCFAF6] p-8 border border-[#DCD6CA]/50">
            <div
              className="w-10 h-10 mb-6"
              style={{ background: 'linear-gradient(135deg, #626A43, #343D2D)' }}
            />
            <h3
              className="text-2xl text-[#292925] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              Matcha
            </h3>
            <div className="space-y-4">
              {matchaFacts.map((fact) => (
                <div key={fact.label} className="flex justify-between items-start border-b border-[#DCD6CA]/50 pb-3">
                  <span className="text-[10px] tracking-widest uppercase text-[#AA9068] w-24 shrink-0">{fact.label}</span>
                  <span className="text-xs text-[#292925] text-right">{fact.value}</span>
                </div>
              ))}
            </div>
            <Link
              href="/matcha"
              className="mt-8 block text-[10px] tracking-widest uppercase text-[#626A43] border-b border-[#626A43] pb-0.5 w-fit hover:opacity-70 transition-opacity"
            >
              Shop Matcha
            </Link>
          </div>

          {/* Hojicha card */}
          <div className="bg-[#FCFAF6] p-8 border border-[#DCD6CA]/50">
            <div
              className="w-10 h-10 mb-6"
              style={{ background: 'linear-gradient(135deg, #76563E, #4a3426)' }}
            />
            <h3
              className="text-2xl text-[#292925] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              Hojicha
            </h3>
            <div className="space-y-4">
              {hojijaFacts.map((fact) => (
                <div key={fact.label} className="flex justify-between items-start border-b border-[#DCD6CA]/50 pb-3">
                  <span className="text-[10px] tracking-widest uppercase text-[#AA9068] w-24 shrink-0">{fact.label}</span>
                  <span className="text-xs text-[#292925] text-right">{fact.value}</span>
                </div>
              ))}
            </div>
            <Link
              href="/hojicha"
              className="mt-8 block text-[10px] tracking-widest uppercase text-[#76563E] border-b border-[#76563E] pb-0.5 w-fit hover:opacity-70 transition-opacity"
            >
              Shop Hojicha
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
