import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "Privacy Policy",
  description: "Understand how Gut Glow collects, uses, and protects your personal information."
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Privacy policy</h1>
      <p className="mt-4 text-sm text-charcoal/70">
        This placeholder policy outlines our commitment to safeguarding your data. Replace with legal-approved content detailing data collection, usage, storage, and user rights in compliance with applicable regulations.
      </p>
    </Container>
  );
}
