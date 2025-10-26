import Link from "next/link";
import { Container } from "./Container";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/community", label: "Community" },
      { href: "/community/events", label: "Events" }
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/resources", label: "Resource Hub" },
      { href: "/quiz", label: "Gut Health Quiz" }
    ]
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/legal/privacy", label: "Privacy" }
    ]
  }
];

const DISCLAIMER =
  "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician before starting any health program.";

export function Footer() {
  return (
    <footer className="border-t border-sand/80 bg-cream/90">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="text-lg font-heading font-semibold text-teal">
              Gut Glow
            </Link>
            <p className="text-sm text-charcoal/70">
              Trusted gut health guidance grounded in science, compassion, and transparency.
            </p>
          </div>
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal/70">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-teal">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-sand/60 pt-6 text-xs text-charcoal/60">
          <p>{DISCLAIMER}</p>
          <p className="mt-4">© {new Date().getFullYear()} Gut Glow. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
