import Link from 'next/link';

const footerLinks = {
  Shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Matcha', href: '/matcha' },
    { label: 'Hojicha', href: '/hojicha' },
    { label: 'Blends', href: '/blends' },
    { label: 'Accessories', href: '/accessories' },
    { label: 'Gift Sets', href: '/gifts' },
  ],
  Learn: [
    { label: 'Our Story', href: '/story' },
    { label: 'Preparation Guides', href: '/story#guides' },
    { label: 'Matcha vs Hojicha', href: '/story#comparison' },
  ],
  Support: [
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#292925] text-[#DCD6CA] mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <p
              className="text-[#FCFAF6]"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500, letterSpacing: '0.25em', fontSize: '1.125rem', textTransform: 'uppercase' }}
            >
              YUNA
            </p>
            <p className="text-sm text-[#AA9068] leading-relaxed max-w-xs">
              Japanese tea, quietly made. Thoughtfully sourced matcha and hojicha for everyday rituals.
            </p>
            <p className="text-xs tracking-widest uppercase text-[#76563E]">India · Sourced from Japan</p>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              {['Instagram', 'Pinterest'].map((platform) => (
                <span
                  key={platform}
                  className="text-[10px] tracking-widest uppercase text-[#76563E] cursor-pointer hover:text-[#DCD6CA] transition-colors"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-[10px] tracking-widest uppercase text-[#FCFAF6] mb-4 font-medium">{section}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#AA9068] hover:text-[#FCFAF6] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#3d3d37] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-widest uppercase text-[#76563E]">
            © 2025 YUNA. All rights reserved.
          </p>
          <p className="text-[10px] tracking-widest uppercase text-[#76563E]">
            Made with care for India
          </p>
        </div>
      </div>
    </footer>
  );
}
