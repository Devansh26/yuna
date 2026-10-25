'use client';
import { useState } from 'react';

const guides = [
  {
    id: 'traditional',
    label: 'Traditional Bowl',
    product: 'Ceremonial Matcha',
    steps: [
      { step: '01', title: 'Warm the bowl', desc: 'Fill your chawan with hot water and let it sit for 30 seconds. Discard the water and dry gently.' },
      { step: '02', title: 'Sift the matcha', desc: 'Sift 1.5 g (½ tsp) of ceremonial matcha into the warm bowl to remove any clumps.' },
      { step: '03', title: 'Add water', desc: 'Pour 70 ml of water at 80 °C (not boiling). Boiling water makes matcha bitter.' },
      { step: '04', title: 'Whisk', desc: 'Hold the chasen near the base and whisk in a brisk W or M motion for 20–30 seconds until frothy.' },
      { step: '05', title: 'Drink immediately', desc: 'Rotate the bowl once and drink. Traditional matcha is at its best within two minutes of whisking.' },
    ],
    accent: '#626A43',
  },
  {
    id: 'latte',
    label: 'Iced Matcha Latte',
    product: 'Everyday Matcha',
    steps: [
      { step: '01', title: 'Prepare a concentrate', desc: 'Whisk 2 g (1 tsp) of matcha into 40 ml of water at 80 °C until smooth.' },
      { step: '02', title: 'Fill with ice', desc: 'Add a generous handful of ice to a tall glass.' },
      { step: '03', title: 'Add milk', desc: 'Pour 150–200 ml of cold milk or oat milk over the ice.' },
      { step: '04', title: 'Add concentrate', desc: 'Pour the matcha concentrate over the milk for a layered effect.' },
      { step: '05', title: 'Sweeten if needed', desc: 'Add a small amount of honey or maple syrup to taste. Stir gently and enjoy.' },
    ],
    accent: '#343D2D',
  },
  {
    id: 'hojicha',
    label: 'Hojicha Latte',
    product: 'Hojicha Powder',
    steps: [
      { step: '01', title: 'Whisk hojicha', desc: 'Sift 1.5–2 g of hojicha into a cup. Add 60 ml of water at 85–90 °C and whisk vigorously.' },
      { step: '02', title: 'Steam milk', desc: 'Heat 150 ml of milk — dairy or oat milk works beautifully — until gently steamed.' },
      { step: '03', title: 'Combine', desc: 'Pour the steamed milk slowly over the hojicha concentrate.' },
      { step: '04', title: 'Finish', desc: 'Dust with a little hojicha powder on top. Ideal for evenings — naturally low in caffeine.' },
    ],
    accent: '#76563E',
  },
];

export default function PrepGuide() {
  const [active, setActive] = useState(guides[0].id);
  const guide = guides.find((g) => g.id === active)!;

  return (
    <section className="py-20 bg-[#F6F3EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-3">Learn</p>
          <h2 className="text-editorial text-[clamp(2rem,5vw,3.5rem)] text-[#292925]">
            Preparation guides
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {guides.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`text-[10px] tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 ${
                active === g.id
                  ? 'bg-[#292925] text-[#FCFAF6] border-[#292925]'
                  : 'bg-transparent text-[#292925] border-[#DCD6CA] hover:border-[#292925]'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Guide steps */}
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#AA9068] mb-8 text-center">
            Best with: {guide.product}
          </p>
          <div className="space-y-6">
            {guide.steps.map((step, i) => (
              <div
                key={step.step}
                className="flex gap-6 items-start"
                style={{ opacity: 1 }}
              >
                <span
                  className="shrink-0 text-xs font-medium pt-0.5"
                  style={{ color: guide.accent, minWidth: '2rem', letterSpacing: '0.1em' }}
                >
                  {step.step}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#292925] mb-1">{step.title}</p>
                  <p className="text-xs text-[#76563E] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
