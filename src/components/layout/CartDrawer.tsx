'use client';

import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/utils';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCartStore();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#292925]/40 z-50 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FCFAF6] z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#DCD6CA]/50">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} />
            <span className="text-xs tracking-widest uppercase font-medium">
              Your Cart
              {items.length > 0 && (
                <span className="ml-2 text-[#AA9068]">({items.reduce((s, i) => s + i.quantity, 0)})</span>
              )}
            </span>
          </div>
          <button onClick={closeCart} aria-label="Close cart" className="text-[#292925] hover:opacity-60 transition-opacity">
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <ShoppingBag size={32} className="text-[#DCD6CA]" />
              <p className="text-sm text-[#AA9068]">Your cart is empty</p>
              <Button variant="outline" size="sm" onClick={closeCart}>
                Continue shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.productId}-${item.variantId}`} className="flex gap-4">
                {/* Image */}
                <Link href={`/products/${item.slug}`} onClick={closeCart} className="shrink-0">
                  <div className="relative w-20 h-24 bg-[#F6F3EC] overflow-hidden">
                    {item.image ? (
                      <Image src={item.image} alt={item.productName} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[#DCD6CA] text-xs">YUNA</div>
                    )}
                  </div>
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <Link href={`/products/${item.slug}`} onClick={closeCart}>
                    <p className="text-sm font-medium text-[#292925] leading-snug hover:text-[#626A43] transition-colors">
                      {item.productName}
                    </p>
                  </Link>
                  <p className="text-xs text-[#AA9068] mt-0.5">{item.variantName}</p>
                  <p className="text-sm font-medium text-[#292925] mt-1">{formatPrice(item.price)}</p>

                  {/* Quantity + Remove */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 border border-[#DCD6CA]">
                      <button
                        onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-[#F6F3EC] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-[#F6F3EC] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.variantId)}
                      className="text-[10px] tracking-widest uppercase text-[#AA9068] hover:text-[#292925] transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#DCD6CA]/50 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#AA9068] tracking-wide">Subtotal</span>
              <span className="font-medium text-[#292925]">{formatPrice(subtotal())}</span>
            </div>
            <p className="text-[10px] text-[#AA9068] tracking-wide">
              Shipping calculated at checkout. Taxes included.
            </p>
            <Link href="/cart" onClick={closeCart}>
              <Button fullWidth size="lg">
                View Cart & Checkout
              </Button>
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
