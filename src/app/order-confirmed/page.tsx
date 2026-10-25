import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Order Confirmed — YUNA',
};

export default function OrderConfirmedPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FCFAF6] min-h-screen">
      <Container size="sm">
        <div className="text-center py-20 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#626A43]/10 flex items-center justify-center mx-auto">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#626A43" strokeWidth="1.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h1
            className="text-[2.5rem] text-[#292925]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
          >
            Order confirmed
          </h1>
          <p className="text-sm text-[#AA9068] max-w-sm mx-auto leading-relaxed">
            Thank you for your order. We'll prepare your tea with care and send you a dispatch notification shortly.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/shop">
              <Button size="lg">Continue shopping</Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="lg">Return home</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
