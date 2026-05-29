import { Container } from "@/components/layout/Container";

interface CategoryPageProps {
  params: { category: string };
}

export default function BlogCategoryPage({ params }: CategoryPageProps) {
  const title = params.category.replace(/-/g, " ");

  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Category: {title}</h1>
      <p className="mt-4 max-w-2xl text-base text-charcoal/70">
        Curated resources for {title}. Publish tailored posts that address the needs of this audience segment and link to related Gut Glow offerings.
      </p>
    </Container>
  );
}
