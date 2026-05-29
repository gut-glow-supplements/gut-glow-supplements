import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Gut Health Quiz",
  description:
    "Take the Gut Glow quiz to uncover your gut type, symptom triggers, and personalized supplement plan."
};

export default function QuizLandingPage() {
  return (
    <Container className="grid gap-10 py-12 lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-6">
        <h1 className="text-4xl font-heading font-semibold text-teal">Discover your gut type in 3 minutes</h1>
        <p className="text-base text-charcoal/70">
          Answer research-informed questions to receive a personalized profile outlining your likely gut imbalances, recommended Gut Glow ritual, and evidence-based next steps.
        </p>
        <ul className="space-y-3 text-sm text-charcoal/70">
          <li>• Understand the root causes of your symptoms</li>
          <li>• Get supplement, nutrition, and lifestyle recommendations</li>
          <li>• Access free tools, trackers, and community resources</li>
        </ul>
        <Button asChild>
          <Link href="/quiz/questions">Start the quiz</Link>
        </Button>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <h2 className="text-lg font-heading font-semibold text-teal">What you’ll receive</h2>
        <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
          <li>• Personalized gut type summary</li>
          <li>• Ingredient and lifestyle suggestions</li>
          <li>• Exclusive discounts on your recommended protocol</li>
        </ul>
      </div>
    </Container>
  );
}
