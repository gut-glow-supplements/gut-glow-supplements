import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { FEATURED_POSTS } from "@/data/blog-posts";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return FEATURED_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = FEATURED_POSTS.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className="py-12">
      <article className="prose prose-slate max-w-3xl prose-headings:font-heading prose-headings:text-teal">
        <p className="text-sm uppercase tracking-wide text-peach">{post.readTime}</p>
        <h1>{post.title}</h1>
        <p className="text-sm text-charcoal/60">{post.date} • Gut Glow Editorial Team</p>
        <p>
          This article is a placeholder for future in-depth gut health education. Share insights from practitioners, cite peer-reviewed studies, and include actionable routines your audience can trust.
        </p>
        <p>
          Remember to incorporate medical disclaimers, encourage readers to consult their physician, and use language that empowers rather than diagnoses.
        </p>
      </article>
    </Container>
  );
}
