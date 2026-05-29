import Link from "next/link";
import { FEATURED_PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";

export function FeaturedProducts() {
  return (
    <section className="bg-cream py-16" aria-labelledby="featured-products-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 id="featured-products-heading" className="section-heading">
              Formulas designed to work together
            </h2>
            <p className="section-subheading max-w-2xl">
              Choose a supplement that meets your gut where it’s at—or bundle them for a complete daily ritual.
            </p>
          </div>
          <Button asChild>
            <Link href="/products">Browse all products</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <Card key={product.id} className="flex h-full flex-col">
              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-teal">{product.name}</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{product.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-charcoal/70">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-teal">{product.price}</span>
                <Button asChild variant="secondary" className="px-4 py-2 text-xs">
                  <Link href={`/products/${product.slug}`}>View details</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
