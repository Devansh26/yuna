'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/lib/cart-store';
import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const defaultVariant = product.variants.find((v) => v.available) ?? product.variants[0];
  const hasDiscount = defaultVariant.compareAtPrice && defaultVariant.compareAtPrice > defaultVariant.price;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      productId: product.id,
      variantId: defaultVariant.id,
      quantity: 1,
      productName: product.name,
      variantName: defaultVariant.name,
      price: defaultVariant.price,
      image: product.images[0]?.src ?? '',
      slug: product.slug,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group block ${className}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#F6F3EC] aspect-[4/5]">
        {product.images[0] ? (
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#EDE8DC]">
            <span
              className="text-[#DCD6CA]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', letterSpacing: '0.15em' }}
            >
              YUNA
            </span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.newArrival && (
            <span className="bg-[#292925] text-[#FCFAF6] text-[10px] tracking-widest uppercase px-2 py-0.5">
              New
            </span>
          )}
          {product.bestseller && (
            <span className="bg-[#626A43] text-white text-[10px] tracking-widest uppercase px-2 py-0.5">
              Bestseller
            </span>
          )}
          {hasDiscount && (
            <span className="bg-[#D98C98] text-white text-[10px] tracking-widest uppercase px-2 py-0.5">
              Sale
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          onClick={handleQuickAdd}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 bg-[#FCFAF6] text-[#292925] w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#292925] hover:text-[#FCFAF6]"
        >
          {added ? (
            <span className="text-[10px] tracking-wider">✓</span>
          ) : (
            <ShoppingBag size={14} />
          )}
        </button>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <p className="text-[10px] tracking-widest uppercase text-[#AA9068]">{product.category}</p>
        <h3 className="text-sm font-medium text-[#292925] leading-tight">{product.name}</h3>
        <p className="text-xs text-[#76563E] line-clamp-2 leading-relaxed">{product.shortDescription}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium text-[#292925]">
            {formatPrice(defaultVariant.price)}
          </span>
          {hasDiscount && defaultVariant.compareAtPrice && (
            <span className="text-xs text-[#AA9068] line-through">
              {formatPrice(defaultVariant.compareAtPrice)}
            </span>
          )}
        </div>
        {product.variants.length > 1 && (
          <p className="text-[10px] text-[#AA9068] tracking-wide">
            {product.variants.length} sizes available
          </p>
        )}
      </div>
    </Link>
  );
}
