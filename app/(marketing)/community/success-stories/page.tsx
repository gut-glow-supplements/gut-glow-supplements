import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const STORIES = [
  {
    name: "Monica • Seattle, WA",
    result: "Reduced IBS flares from weekly to monthly",
    highlight:
      "By pairing Gut Glow Balance with mindful meal planning, Monica noticed more regular digestion and steadier energy."
  },
  {
    name: "Daniel • Brooklyn, NY",
    result: "Less post-meal bloating in 30 days",
    highlight:
      "Daniel followed the stress resilience module and now keeps up with his workouts without discomfort."
  }
];

export default function SuccessStoriesPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Success stories</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {STORIES.map((story) => (
          <Card key={story.name} className="space-y-3">
            <h2 className="text-xl font-heading font-semibold text-teal">{story.name}</h2>
            <p className="text-sm text-peach">{story.result}</p>
            <p className="text-sm text-charcoal/70">{story.highlight}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
