export type ProductCategory =
  | 'matcha'
  | 'hojicha'
  | 'blends'
  | 'accessories'
  | 'gifts'
  | 'seasonal';

export type ProductType =
  | 'powder'
  | 'blend'
  | 'accessory'
  | 'kit'
  | 'gift-set'
  | 'glassware';

export interface ProductVariant {
  id: string;
  name: string;
  price: number;        // in paise (INR × 100)
  compareAtPrice?: number;
  sku?: string;
  available: boolean;
  inventory?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  productType: ProductType;
  images: ProductImage[];
  variants: ProductVariant[];
  tags: string[];
  featured?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
  flavourNotes?: string[];
  ingredients?: string;
  preparationInstructions?: string;
  storageGuidance?: string;
  relatedProductSlugs?: string[];
  bundleComponents?: string[];
  origin?: string;
  weight?: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  productName: string;
  variantName: string;
  price: number;
  image: string;
  slug: string;
}

export interface Cart {
  items: CartItem[];
  isOpen: boolean;
}

export interface Category {
  id: ProductCategory;
  name: string;
  description: string;
  href: string;
  image: string;
  accent: string;
}
