import { TESTIMONIALS } from "@/data/testimonials";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";

export function Testimonials() {
  return (
    <section className="bg-white py-16" aria-labelledby="testimonials-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="testimonials-heading" className="section-heading">
            Stories from the Gut Glow community
          </h2>
          <p className="section-subheading">
            Real people. Real relief. Explore how members are reducing symptoms, reclaiming energy, and feeling hopeful again.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.name} className="flex h-full flex-col justify-between gap-6">
              <p className="text-sm text-charcoal/80">“{testimonial.quote}”</p>
              <div>
                <p className="text-sm font-semibold text-teal">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wide text-charcoal/60">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
