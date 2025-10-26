import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-5xl font-heading font-semibold text-teal">Page not found</h1>
      <p className="max-w-md text-base text-charcoal/70">
        The page you’re looking for doesn’t exist yet. Explore our core resources to continue your gut health journey.
      </p>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </Container>
  );
}
