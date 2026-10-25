'use client';
import { useState } from 'react';
import { Product, ProductVariant } from '@/lib/types';
import { useCartStore } from '@/lib/cart-store';
import Button from '@/components/ui/Button';
import { ShoppingBag, Check } from 'lucide-react';

interface AddToCartProps {
  product: Product;
  variant: ProductVariant;
}

export default function AddToCart({ product, variant }: AddToCartProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    if (!variant.available) return;
    addItem({
      productId: product.id,
      variantId: variant.id,
      quantity: qty,
      productName: product.name,
      variantName: variant.name,
      price: variant.price,
      image: product.images[0]?.src ?? '',
      slug: product.slug,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Quantity selector */}
      <div>
        <p className="text-[10px] tracking-widest uppercase text-[#AA9068] mb-3">Quantity</p>
        <div className="flex items-center gap-0 border border-[#DCD6CA] w-fit">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-10 h-10 flex items-center justify-center hover:bg-[#F6F3EC] transition-colors text-[#292925]"
            aria-label="Decrease"
          >
            −
          </button>
          <span className="w-10 h-10 flex items-center justify-center text-sm font-medium border-x border-[#DCD6CA]">
            {qty}
          </span>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-10 h-10 flex items-center justify-center hover:bg-[#F6F3EC] transition-colors text-[#292925]"
            aria-label="Increase"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <Button
        onClick={handleAdd}
        disabled={!variant.available || added}
        fullWidth
        size="lg"
        className="gap-2"
      >
        {added ? (
          <>
            <Check size={14} />
            Added to Cart
          </>
        ) : variant.available ? (
          <>
            <ShoppingBag size={14} />
            Add to Cart
          </>
        ) : (
          'Sold Out'
        )}
      </Button>
    </div>
  );
}
