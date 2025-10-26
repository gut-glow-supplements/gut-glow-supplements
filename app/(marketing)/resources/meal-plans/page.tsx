import { Container } from "@/components/layout/Container";

export default function MealPlansPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Meal plans & recipes</h1>
      <p className="mt-4 max-w-2xl text-base text-charcoal/70">
        Share seasonal meal plans designed by registered dietitians. Focus on anti-inflammatory ingredients, mindful eating practices, and flexible swaps for various dietary needs.
      </p>
    </Container>
  );
}
