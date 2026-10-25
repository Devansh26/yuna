import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { products } from '@/data/products';

function getRazorpay() {
  const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) {
    throw new Error('Razorpay keys not configured');
  }
  return new Razorpay({ key_id, key_secret });
}

interface CartItemPayload {
  productId: string;
  variantId: string;
  quantity: number;
}

function recalculateTotal(items: CartItemPayload[]): number {
  let total = 0;
  for (const item of items) {
    const product = products.find((p) => p.id === item.productId);
    if (!product) continue;
    const variant = product.variants.find((v) => v.id === item.variantId);
    if (!variant || !variant.available) continue;
    total += variant.price * item.quantity;
  }
  return total;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, currency = 'INR' } = body as {
      items: CartItemPayload[];
      currency?: string;
    };

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Recalculate total server-side — never trust client-submitted prices
    const amount = recalculateTotal(items);

    if (amount <= 0) {
      return NextResponse.json({ error: 'Invalid cart total' }, { status: 400 });
    }

    const razorpay = getRazorpay();
    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: `yuna_${Date.now()}`,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error('[create-order]', err);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
