export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
};

export const FEATURED_POSTS: BlogPost[] = [
  {
    slug: "signs-of-an-unhealthy-gut",
    title: "10 Signs Your Gut Needs More Support",
    description: "Learn the subtle (and not-so-subtle) signals your digestion sends when it needs attention.",
    readTime: "6 min read",
    date: "Apr 18, 2024"
  },
  {
    slug: "stress-and-digestion",
    title: "How Stress Impacts Digestion + 5 Tools to Reset",
    description: "Understand the gut-brain axis and discover calming rituals that help soothe your system.",
    readTime: "8 min read",
    date: "Mar 30, 2024"
  },
  {
    slug: "probiotic-vs-prebiotic",
    title: "Probiotics vs. Prebiotics: What’s the Difference?",
    description: "A science-backed guide to pairing probiotics with the right plant fibers for optimal results.",
    readTime: "7 min read",
    date: "Mar 12, 2024"
  }
];
