import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FEATURED_PRODUCTS } from "@/data/products";

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return FEATURED_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = FEATURED_PRODUCTS.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <h1 className="text-4xl font-heading font-semibold text-teal">{product.name}</h1>
          <p className="text-base text-charcoal/70">{product.description}</p>
          <div>
            <h2 className="text-lg font-heading font-semibold text-teal">Benefits</h2>
            <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
              {product.benefits.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-cream/70 p-6 shadow-soft">
            <h2 className="text-lg font-heading font-semibold text-teal">How to use</h2>
            <p className="mt-3 text-sm text-charcoal/70">
              Take 2 capsules daily with food. Pair with Gut Glow Balance for comprehensive microbiome support.
            </p>
          </div>
        </div>
        <aside className="space-y-6 rounded-3xl bg-white p-6 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-wide text-charcoal/60">Investment</p>
            <p className="text-3xl font-heading font-semibold text-teal">{product.price}</p>
          </div>
          <Button className="w-full">Add to cart</Button>
          <p className="text-xs text-charcoal/60">
            This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before use, especially if pregnant, nursing, or taking medication.
          </p>
        </aside>
      </div>
    </Container>
  );
}
