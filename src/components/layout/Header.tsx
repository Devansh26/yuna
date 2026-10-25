'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/cart-store';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Matcha', href: '/matcha' },
  { label: 'Hojicha', href: '/hojicha' },
  { label: 'Blends', href: '/blends' },
  { label: 'Accessories', href: '/accessories' },
  { label: 'Gift Sets', href: '/gifts' },
  { label: 'Our Story', href: '/story' },
];

export default function Header() {
  const totalItems = useCartStore((s) => s.totalItems());
  const toggleCart = useCartStore((s) => s.toggleCart);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#FCFAF6]/95 backdrop-blur-sm border-b border-[#DCD6CA]/50 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-[#292925] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="wordmark text-[#292925] hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500, letterSpacing: '0.25em', fontSize: '1.125rem', textTransform: 'uppercase' }}
        >
          YUNA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] tracking-widest uppercase text-[#292925] hover:text-[#626A43] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/search"
            aria-label="Search"
            className="text-[#292925] hover:text-[#626A43] transition-colors p-1"
          >
            <Search size={18} />
          </Link>

          <button
            onClick={() => toggleCart()}
            aria-label={`Cart (${totalItems} items)`}
            className="relative text-[#292925] hover:text-[#626A43] transition-colors p-1"
          >
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#626A43] text-white text-[9px] font-medium w-4 h-4 flex items-center justify-center rounded-full animate-pop">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FCFAF6] border-t border-[#DCD6CA]/50 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-xs tracking-widest uppercase text-[#292925] hover:text-[#626A43] transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
