import type { Metadata } from "next";
import { Benefits } from "@/components/sections/Benefits";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Newsletter } from "@/components/sections/Newsletter";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { RecentBlogPosts } from "@/components/sections/RecentBlogPosts";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Gut health supplements, quiz, and education",
  description:
    "Discover Gut Glow’s science-backed digestive health supplements, personalized gut type quiz, and supportive community resources.",
  alternates: {
    canonical: "https://www.gutglow.com/"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Benefits />
      <FeaturedProducts />
      <Testimonials />
      <Stats />
      <Newsletter />
      <RecentBlogPosts />
    </>
  );
}
