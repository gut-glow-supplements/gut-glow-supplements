import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-sand/60 border-t-teal" aria-label="Loading" />
    </Container>
  );
}
