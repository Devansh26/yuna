import { Product, Category } from '@/lib/types';

// Prices stored in paise (INR × 100)
// Sample data — replace with verified commercial data before launch

export const products: Product[] = [
  // ── MATCHA ──────────────────────────────────────────────────────────────────
  {
    id: 'matcha-ceremonial',
    slug: 'ceremonial-matcha',
    name: 'Ceremonial Matcha',
    shortDescription: 'Pure, single-origin ceremonial grade matcha from Uji, Kyoto.',
    description:
      'Stone-ground from the first spring harvest of shade-grown tencha leaves in Uji, Kyoto. Vivid green, silky texture, and a clean umami finish with no bitterness. Best whisked in warm water as a traditional bowl of matcha.',
    category: 'matcha',
    productType: 'powder',
    images: [
      { src: '/images/products/ceremonial-matcha-1.svg', alt: 'Ceremonial matcha powder in a pale ceramic bowl' },
      { src: '/images/products/ceremonial-matcha-2.svg', alt: 'Ceremonial matcha tin against linen backdrop' },
    ],
    variants: [
      { id: 'cm-30g', name: '30 g', price: 129000, sku: 'YUN-CM-30', available: true, inventory: 50 },
      { id: 'cm-60g', name: '60 g', price: 229000, sku: 'YUN-CM-60', available: true, inventory: 30 },
      { id: 'cm-100g', name: '100 g', price: 349000, sku: 'YUN-CM-100', available: true, inventory: 20 },
    ],
    tags: ['matcha', 'ceremonial', 'uji', 'kyoto', 'bestseller'],
    featured: true,
    bestseller: true,
    flavourNotes: ['Umami', 'Grass', 'Light sweetness', 'Clean finish'],
    ingredients: 'Shade-grown tencha (Camellia sinensis), single origin, Uji, Kyoto, Japan.',
    preparationInstructions:
      'Sift 1.5 g (½ tsp) into a warmed bowl. Add 70 ml water at 80 °C. Whisk with a bamboo chasen in a brisk W motion until frothy. Drink immediately.',
    storageGuidance: 'Seal tightly after opening. Store in a cool, dark place away from moisture and strong odours. Use within 3 months.',
    relatedProductSlugs: ['bamboo-chasen', 'matcha-bowl', 'matcha-starter-kit'],
    origin: 'Uji, Kyoto, Japan',
    weight: '30 g / 60 g / 100 g',
  },
  {
    id: 'matcha-culinary',
    slug: 'culinary-matcha',
    name: 'Everyday Matcha',
    shortDescription: 'Vibrant culinary-grade matcha perfect for lattes, baking, and blending.',
    description:
      'A deep, robust everyday matcha with bold colour and earthy depth. Perfect for matcha lattes, smoothies, and baking. Sourced from Kagoshima, Japan.',
    category: 'matcha',
    productType: 'powder',
    images: [
      { src: '/images/products/everyday-matcha-1.svg', alt: 'Everyday matcha powder with a small ceramic scoop' },
    ],
    variants: [
      { id: 'em-50g', name: '50 g', price: 79000, sku: 'YUN-EM-50', available: true, inventory: 80 },
      { id: 'em-100g', name: '100 g', price: 139000, sku: 'YUN-EM-100', available: true, inventory: 60 },
      { id: 'em-200g', name: '200 g', price: 249000, sku: 'YUN-EM-200', available: true, inventory: 40 },
    ],
    tags: ['matcha', 'culinary', 'latte', 'baking', 'everyday'],
    bestseller: true,
    flavourNotes: ['Earthy', 'Bold green', 'Slight bitter finish'],
    ingredients: 'Tencha (Camellia sinensis), Kagoshima, Japan.',
    preparationInstructions:
      'For a latte, whisk 2 g (1 tsp) in 30 ml warm water at 80 °C until smooth. Top with steamed milk to taste.',
    storageGuidance: 'Seal and store in a cool, dark place. Use within 6 months.',
    relatedProductSlugs: ['ceremonial-matcha', 'strawberry-matcha-blend', 'matcha-latte-blend'],
    origin: 'Kagoshima, Japan',
    weight: '50 g / 100 g / 200 g',
  },

  // ── HOJICHA ─────────────────────────────────────────────────────────────────
  {
    id: 'hojicha-powder',
    slug: 'hojicha-powder',
    name: 'Hojicha Powder',
    shortDescription: 'Roasted Japanese green tea, stone-ground. Warm, earthy, and naturally low in caffeine.',
    description:
      'Made from stems and leaves roasted over high heat, Hojicha has a warm toasty character with notes of caramel, wood, and light nuttiness. Stone-ground to a fine powder. Naturally low in caffeine — ideal for evenings or those sensitive to caffeine.',
    category: 'hojicha',
    productType: 'powder',
    images: [
      { src: '/images/products/hojicha-powder-1.svg', alt: 'Hojicha powder in a warm brown ceramic bowl' },
      { src: '/images/products/hojicha-powder-2.svg', alt: 'Hojicha tin with warm tones' },
    ],
    variants: [
      { id: 'hp-30g', name: '30 g', price: 109000, sku: 'YUN-HP-30', available: true, inventory: 45 },
      { id: 'hp-60g', name: '60 g', price: 189000, sku: 'YUN-HP-60', available: true, inventory: 25 },
      { id: 'hp-100g', name: '100 g', price: 299000, sku: 'YUN-HP-100', available: true, inventory: 15 },
    ],
    tags: ['hojicha', 'roasted', 'low-caffeine', 'evening'],
    featured: true,
    bestseller: true,
    flavourNotes: ['Roasted', 'Caramel', 'Warm wood', 'Smooth finish'],
    ingredients: 'Roasted tencha stems and leaves (Camellia sinensis), Kyoto, Japan.',
    preparationInstructions:
      'Sift 1.5 g into a warmed bowl or cup. Add 80 ml water at 85–90 °C. Whisk until smooth. Or blend with warm milk for a comforting latte.',
    storageGuidance: 'Store sealed in a cool, dark place. Use within 4 months.',
    relatedProductSlugs: ['bamboo-chasen', 'matcha-bowl', 'hojicha-latte-blend'],
    origin: 'Kyoto, Japan',
    weight: '30 g / 60 g / 100 g',
  },

  // ── BLENDS ──────────────────────────────────────────────────────────────────
  {
    id: 'strawberry-matcha',
    slug: 'strawberry-matcha-blend',
    name: 'Strawberry Matcha',
    shortDescription: 'Ceremonial matcha with freeze-dried strawberry. Sweet, floral, and beautifully pink.',
    description:
      'Our most-loved blend. Bright ceremonial matcha meets the natural sweetness of freeze-dried strawberry for a cup that is as pretty as it tastes. Serve over ice with oat milk for the perfect summer ritual.',
    category: 'blends',
    productType: 'blend',
    images: [
      { src: '/images/products/strawberry-matcha-1.svg', alt: 'Pink strawberry matcha served over ice in a glass' },
      { src: '/images/products/strawberry-matcha-2.svg', alt: 'Strawberry matcha blend tin' },
    ],
    variants: [
      { id: 'sm-50g', name: '50 g', price: 149000, sku: 'YUN-SM-50', available: true, inventory: 60 },
      { id: 'sm-100g', name: '100 g', price: 269000, sku: 'YUN-SM-100', available: true, inventory: 35 },
    ],
    tags: ['blend', 'strawberry', 'matcha', 'iced', 'popular', 'pink'],
    featured: true,
    bestseller: true,
    newArrival: false,
    flavourNotes: ['Strawberry', 'Floral', 'Light sweetness', 'Bright matcha'],
    ingredients: 'Ceremonial matcha (Camellia sinensis), freeze-dried strawberry powder. No added sugar.',
    preparationInstructions:
      'Whisk 2 g in 40 ml water at 80 °C. Pour over ice. Top with cold milk or oat milk.',
    storageGuidance: 'Seal tightly. Keep away from sunlight and moisture. Use within 4 months.',
    relatedProductSlugs: ['ceremonial-matcha', 'matcha-latte-blend'],
    weight: '50 g / 100 g',
  },
  {
    id: 'matcha-latte-blend',
    slug: 'matcha-latte-blend',
    name: 'Matcha Latte Blend',
    shortDescription: 'Ready-to-whisk matcha latte blend. Just add milk.',
    description:
      'A balanced blend of ceremonial matcha and organic coconut sugar, calibrated for a smooth, frothy latte without any extra sweetening. Works beautifully with dairy and plant-based milks.',
    category: 'blends',
    productType: 'blend',
    images: [
      { src: '/images/products/matcha-latte-blend-1.svg', alt: 'Matcha latte in a ceramic cup' },
    ],
    variants: [
      { id: 'mlb-150g', name: '150 g', price: 169000, sku: 'YUN-MLB-150', available: true, inventory: 40 },
      { id: 'mlb-300g', name: '300 g', price: 299000, sku: 'YUN-MLB-300', available: true, inventory: 20 },
    ],
    tags: ['blend', 'latte', 'matcha', 'sweetened'],
    bestseller: false,
    flavourNotes: ['Smooth matcha', 'Light coconut sweetness', 'Creamy'],
    ingredients: 'Ceremonial matcha (Camellia sinensis), organic coconut sugar.',
    preparationInstructions:
      'Add 1.5–2 tsp to a cup. Pour 50 ml warm water at 80 °C and whisk. Add 150 ml steamed or cold milk.',
    storageGuidance: 'Store sealed in a cool, dark place. Use within 5 months.',
    relatedProductSlugs: ['ceremonial-matcha', 'strawberry-matcha-blend'],
    weight: '150 g / 300 g',
  },
  {
    id: 'hojicha-latte-blend',
    slug: 'hojicha-latte-blend',
    name: 'Hojicha Latte Blend',
    shortDescription: 'Ready-to-whisk roasted hojicha latte blend. Warm and comforting.',
    description:
      'Roasted hojicha powder blended with a touch of organic coconut sugar for a naturally warming, low-caffeine latte. Perfect as an evening wind-down ritual.',
    category: 'blends',
    productType: 'blend',
    images: [
      { src: '/images/products/hojicha-latte-blend-1.svg', alt: 'Hojicha latte in a warm ceramic mug' },
    ],
    variants: [
      { id: 'hlb-150g', name: '150 g', price: 159000, sku: 'YUN-HLB-150', available: true, inventory: 35 },
    ],
    tags: ['blend', 'latte', 'hojicha', 'low-caffeine', 'evening'],
    bestseller: false,
    flavourNotes: ['Roasted', 'Caramel', 'Warm', 'Lightly sweet'],
    ingredients: 'Hojicha powder (Camellia sinensis), organic coconut sugar.',
    preparationInstructions:
      'Add 1.5–2 tsp to a cup. Pour 50 ml warm water at 85 °C and whisk. Add 150 ml steamed or cold milk.',
    storageGuidance: 'Store sealed in a cool, dark place. Use within 5 months.',
    relatedProductSlugs: ['hojicha-powder', 'matcha-latte-blend'],
    weight: '150 g',
  },

  // ── ACCESSORIES ─────────────────────────────────────────────────────────────
  {
    id: 'bamboo-chasen',
    slug: 'bamboo-chasen',
    name: 'Bamboo Chasen',
    shortDescription: 'Traditional 80-prong bamboo matcha whisk. Handcrafted in Nara, Japan.',
    description:
      'A beautifully crafted 80-prong (honmon) bamboo chasen from Takayama, Nara — the birthplace of chasen-making in Japan. Essential for whisking a smooth, frothy bowl of matcha. Durable and precise.',
    category: 'accessories',
    productType: 'accessory',
    images: [
      { src: '/images/products/bamboo-chasen-1.svg', alt: 'Bamboo matcha whisk on natural wood surface' },
    ],
    variants: [
      { id: 'bc-1', name: 'Natural Bamboo', price: 159000, sku: 'YUN-BC-1', available: true, inventory: 70 },
    ],
    tags: ['accessory', 'whisk', 'chasen', 'bamboo', 'nara'],
    bestseller: true,
    preparationInstructions:
      'Soak the whisk tips in warm water for 30 seconds before use. Rinse with warm water after each use. Air-dry on a whisk holder.',
    relatedProductSlugs: ['ceremonial-matcha', 'matcha-bowl', 'matcha-starter-kit'],
    origin: 'Takayama, Nara, Japan',
  },
  {
    id: 'matcha-bowl',
    slug: 'matcha-bowl',
    name: 'Matcha Bowl',
    shortDescription: 'Wide, hand-thrown ceramic chawan for whisking and drinking matcha.',
    description:
      'Thrown on the wheel from stoneware clay, each bowl carries subtle variations in glaze that make it entirely its own. The wide form allows easy whisking while the weight makes it satisfying to hold.',
    category: 'accessories',
    productType: 'glassware',
    images: [
      { src: '/images/products/matcha-bowl-1.svg', alt: 'Pale green ceramic matcha bowl' },
    ],
    variants: [
      { id: 'mb-ivory', name: 'Warm Ivory', price: 189000, sku: 'YUN-MB-IVR', available: true, inventory: 25 },
      { id: 'mb-sage', name: 'Sage Green', price: 189000, sku: 'YUN-MB-SGE', available: true, inventory: 20 },
      { id: 'mb-charcoal', name: 'Charcoal', price: 189000, sku: 'YUN-MB-CHA', available: true, inventory: 15 },
    ],
    tags: ['accessory', 'bowl', 'chawan', 'ceramic', 'handmade'],
    featured: true,
    relatedProductSlugs: ['bamboo-chasen', 'ceremonial-matcha', 'matcha-starter-kit'],
  },
  {
    id: 'glass-latte-cup',
    slug: 'glass-latte-cup',
    name: 'Glass Latte Cup',
    shortDescription: 'Double-walled borosilicate glass for hot and cold matcha lattes.',
    description:
      'A 350 ml double-walled glass that keeps hot drinks warm and cold drinks cool. Its clear form showcases the layered beauty of a matcha latte. Microwave and dishwasher safe.',
    category: 'accessories',
    productType: 'glassware',
    images: [
      { src: '/images/products/glass-latte-cup-1.svg', alt: 'Clear glass latte cup with layered matcha latte' },
    ],
    variants: [
      { id: 'glc-350', name: '350 ml', price: 149000, sku: 'YUN-GLC-350', available: true, inventory: 40 },
    ],
    tags: ['accessory', 'glass', 'latte', 'double-wall', 'borosilicate'],
    bestseller: true,
    relatedProductSlugs: ['matcha-latte-blend', 'strawberry-matcha-blend', 'bamboo-chasen'],
  },

  // ── GIFT SETS ────────────────────────────────────────────────────────────────
  {
    id: 'matcha-starter-kit',
    slug: 'matcha-starter-kit',
    name: 'Matcha Starter Kit',
    shortDescription: 'Everything needed to begin a daily matcha ritual. A thoughtful first gift.',
    description:
      'The perfect beginning. Includes one tin of ceremonial matcha (30 g), a handcrafted bamboo chasen, a ceramic matcha bowl, and a small bamboo scoop, presented in a gift-ready kraft box with a preparation card.',
    category: 'gifts',
    productType: 'kit',
    images: [
      { src: '/images/products/matcha-starter-kit-1.svg', alt: 'Matcha starter kit laid flat — bowl, whisk, matcha tin' },
    ],
    variants: [
      {
        id: 'msk-1',
        name: 'Starter Kit',
        price: 399000,
        compareAtPrice: 477000,
        sku: 'YUN-MSK-1',
        available: true,
        inventory: 20,
      },
    ],
    tags: ['gift', 'starter', 'kit', 'matcha', 'ceremony', 'beginner'],
    featured: true,
    bestseller: true,
    bundleComponents: ['ceremonial-matcha', 'bamboo-chasen', 'matcha-bowl'],
    relatedProductSlugs: ['ceremonial-matcha', 'bamboo-chasen', 'hojicha-discovery-set'],
  },
  {
    id: 'hojicha-gift-set',
    slug: 'hojicha-gift-set',
    name: 'Hojicha Ritual Set',
    shortDescription: 'Hojicha powder and glass latte cup, thoughtfully packaged for gifting.',
    description:
      'A complete evening ritual in one gift. Includes one tin of hojicha powder (30 g) and a 350 ml double-walled glass latte cup, presented in a YUNA gift box with a preparation card.',
    category: 'gifts',
    productType: 'gift-set',
    images: [
      { src: '/images/products/hojicha-gift-set-1.svg', alt: 'Hojicha gift set with tin and glass cup' },
    ],
    variants: [
      {
        id: 'hgs-1',
        name: 'Ritual Set',
        price: 299000,
        compareAtPrice: 348000,
        sku: 'YUN-HGS-1',
        available: true,
        inventory: 15,
      },
    ],
    tags: ['gift', 'hojicha', 'set', 'low-caffeine'],
    featured: true,
    bundleComponents: ['hojicha-powder', 'glass-latte-cup'],
    relatedProductSlugs: ['hojicha-powder', 'glass-latte-cup', 'matcha-starter-kit'],
  },
  {
    id: 'discovery-set',
    slug: 'tea-discovery-set',
    name: 'Matcha & Hojicha Discovery Set',
    shortDescription: 'Try both. Ceremonial matcha and hojicha powder in one beautifully wrapped gift.',
    description:
      'Can\'t decide? This set brings together YUNA\'s two foundational teas — ceremonial matcha (30 g) and hojicha powder (30 g) — in a gift box with tasting notes and preparation guidance.',
    category: 'gifts',
    productType: 'gift-set',
    images: [
      { src: '/images/products/discovery-set-1.svg', alt: 'Two tea tins side by side in a gift box' },
    ],
    variants: [
      {
        id: 'ds-1',
        name: 'Discovery Set',
        price: 219000,
        compareAtPrice: 238000,
        sku: 'YUN-DS-1',
        available: true,
        inventory: 25,
      },
    ],
    tags: ['gift', 'discovery', 'matcha', 'hojicha', 'duo'],
    featured: true,
    bundleComponents: ['ceremonial-matcha', 'hojicha-powder'],
    relatedProductSlugs: ['ceremonial-matcha', 'hojicha-powder', 'matcha-starter-kit'],
  },
];

export const categories: Category[] = [
  {
    id: 'matcha',
    name: 'Matcha',
    description: 'Ceremonial and everyday matcha from Uji and Kagoshima.',
    href: '/matcha',
    image: '/images/categories/matcha.svg',
    accent: '#626A43',
  },
  {
    id: 'hojicha',
    name: 'Hojicha',
    description: 'Roasted Japanese green tea, warm and low in caffeine.',
    href: '/hojicha',
    image: '/images/categories/hojicha.svg',
    accent: '#76563E',
  },
  {
    id: 'blends',
    name: 'Blends',
    description: 'Creative matcha and hojicha blends for every occasion.',
    href: '/blends',
    image: '/images/categories/blends.svg',
    accent: '#D98C98',
  },
  {
    id: 'accessories',
    name: 'Tools & Glassware',
    description: 'Bamboo whisks, ceramic bowls, and glass cups.',
    href: '/accessories',
    image: '/images/categories/accessories.svg',
    accent: '#AA9068',
  },
  {
    id: 'gifts',
    name: 'Gift Sets',
    description: 'Beautifully packaged sets for every occasion.',
    href: '/gifts',
    image: '/images/categories/gifts.svg',
    accent: '#292925',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug));
}
