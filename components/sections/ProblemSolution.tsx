import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { PROBLEMS } from "@/lib/constants";

export function ProblemSolution() {
  return (
    <section className="bg-white py-16" aria-labelledby="problem-solution-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="problem-solution-heading" className="section-heading">
            We tackle the gut issues holding you back
          </h2>
          <p className="section-subheading">
            Each plan blends practitioner-formulated supplements with daily rituals to address the root causes of digestive discomfort.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <Card key={problem.title} className="h-full space-y-3">
              <h3 className="text-lg font-heading font-semibold text-teal">{problem.title}</h3>
              <p className="text-sm text-charcoal/70">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
