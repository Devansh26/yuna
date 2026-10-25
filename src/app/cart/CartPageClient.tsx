'use client';
import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/utils';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';

export default function CartPageClient() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 bg-[#FCFAF6] min-h-screen">
        <Container size="md">
          <div className="text-center py-20 space-y-6">
            <ShoppingBag size={40} className="mx-auto text-[#DCD6CA]" />
            <h1
              className="text-[2.5rem] text-[#292925]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              Your cart is empty
            </h1>
            <p className="text-sm text-[#AA9068]">You haven't added anything yet.</p>
            <Link href="/shop">
              <Button size="lg" className="mx-auto">Start shopping</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-[#FCFAF6] min-h-screen">
      <Container>
        <div className="mb-10">
          <h1
            className="text-[2.5rem] text-[#292925]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
          >
            Your Cart
          </h1>
          <p className="text-xs tracking-widest uppercase text-[#AA9068] mt-1">
            {items.reduce((s, i) => s + i.quantity, 0)} item{items.reduce((s, i) => s + i.quantity, 0) !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header row */}
            <div className="hidden sm:grid grid-cols-[1fr_auto_auto] gap-4 pb-3 border-b border-[#DCD6CA]/50 text-[10px] tracking-widest uppercase text-[#AA9068]">
              <span>Product</span>
              <span>Qty</span>
              <span>Total</span>
            </div>

            {items.map((item) => (
              <div key={`${item.productId}-${item.variantId}`} className="grid grid-cols-[80px_1fr] sm:grid-cols-[80px_1fr_auto_auto] gap-4 items-start border-b border-[#DCD6CA]/30 pb-6">
                {/* Image */}
                <Link href={`/products/${item.slug}`}>
                  <div className="relative w-20 h-24 bg-[#F6F3EC] overflow-hidden">
                    {item.image ? (
                      <Image src={item.image} alt={item.productName} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[#DCD6CA] text-xs">YUNA</div>
                    )}
                  </div>
                </Link>

                {/* Name & variant */}
                <div>
                  <Link href={`/products/${item.slug}`} className="text-sm font-medium text-[#292925] hover:text-[#626A43] transition-colors block leading-snug">
                    {item.productName}
                  </Link>
                  <p className="text-xs text-[#AA9068] mt-0.5">{item.variantName}</p>
                  <p className="text-sm font-medium text-[#292925] mt-1 sm:hidden">{formatPrice(item.price * item.quantity)}</p>
                  {/* Mobile quantity */}
                  <div className="flex items-center gap-2 mt-3 sm:hidden">
                    <div className="flex items-center gap-0 border border-[#DCD6CA]">
                      <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-sm hover:bg-[#F6F3EC]">−</button>
                      <span className="w-8 h-8 flex items-center justify-center text-xs border-x border-[#DCD6CA]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-sm hover:bg-[#F6F3EC]">+</button>
                    </div>
                    <button onClick={() => removeItem(item.productId, item.variantId)} className="text-[#AA9068] hover:text-[#292925] transition-colors"><X size={14} /></button>
                  </div>
                </div>

                {/* Desktop quantity */}
                <div className="hidden sm:flex items-center gap-0 border border-[#DCD6CA] h-fit">
                  <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)} className="w-8 h-9 flex items-center justify-center hover:bg-[#F6F3EC]"><Minus size={11} /></button>
                  <span className="w-9 h-9 flex items-center justify-center text-xs border-x border-[#DCD6CA]">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)} className="w-8 h-9 flex items-center justify-center hover:bg-[#F6F3EC]"><Plus size={11} /></button>
                </div>

                {/* Desktop price + remove */}
                <div className="hidden sm:flex flex-col items-end gap-2">
                  <span className="text-sm font-medium text-[#292925]">{formatPrice(item.price * item.quantity)}</span>
                  <button onClick={() => removeItem(item.productId, item.variantId)} className="text-[#AA9068] hover:text-[#292925] transition-colors"><X size={14} /></button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-2">
              <Link href="/shop" className="text-[10px] tracking-widest uppercase text-[#292925] border-b border-[#292925] pb-0.5 hover:text-[#626A43] hover:border-[#626A43] transition-colors">
                Continue shopping
              </Link>
              <button onClick={clearCart} className="text-[10px] tracking-widest uppercase text-[#AA9068] hover:text-[#292925] transition-colors">
                Clear cart
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#F6F3EC] p-6 space-y-4 sticky top-28">
              <h2 className="text-[10px] tracking-widest uppercase text-[#AA9068]">Order summary</h2>

              <div className="space-y-3 border-b border-[#DCD6CA]/50 pb-4">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.variantId}`} className="flex justify-between text-xs text-[#292925]">
                    <span className="truncate mr-4">{item.productName} × {item.quantity}</span>
                    <span className="shrink-0">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-sm font-medium text-[#292925]">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal())}</span>
              </div>

              {subtotal() < 199900 && (
                <p className="text-[10px] text-[#AA9068] tracking-wide">
                  Add {formatPrice(199900 - subtotal())} more for free shipping.
                </p>
              )}

              <p className="text-[10px] text-[#AA9068] tracking-wide">
                Shipping and taxes calculated at checkout.
              </p>

              {/* Checkout — placeholder until payment integration */}
              <Button fullWidth size="lg" disabled className="opacity-60">
                Checkout (Coming Soon)
              </Button>
              <p className="text-[9px] text-[#AA9068] text-center tracking-wide">
                Payment integration pending setup. See deployment notes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
