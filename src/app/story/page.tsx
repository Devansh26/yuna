import Container from '@/components/ui/Container';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'YUNA began with a simple question: why was it so hard to find genuinely good Japanese tea in India?',
};

export default function StoryPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FCFAF6]">
      {/* Hero */}
      <div className="bg-[#292925] text-[#FCFAF6] py-24 mb-20">
        <Container size="md">
          <div className="text-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-6">Who we are</p>
            <h1
              className="text-[clamp(2.5rem,7vw,5rem)] text-[#FCFAF6] leading-none mb-8"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
            >
              Japanese tea,
              <br />
              <em style={{ fontStyle: 'italic' }}>quietly</em> made.
            </h1>
            <p className="text-sm text-[#AA9068] max-w-md mx-auto leading-relaxed">
              YUNA was born from a deep appreciation for Japanese tea culture and a belief that India deserved better access to it.
            </p>
          </div>
        </Container>
      </div>

      <Container size="md">
        {/* Mission */}
        <div className="max-w-xl mx-auto mb-20">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-4">Our mission</p>
          <h2
            className="text-[2rem] text-[#292925] mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
          >
            Bringing Japan's quietest rituals to everyday life in India.
          </h2>
          <div className="space-y-4 text-sm text-[#76563E] leading-relaxed">
            <p>
              YUNA began with a simple question: why was it so hard to find genuinely good Japanese tea in India? Not the commodity green tea powder sold in bulk bags, but the real thing — carefully tended tencha leaves, shade-grown over weeks, stone-ground to a fine powder that carries the taste of its origin.
            </p>
            <p>
              We spent months building relationships with small, family-run farms in Uji, Kyoto and Kagoshima — the two most celebrated tea-growing regions in Japan. Farms where tea is not a commodity but a craft, where every harvest decision is made with care.
            </p>
            <p>
              Every product we source is chosen because it genuinely pleased us first. If it doesn't make us slow down and notice, it doesn't carry the YUNA name.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-[#DCD6CA]/50 pt-16 mb-20">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-10 text-center">What we believe</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Origin matters',
                body: 'We tell you exactly where each tea comes from. Uji, Kyoto for our ceremonial matcha. Kagoshima for our everyday matcha. Kyoto for our hojicha.',
              },
              {
                title: 'Simplicity is a virtue',
                body: 'Our packaging is minimal. Our ingredient lists are short. We don\'t add things that don\'t need to be there.',
              },
              {
                title: 'Ritual, not performance',
                body: 'Tea is not a wellness trend. It\'s a daily practice of attention. We want YUNA to help you find a few quiet minutes, not add pressure to your day.',
              },
            ].map((val) => (
              <div key={val.title}>
                <h3
                  className="text-lg text-[#292925] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                  {val.title}
                </h3>
                <p className="text-xs text-[#76563E] leading-relaxed">{val.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sourcing */}
        <div id="guides" className="border-t border-[#DCD6CA]/50 pt-16 mb-20">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-6 text-center">Sourcing</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'Uji, Kyoto', desc: 'Home of Japan\'s finest ceremonial matcha. Tea has been grown here since the 12th century.', color: '#626A43' },
              { name: 'Kagoshima', desc: 'Japan\'s largest tea-growing region. Warm climate produces bold, vibrant everyday matcha.', color: '#343D2D' },
            ].map((source) => (
              <div key={source.name} className="p-8" style={{ backgroundColor: source.color + '15' }}>
                <div className="w-8 h-8 mb-4" style={{ backgroundColor: source.color, opacity: 0.6 }} />
                <h3
                  className="text-xl text-[#292925] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                  {source.name}
                </h3>
                <p className="text-xs text-[#76563E] leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-[#DCD6CA]/50 pt-16">
          <p className="text-sm text-[#76563E] mb-6">Ready to begin your ritual?</p>
          <Link
            href="/shop"
            className="text-[10px] tracking-widest uppercase text-[#292925] border-b border-[#292925] pb-0.5 hover:text-[#626A43] hover:border-[#626A43] transition-colors"
          >
            Explore all products
          </Link>
        </div>
      </Container>
    </div>
  );
}
