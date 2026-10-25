'use client';
import { useState } from 'react';
import { Product } from '@/lib/types';
import VariantSelector from '@/components/product/VariantSelector';
import AddToCart from '@/components/product/AddToCart';
import { formatPrice } from '@/lib/utils';

interface Props {
  product: Product;
  defaultVariantId: string;
}

export default function AddToCartWrapper({ product, defaultVariantId }: Props) {
  const [selectedId, setSelectedId] = useState(defaultVariantId);
  const variant = product.variants.find((v) => v.id === selectedId) ?? product.variants[0];

  return (
    <div className="space-y-5">
      <VariantSelector
        variants={product.variants}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      {/* Current price for selected variant */}
      {product.variants.length > 1 && (
        <div className="flex items-baseline gap-3">
          <span className="text-lg font-medium text-[#292925]">{formatPrice(variant.price)}</span>
          {variant.compareAtPrice && (
            <span className="text-sm text-[#AA9068] line-through">{formatPrice(variant.compareAtPrice)}</span>
          )}
          <span className="text-xs text-[#AA9068]">{variant.name}</span>
        </div>
      )}
      <AddToCart product={product} variant={variant} />
    </div>
  );
}
