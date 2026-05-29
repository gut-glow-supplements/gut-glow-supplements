import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const RESOURCES = [
  {
    title: "Guides",
    description: "In-depth education on microbiome balance, inflammation, and hormone-gut connections.",
    href: "/resources/guides"
  },
  {
    title: "Meal plans",
    description: "Dietitian-approved recipes and shopping lists tailored to gut-soothing ingredients.",
    href: "/resources/meal-plans"
  },
  {
    title: "Tools",
    description: "Track symptoms, supplements, and routines with printable and interactive tools.",
    href: "/resources/tools"
  }
];

export const metadata = {
  title: "Gut Glow Resources",
  description: "Download free gut health resources, guides, and tools curated by the Gut Glow team."
};

export default function ResourcesPage() {
  return (
    <Container className="py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-heading font-semibold text-teal">Resource library</h1>
        <p className="max-w-2xl text-base text-charcoal/70">
          From meal plans to symptom trackers, explore curated tools designed to help you implement your Gut Glow plan with ease.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {RESOURCES.map((resource) => (
          <Card key={resource.title} className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-teal">{resource.title}</h2>
            <p className="text-sm text-charcoal/70">{resource.description}</p>
            <Link href={resource.href} className="text-sm font-semibold text-teal">
              Explore {resource.title.toLowerCase()} →
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  );
}
