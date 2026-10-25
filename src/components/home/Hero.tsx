'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headlineRef.current, subRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (el) {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      }, 200 + i * 200);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#F6F3EC] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F3EC] via-[#EDE8DC] to-[#DCD6CA] opacity-60" />

      {/* Decorative matcha circle */}
      <div
        className="absolute right-[-10%] top-[10%] w-[60vw] max-w-2xl aspect-square rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #626A43, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Pre-headline */}
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-6 font-medium">
            Japanese Tea · India
          </p>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-editorial text-[clamp(2.5rem,8vw,6rem)] text-[#292925] leading-none mb-8"
          >
            Japanese tea,
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>quietly</em> made.
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="text-sm sm:text-base text-[#76563E] leading-relaxed max-w-lg mb-10"
          >
            Thoughtfully imagined matcha, roasted hojicha, and everyday rituals
            worth slowing down for.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3">
            <Link href="/shop">
              <Button size="lg">Shop all tea</Button>
            </Link>
            <Link href="/story">
              <Button variant="outline" size="lg">Find your ritual</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#AA9068]">
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-[#AA9068] animate-pulse" />
      </div>
    </section>
  );
}
