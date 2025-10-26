"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <Container className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-4xl font-heading font-semibold text-teal">Something went wrong</h1>
          <p className="max-w-md text-sm text-charcoal/70">
            We track errors to keep the Gut Glow experience smooth. Please try again or contact us if the problem persists.
          </p>
          <Button type="button" onClick={reset}>
            Try again
          </Button>
        </Container>
      </body>
    </html>
  );
}
