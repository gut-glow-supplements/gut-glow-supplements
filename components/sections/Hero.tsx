import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-peach/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-peach">
            Science-backed gut health
          </span>
          <h1 className="text-4xl font-heading font-semibold text-teal sm:text-5xl md:text-6xl">
            Feel light, energized, and at home in your body.
          </h1>
          <p className="text-base text-charcoal/70 sm:text-lg">
            Gut Glow pairs evidence-based supplements with expert guidance so you can understand what your digestion needs and feel confident in your daily rituals.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <Link href="/quiz">
                Discover your gut type
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/products">
                Explore supplements
              </Link>
            </Button>
          </div>
          <ul className="flex flex-wrap gap-4 text-sm text-charcoal/60">
            <li>✔ Evidence-based formulas</li>
            <li>✔ Clinician created</li>
            <li>✔ 30-day satisfaction promise</li>
          </ul>
        </div>
        <div className="relative aspect-square w-full max-w-lg place-self-center">
          <div className="absolute inset-0 rounded-full bg-sage/20 blur-3xl" aria-hidden />
          <Image
            src="/images/hero/gut-glow-hero.svg"
            alt="Gut health supplements and fresh foods"
            fill
            className="rounded-[3rem] object-cover shadow-soft"
            priority
          />
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" aria-hidden />
    </section>
  );
}
