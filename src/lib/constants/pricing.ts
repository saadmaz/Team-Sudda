export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  unit: string;
  popular: boolean;
  cleaners: number;
  hours: number;
  features: string[];
  cta: string;
}

export const PRICING: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Perfect for apartments & small homes",
    price: "Contact for price",
    unit: "per session",
    popular: false,
    cleaners: 1,
    hours: 8,
    features: [
      "1 professional cleaner",
      "8-hour session",
      "General home cleaning",
      "Kitchen & bathroom clean",
      "Eco-friendly products included",
      "Vacuuming & mopping",
    ],
    cta: "Book Basic",
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "Our most popular choice",
    price: "Contact for price",
    unit: "per session",
    popular: true,
    cleaners: 2,
    hours: 8,
    features: [
      "2 professional cleaners",
      "8-hour session",
      "Everything in Basic",
      "Deep bathroom scrub",
      "Kitchen degreasing",
      "Window & mirror cleaning",
      "Sofa & upholstery wipe-down",
    ],
    cta: "Book Standard",
  },
  {
    id: "business",
    name: "Business",
    tagline: "Ideal for large homes & offices",
    price: "Contact for price",
    unit: "per session",
    popular: false,
    cleaners: 3,
    hours: 8,
    features: [
      "3 professional cleaners",
      "8-hour session",
      "Everything in Standard",
      "Carpet shampooing",
      "Full sanitization treatment",
      "Post-clean quality inspection",
      "Priority scheduling",
    ],
    cta: "Book Business",
  },
];
