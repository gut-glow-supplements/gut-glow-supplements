import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const COMMUNITY_LINKS = [
  {
    title: "Success stories",
    description: "Meet members who transformed their digestion and confidence.",
    href: "/community/success-stories"
  },
  {
    title: "Events",
    description: "Join live workshops, Q&As, and challenges led by Gut Glow practitioners.",
    href: "/community/events"
  }
];

export const metadata = {
  title: "Gut Glow Community",
  description: "Explore stories, events, and connection opportunities inside the Gut Glow community."
};

export default function CommunityPage() {
  return (
    <Container className="py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-heading font-semibold text-teal">Your supportive gut health circle</h1>
        <p className="max-w-2xl text-base text-charcoal/70">
          Collective healing happens faster. Connect with Gut Glow members, attend expert-led events, and celebrate your wins along the journey.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {COMMUNITY_LINKS.map((item) => (
          <Card key={item.title} className="space-y-3">
            <h2 className="text-2xl font-heading font-semibold text-teal">{item.title}</h2>
            <p className="text-sm text-charcoal/70">{item.description}</p>
            <Link href={item.href} className="text-sm font-semibold text-teal">
              Explore {item.title.toLowerCase()} →
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  );
}
