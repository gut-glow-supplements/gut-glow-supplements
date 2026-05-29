import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function SymptomTrackerPage() {
  return (
    <Container className="py-12">
      <div className="rounded-3xl bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-heading font-semibold text-teal">Symptom tracker</h1>
        <p className="mt-4 text-base text-charcoal/70">
          Download the printable PDF or duplicate the digital template to monitor digestion, energy, mood, and lifestyle habits. Use the insights to collaborate with your practitioner or Gut Glow coach.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button>Download PDF</Button>
          <Button variant="ghost">Open Google Sheets template</Button>
        </div>
      </div>
    </Container>
  );
}
