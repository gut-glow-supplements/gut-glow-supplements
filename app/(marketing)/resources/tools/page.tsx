import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const TOOLS = [
  {
    title: "Symptom tracker",
    description: "Log meals, moods, and digestion to uncover patterns and progress trends.",
    href: "/resources/tools/symptom-tracker"
  },
  {
    title: "Supplement schedule",
    description: "Map your Gut Glow routine with reminders and dosing guidance.",
    href: "/resources/tools"
  }
];

export default function ToolsPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-heading font-semibold text-teal">Interactive tools</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {TOOLS.map((tool) => (
          <Card key={tool.title} className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-teal">{tool.title}</h2>
            <p className="text-sm text-charcoal/70">{tool.description}</p>
            <Link href={tool.href} className="text-sm font-semibold text-teal">
              Open tool →
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  );
}
