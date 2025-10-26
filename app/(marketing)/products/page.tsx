import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FEATURED_PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Gut Glow Supplements",
  description:
    "Explore Gut Glow’s clinically formulated supplements that support digestion, microbiome balance, and stress resilience."
};

export default function ProductsPage() {
  return (
    <Container className="py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-heading font-semibold text-teal">Supplements crafted for synergy</h1>
        <p className="max-w-2xl text-base text-charcoal/70">
          Each formula is designed to address a specific gut need while pairing seamlessly with the rest of the Gut Glow system.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {FEATURED_PRODUCTS.map((product) => (
          <Card key={product.id} className="flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-teal">{product.name}</h2>
              <p className="mt-3 text-sm text-charcoal/70">{product.description}</p>
            </div>
            <ul className="space-y-2 text-sm text-charcoal/70">
              {product.benefits.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-teal">{product.price}</span>
              <Button asChild className="px-4 py-2 text-xs">
                <Link href={`/products/${product.slug}`}>View product</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
