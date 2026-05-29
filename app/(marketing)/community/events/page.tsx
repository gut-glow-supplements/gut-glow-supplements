import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const EVENTS = [
  {
    title: "Gut Reset Kickoff",
    date: "May 5, 2024",
    format: "Virtual workshop",
    description: "Learn how to structure your meals, supplements, and stress rituals for the first 30 days."
  },
  {
    title: "Live Q&A with our RD team",
    date: "May 22, 2024",
    format: "Zoom session",
    description: "Bring your questions about ingredients, protocols, and troubleshooting plateaus."
  }
];

export default function EventsPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Upcoming events</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {EVENTS.map((event) => (
          <Card key={event.title} className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-teal">{event.title}</h2>
            <p className="text-sm text-peach">{event.date} • {event.format}</p>
            <p className="text-sm text-charcoal/70">{event.description}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
