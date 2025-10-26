import { TRUST_METRICS } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

export function Stats() {
  return (
    <section className="bg-cream py-16" aria-labelledby="stats-heading">
      <Container className="text-center">
        <h2 id="stats-heading" className="section-heading">
          Trusted by practitioners and thousands of members
        </h2>
        <p className="section-subheading">
          We partner with registered dietitians and integrative physicians to ensure every protocol is grounded in credible science.
        </p>
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {TRUST_METRICS.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-sand/70 bg-white/90 p-6 shadow-soft">
              <dt className="text-xs font-semibold uppercase tracking-wide text-peach">{metric.label}</dt>
              <dd className="mt-3 text-2xl font-heading font-semibold text-teal">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
