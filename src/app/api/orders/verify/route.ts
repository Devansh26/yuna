import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body as {
      razorpay_order_id: string;
      razorpay_payment_id: string;
      razorpay_signature: string;
    };

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing payment fields' }, { status: 400 });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET!;
    const body_string = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expected_signature = crypto
      .createHmac('sha256', secret)
      .update(body_string)
      .digest('hex');

    if (expected_signature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Payment verified — in production, mark the order as paid in your database here
    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (err) {
    console.error('[verify-payment]', err);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
