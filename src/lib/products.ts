/**
 * Shopify-shaped data layer. `handle` mirrors a Shopify product/collection
 * handle so routes and links need no changes when this swaps to the
 * Storefront API — only this file's source changes.
 */

export type Category = "bedroom" | "living" | "dining" | "office";

export type Collection = {
  handle: Category;
  title: string;
  description: string;
  imageLabel: string;
  image: string;
};

export type Product = {
  handle: string;
  title: string;
  category: Category;
  price: number;
  imageLabel: string;
  /** Omit until photography exists — a labelled placeholder renders instead. */
  image?: string;
  featured?: boolean;
};

export const COLLECTIONS: Collection[] = [
  {
    handle: "bedroom",
    title: "Bedroom",
    description: "Platform beds, nightstands, and upholstery built for stillness.",
    imageLabel: "Bedroom Collection",
    image: "/collection-bedroom.jpg",
  },
  {
    handle: "living",
    title: "Living",
    description: "Seating and casegoods sized for rooms that host slowly.",
    imageLabel: "Living Collection",
    image: "/collection-living.jpg",
  },
  {
    handle: "dining",
    title: "Dining",
    description: "Tables and chairs made to outlast the trends around them.",
    imageLabel: "Dining Collection",
    image: "/collection-dining.jpg",
  },
  {
    handle: "office",
    title: "Office",
    description: "Desks and storage for a study that still feels like home.",
    imageLabel: "Office Collection",
    image: "/collection-office.jpg",
  },
];

export const PRODUCTS: Product[] = [
  {
    handle: "wilshire-platform-bed",
    title: "Wilshire Platform Bed",
    category: "bedroom",
    price: 4200,
    imageLabel: "Wilshire Platform Bed",
    image: "/bedroom-collection.jpg",
    featured: true,
  },
  {
    handle: "harlow-lounge-chair",
    title: "Harlow Lounge Chair",
    category: "living",
    price: 3100,
    imageLabel: "Harlow Lounge Chair",
    image: "/living-collection.jpg",
    featured: true,
  },
  {
    handle: "soleil-velvet-sofa",
    title: "Soleil Velvet Sofa",
    category: "living",
    price: 5900,
    imageLabel: "Soleil Velvet Sofa",
    image: "/soleil-velvet-sofa.jpg",
    featured: true,
  },
  {
    handle: "verdant-open-bookcase",
    title: "Verdant Open Bookcase",
    category: "living",
    price: 3800,
    imageLabel: "Verdant Open Bookcase",
    image: "/verdant-bookcase.jpg",
    featured: true,
  },
  {
    handle: "asher-dining-table",
    title: "Asher Dining Table",
    category: "dining",
    price: 6800,
    imageLabel: "Asher Dining Table",
    image: "/dining-collection.jpeg",
  },
  {
    handle: "linden-writing-desk",
    title: "Linden Writing Desk",
    category: "office",
    price: 2950,
    imageLabel: "Linden Writing Desk",
    image: "/office-collection.jpeg",
  },
];

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((product) => product.featured);
}

export function getProductByHandle(handle: string): Product | undefined {
  return PRODUCTS.find((product) => product.handle === handle);
}
