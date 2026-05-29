import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { FEATURED_POSTS } from "@/data/blog-posts";

export const metadata = {
  title: "Gut Glow Blog",
  description:
    "Read science-backed insights, recipes, and rituals to support everyday digestive wellness."
};

export default function BlogPage() {
  return (
    <Container className="py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-heading font-semibold text-teal">Digestive wellness insights</h1>
        <p className="max-w-2xl text-base text-charcoal/70">
          Browse articles curated by our practitioners to help you understand your gut, support your microbiome, and feel grounded.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {FEATURED_POSTS.map((post) => (
          <Card key={post.slug} className="flex h-full flex-col justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-peach">{post.readTime}</p>
              <h2 className="mt-3 text-2xl font-heading font-semibold text-teal">{post.title}</h2>
              <p className="mt-4 text-sm text-charcoal/70">{post.description}</p>
            </div>
            <div className="flex items-center justify-between text-sm text-teal">
              <span>{post.date}</span>
              <Link href={`/blog/${post.slug}`} className="font-semibold">
                Read article
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
