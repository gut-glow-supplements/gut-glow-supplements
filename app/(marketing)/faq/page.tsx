import { Container } from "@/components/layout/Container";

const FAQS = [
  {
    question: "Are Gut Glow supplements third-party tested?",
    answer:
      "Yes. Every batch is evaluated for purity, potency, and contaminants through independent labs that follow ISO-certified testing protocols."
  },
  {
    question: "Can I take Gut Glow products alongside medication?",
    answer:
      "We always recommend partnering with your healthcare provider to personalize your protocol. Bring our supplement facts to your next appointment for review."
  },
  {
    question: "Do you ship internationally?",
    answer:
      "We currently ship across the U.S. and Canada with plans to expand globally in 2025. Join the newsletter for launch updates."
  }
];

export const metadata = {
  title: "Gut Glow FAQ",
  description:
    "Find answers to common questions about Gut Glow products, shipping, subscriptions, and community offerings."
};

export default function FaqPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Frequently asked questions</h1>
      <div className="mt-10 space-y-6">
        {FAQS.map((faq) => (
          <details key={faq.question} className="rounded-3xl border border-sand/80 bg-white p-6 shadow-soft">
            <summary className="cursor-pointer text-lg font-semibold text-teal">{faq.question}</summary>
            <p className="mt-4 text-sm text-charcoal/70">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Container>
  );
}
