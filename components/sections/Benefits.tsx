import { Container } from "@/components/layout/Container";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <section className="bg-white py-16" aria-labelledby="benefits-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="benefits-heading" className="section-heading">
            Gentle support with measurable impact
          </h2>
          <p className="section-subheading">
            We obsess over sourcing clean, clinically studied ingredients so you can feel confident in every scoop and capsule.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit} className="rounded-3xl border border-sand/70 bg-cream/60 p-6 text-center">
              <p className="text-base font-semibold text-teal">{benefit}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
