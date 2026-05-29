import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Terms of Service",
  description: "Review the Gut Glow terms of use, purchase policies, and community guidelines."
};

export default function TermsPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Terms of service</h1>
      <p className="mt-4 text-sm text-charcoal/70">
        Replace this placeholder with legally reviewed terms covering site usage, purchases, refunds, and user responsibilities. Ensure it includes clear medical disclaimers and dispute resolution language.
      </p>
    </Container>
  );
}
