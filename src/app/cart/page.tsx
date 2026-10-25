import CartPageClient from './CartPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Review your YUNA cart.',
};

export default function CartPage() {
  return <CartPageClient />;
}
