import { Container } from "@/components/layout/Container";

export default function GuidesPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Deep-dive guides</h1>
      <p className="mt-4 max-w-2xl text-base text-charcoal/70">
        Publish actionable, research-backed guides that cover topics like gut-brain health, SIBO recovery, and hormone balance. Link to relevant Gut Glow offerings and include citations for every scientific reference.
      </p>
    </Container>
  );
}
