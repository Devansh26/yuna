import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import ProductCard from '@/components/ui/ProductCard';
import VariantSelector from '@/components/product/VariantSelector';
import AddToCartWrapper from './AddToCartWrapper';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product not found' };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const defaultVariant = product.variants.find((v) => v.available) ?? product.variants[0];
  const related = product.relatedProductSlugs
    ? getRelatedProducts(product.relatedProductSlugs).slice(0, 4)
    : [];

  return (
    <div className="pt-24 pb-20 bg-[#FCFAF6]">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#AA9068]">
          <Link href="/shop" className="hover:text-[#292925] transition-colors">Shop</Link>
          <span>·</span>
          <Link href={`/${product.category}`} className="hover:text-[#292925] transition-colors capitalize">
            {product.category}
          </Link>
          <span>·</span>
          <span className="text-[#292925]">{product.name}</span>
        </nav>

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-3">
            <div className="relative aspect-[4/5] bg-[#F6F3EC] overflow-hidden">
              {product.images[0] ? (
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#EDE8DC]">
                  <span
                    className="text-[#DCD6CA] text-4xl tracking-[0.3em]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    YUNA
                  </span>
                </div>
              )}
            </div>
            {product.images.slice(1).map((img, i) => (
              <div key={i} className="relative aspect-[4/5] bg-[#F6F3EC] overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="lg:py-4 space-y-6">
            {/* Category & badges */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest uppercase text-[#AA9068]">{product.category}</span>
              {product.bestseller && (
                <span className="bg-[#626A43] text-white text-[9px] tracking-widest uppercase px-2 py-0.5">
                  Bestseller
                </span>
              )}
              {product.newArrival && (
                <span className="bg-[#292925] text-[#FCFAF6] text-[9px] tracking-widest uppercase px-2 py-0.5">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              className="text-[clamp(2rem,5vw,3rem)] text-[#292925] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-medium text-[#292925]">
                {formatPrice(defaultVariant.price)}
              </span>
              {defaultVariant.compareAtPrice && (
                <span className="text-sm text-[#AA9068] line-through">
                  {formatPrice(defaultVariant.compareAtPrice)}
                </span>
              )}
            </div>

            {/* Short description */}
            <p className="text-sm text-[#76563E] leading-relaxed">{product.shortDescription}</p>

            {/* Variant + Add to Cart — client component */}
            <AddToCartWrapper product={product} defaultVariantId={defaultVariant.id} />

            {/* Trust signals */}
            <div className="border-t border-[#DCD6CA]/50 pt-6 space-y-2">
              {[
                '✓ Free shipping on orders over ₹1,999',
                '✓ Sourced directly from Japan',
                '✓ Sealed for freshness',
              ].map((line) => (
                <p key={line} className="text-xs text-[#76563E] tracking-wide">{line}</p>
              ))}
            </div>

            {/* Full description */}
            <div className="border-t border-[#DCD6CA]/50 pt-6">
              <p className="text-sm text-[#292925] leading-relaxed">{product.description}</p>
            </div>

            {/* Flavour notes */}
            {product.flavourNotes && (
              <div className="border-t border-[#DCD6CA]/50 pt-6">
                <p className="text-[10px] tracking-widest uppercase text-[#AA9068] mb-3">Flavour notes</p>
                <div className="flex flex-wrap gap-2">
                  {product.flavourNotes.map((note) => (
                    <span
                      key={note}
                      className="text-xs px-3 py-1.5 border border-[#DCD6CA] text-[#292925] bg-[#F6F3EC]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Accordion-style details */}
            <div className="border-t border-[#DCD6CA]/50 pt-6 space-y-4">
              {product.ingredients && (
                <DetailBlock label="Ingredients" value={product.ingredients} />
              )}
              {product.preparationInstructions && (
                <DetailBlock label="Preparation" value={product.preparationInstructions} />
              )}
              {product.storageGuidance && (
                <DetailBlock label="Storage" value={product.storageGuidance} />
              )}
              {product.origin && (
                <DetailBlock label="Origin" value={product.origin} />
              )}
              {product.weight && (
                <DetailBlock label="Net weight" value={product.weight} />
              )}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-[#DCD6CA]/50 pt-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#AA9068] mb-2">You may also like</p>
                <h2
                  className="text-2xl text-[#292925]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                  Complete your ritual
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

function DetailBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[#DCD6CA]/50 pb-4 last:border-0">
      <p className="text-[10px] tracking-widest uppercase text-[#AA9068] mb-1.5">{label}</p>
      <p className="text-xs text-[#292925] leading-relaxed">{value}</p>
    </div>
  );
}
