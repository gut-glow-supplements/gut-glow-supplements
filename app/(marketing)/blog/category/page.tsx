import { Container } from "@/components/layout/Container";

export default function BlogCategoryIndexPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Browse categories</h1>
      <p className="mt-4 max-w-2xl text-base text-charcoal/70">
        Organize future content by category to help visitors quickly access recipes, symptom guides, science explainers, and lifestyle tips.
      </p>
    </Container>
  );
}
