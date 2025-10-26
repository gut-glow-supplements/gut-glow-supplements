import { Container } from "@/components/layout/Container";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="bg-cream py-16" aria-labelledby="how-it-works-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="how-it-works-heading" className="section-heading">
            Personalized steps to glowing digestion
          </h2>
          <p className="section-subheading">
            Every Gut Glow journey begins with understanding your gut type, then layering in intentional nutrition, supplements, and community.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="rounded-3xl bg-white/80 p-6 shadow-soft">
              <span className="text-sm font-semibold text-peach">Step {item.step}</span>
              <h3 className="mt-3 text-xl font-heading font-semibold text-teal">{item.title}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
