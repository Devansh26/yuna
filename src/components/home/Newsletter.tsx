'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // Placeholder: wire up to email provider (Klaviyo, Mailchimp, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
  };

  return (
    <section className="py-20 bg-[#EDE8DC]">
      <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-4">Stay close</p>
        <h2
          className="text-editorial text-[clamp(1.8rem,4vw,2.8rem)] text-[#292925] mb-4"
        >
          Rituals, recipes,
          <br />
          and early access.
        </h2>
        <p className="text-sm text-[#76563E] leading-relaxed mb-8 max-w-sm mx-auto">
          Join our community for seasonal guides, new arrivals, and occasional YUNA stories.
        </p>

        {status === 'success' ? (
          <div className="py-4">
            <p className="text-sm text-[#626A43] font-medium tracking-wide">
              You're in. Thank you for joining YUNA.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 border border-[#DCD6CA] bg-[#FCFAF6] px-4 py-3 text-xs text-[#292925] placeholder-[#AA9068] focus:outline-none focus:border-[#292925] transition-colors"
            />
            <Button type="submit" size="md" disabled={status === 'loading'}>
              {status === 'loading' ? '…' : 'Join'}
            </Button>
          </form>
        )}
        <p className="text-[10px] text-[#AA9068] mt-3 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
