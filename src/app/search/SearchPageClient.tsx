'use client';
import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Container from '@/components/ui/Container';
import { Search } from 'lucide-react';

export default function SearchPageClient() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.flavourNotes?.some((n) => n.toLowerCase().includes(q)) ?? false)
    );
  }, [query]);

  return (
    <div className="pt-32 pb-20 bg-[#FCFAF6] min-h-screen">
      <Container size="lg">
        {/* Search input */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AA9068]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search matcha, hojicha, accessories…"
              autoFocus
              className="w-full border border-[#DCD6CA] bg-[#FCFAF6] pl-10 pr-4 py-4 text-sm text-[#292925] placeholder-[#AA9068] focus:outline-none focus:border-[#292925] transition-colors"
            />
          </div>
        </div>

        {/* Results */}
        {query && results.length === 0 && (
          <p className="text-center text-sm text-[#AA9068] py-10">
            No results for "{query}". Try "matcha", "hojicha", or "gift".
          </p>
        )}

        {results.length > 0 && (
          <>
            <p className="text-[10px] tracking-widest uppercase text-[#AA9068] mb-8 text-center">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </>
        )}

        {!query && (
          <div className="text-center py-10 text-[#AA9068]">
            <p className="text-sm">Start typing to search products.</p>
          </div>
        )}
      </Container>
    </div>
  );
}
