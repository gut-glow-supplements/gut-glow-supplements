import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "About Gut Glow",
  description:
    "Learn about Gut Glow’s mission to deliver compassionate, science-backed digestive wellness support."
};

export default function AboutPage() {
  return (
    <Container className="space-y-8 py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Our story</h1>
      <p className="text-base text-charcoal/70">
        Gut Glow began as a personal quest to find reliable answers for chronic digestive discomfort. Today, our multidisciplinary team of nutritionists, medical advisors, and community managers is on a mission to make credible gut health guidance easy to understand and act on.
      </p>
      <p className="text-base text-charcoal/70">
        We believe in transparent sourcing, clinical rigor, and empowering education. Everything we create—from supplements to meal plans—is designed to help you build a daily rhythm that nourishes your microbiome and supports your whole-body wellbeing.
      </p>
    </Container>
  );
}
