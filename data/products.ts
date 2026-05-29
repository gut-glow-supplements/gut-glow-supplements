export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  benefits: string[];
  slug: string;
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "balance",
    name: "Gut Glow Balance",
    description: "Daily synbiotic with clinically studied strains to support digestion and immunity.",
    price: "$54",
    benefits: ["11 probiotic strains", "Prebiotic fiber", "Bloating support"],
    slug: "gut-glow-balance"
  },
  {
    id: "repair",
    name: "Gut Glow Repair",
    description: "L-glutamine and zinc carnosine formula to nourish the gut lining and calm inflammation.",
    price: "$62",
    benefits: ["Supports gut barrier", "Clinically dosed", "Vegan capsules"],
    slug: "gut-glow-repair"
  },
  {
    id: "calm",
    name: "Gut Glow Calm",
    description: "Herbal adaptogen blend to ease stress-related digestive discomfort and promote resilience.",
    price: "$48",
    benefits: ["Ashwagandha", "Soothes digestion", "Daily stress support"],
    slug: "gut-glow-calm"
  }
];
