import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact Gut Glow",
  description:
    "Reach the Gut Glow support team for product questions, partnerships, or community inquiries."
};

export default function ContactPage() {
  return (
    <Container className="grid gap-10 py-12 lg:grid-cols-2">
      <div className="space-y-6">
        <h1 className="text-4xl font-heading font-semibold text-teal">We’re here to help</h1>
        <p className="text-base text-charcoal/70">
          Email us anytime at <a href="mailto:hello@gutglow.com" className="text-teal underline">hello@gutglow.com</a> or complete the form and our team will respond within 1 business day.
        </p>
        <div className="rounded-3xl bg-cream/70 p-6 shadow-soft">
          <h2 className="text-lg font-heading font-semibold text-teal">Common questions</h2>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
            <li>• Shipping timelines and tracking updates</li>
            <li>• Ingredient sourcing and certifications</li>
            <li>• Wholesale and practitioner partnerships</li>
          </ul>
        </div>
      </div>
      <form className="space-y-4 rounded-3xl bg-white p-6 shadow-soft" aria-label="Contact form">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-charcoal/70">
            Name
            <input required type="text" className="w-full rounded-full border border-sand/80 px-4 py-3" />
          </label>
          <label className="space-y-2 text-sm font-semibold text-charcoal/70">
            Email
            <input required type="email" className="w-full rounded-full border border-sand/80 px-4 py-3" />
          </label>
        </div>
        <label className="space-y-2 text-sm font-semibold text-charcoal/70">
          Subject
          <input required type="text" className="w-full rounded-full border border-sand/80 px-4 py-3" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-charcoal/70">
          Message
          <textarea required rows={4} className="w-full rounded-3xl border border-sand/80 px-4 py-3" />
        </label>
        <Button type="submit">Send message</Button>
        <p className="text-xs text-charcoal/60">
          Gut Glow respects your privacy. Read our <a href="/legal/privacy" className="text-teal underline">privacy policy</a> to understand how we handle your data.
        </p>
      </form>
    </Container>
  );
}
