'use client';
import { ProductVariant } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function VariantSelector({ variants, selectedId, onSelect }: VariantSelectorProps) {
  if (variants.length === 1) return null;

  return (
    <div>
      <p className="text-[10px] tracking-widest uppercase text-[#AA9068] mb-3">Size</p>
      <div className="flex flex-wrap gap-2">
        {variants.map((v) => (
          <button
            key={v.id}
            onClick={() => onSelect(v.id)}
            disabled={!v.available}
            className={`px-4 py-2.5 border text-xs font-medium tracking-wide transition-all duration-150 ${
              selectedId === v.id
                ? 'bg-[#292925] text-[#FCFAF6] border-[#292925]'
                : v.available
                ? 'bg-transparent text-[#292925] border-[#DCD6CA] hover:border-[#292925]'
                : 'bg-[#F6F3EC] text-[#AA9068] border-[#DCD6CA] opacity-50 cursor-not-allowed line-through'
            }`}
          >
            {v.name}
            {v.available && (
              <span className="ml-1.5 text-[#AA9068] font-normal">{formatPrice(v.price)}</span>
            )}
            {!v.available && <span className="ml-1.5 text-[#AA9068] font-normal">Sold out</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
