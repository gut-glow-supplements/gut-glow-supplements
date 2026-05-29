import Link from "next/link";
import { FEATURED_POSTS } from "@/data/blog-posts";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";

export function RecentBlogPosts() {
  return (
    <section className="bg-white py-16" aria-labelledby="recent-posts-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 id="recent-posts-heading" className="section-heading">
              Fresh reads for your gut health journey
            </h2>
            <p className="section-subheading max-w-2xl">
              Dive deeper into the science, recipes, and rituals that keep your digestion balanced.
            </p>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-teal">
            View all articles →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURED_POSTS.map((post) => (
            <Card key={post.slug} className="flex h-full flex-col justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-peach">{post.readTime}</p>
                <h3 className="mt-3 text-lg font-heading font-semibold text-teal">{post.title}</h3>
                <p className="mt-3 text-sm text-charcoal/70">{post.description}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-teal">
                <span>{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="font-semibold">
                  Read more
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
