import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FEATURED_PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Quiz Results",
  description:
    "Review your Gut Glow quiz results and explore evidence-based steps to support your digestion."
};

export default function QuizResultsPage() {
  const recommended = FEATURED_PRODUCTS.slice(0, 2);

  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6 rounded-3xl bg-white p-8 shadow-soft">
          <p className="text-sm uppercase tracking-wide text-peach">Your gut type</p>
          <h1 className="text-4xl font-heading font-semibold text-teal">The Resilient Rebuilder</h1>
          <p className="text-base text-charcoal/70">
            Your responses suggest your gut lining could use extra nourishment while your microbiome benefits from targeted synbiotics.
          </p>
          <ul className="space-y-3 text-sm text-charcoal/70">
            <li>• Focus on balancing meals with protein, fiber, and healthy fats.</li>
            <li>• Layer in stress-reducing rituals to calm the gut-brain axis.</li>
            <li>• Track symptoms weekly to notice improvements and patterns.</li>
          </ul>
          <Button asChild className="mt-6">
            <Link href="/#newsletter">Email me my personalized plan</Link>
          </Button>
        </div>
        <aside className="space-y-6 rounded-3xl bg-cream/70 p-8 shadow-soft">
          <h2 className="text-lg font-heading font-semibold text-teal">Recommended protocol</h2>
          <ul className="space-y-4 text-sm text-charcoal/80">
            {recommended.map((product) => (
              <li key={product.id}>
                <p className="font-semibold text-teal">{product.name}</p>
                <p>{product.description}</p>
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href="/products">Shop the collection</Link>
          </Button>
        </aside>
      </div>
    </Container>
  );
}
