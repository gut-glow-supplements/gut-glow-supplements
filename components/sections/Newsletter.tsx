import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Newsletter() {
  return (
    <section id="newsletter" className="bg-white py-16" aria-labelledby="newsletter-heading">
      <Container>
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-cream via-white to-cream p-10 shadow-soft md:grid-cols-2">
          <div>
            <h2 id="newsletter-heading" className="text-3xl font-heading font-semibold text-teal">
              Get the 7-Day Gut Reset Guide
            </h2>
            <p className="mt-4 text-base text-charcoal/70">
              Receive recipes, symptom tracking worksheets, and practitioner tips in your inbox. You’ll also get exclusive invites to community events.
            </p>
          </div>
          <form className="flex flex-col gap-4" aria-label="Newsletter signup form">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-sand/80 bg-white px-5 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-peach/60"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Email me the guide
            </Button>
            <p className="text-xs text-charcoal/60">
              By subscribing, you agree to our
              <a className="ml-1 text-teal underline" href="/legal/privacy">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
