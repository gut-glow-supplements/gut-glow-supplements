import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Medical Disclaimer",
  description: "Gut Glow provides educational information only. Review our medical disclaimer."
};

export default function DisclaimerPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Medical disclaimer</h1>
      <p className="mt-4 text-sm text-charcoal/70">
        Gut Glow content and products are not a substitute for individualized medical advice, diagnosis, or treatment. Always consult your physician or qualified healthcare provider with questions about a medical condition or before starting any new supplement routine.
      </p>
    </Container>
  );
}
