"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

const NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/quiz", label: "Quiz" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-cream/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-heading font-semibold text-teal">
          <span className="h-3 w-3 rounded-full bg-peach" aria-hidden />
          Gut Glow
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-charcoal/80 md:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-teal",
                pathname === item.href && "text-teal"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="#newsletter" className="btn">
            Get the Guide
          </Link>
        </nav>
        <button
          type="button"
          className="btn h-10 w-10 rounded-full p-0 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>
      {isOpen ? (
        <div id="mobile-menu" className="border-t border-sand/70 bg-cream md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-charcoal"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="#newsletter" className="btn w-full justify-center" onClick={() => setIsOpen(false)}>
              Get the Guide
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
