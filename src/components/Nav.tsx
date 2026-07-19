"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoMark } from "./Logo";

const LINKS = [
  { href: "#collections", label: "Collections" },
  { href: "#craftsmanship", label: "Craftsmanship" },
  { href: "#consultation", label: "Book Consultation" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const inverted = scrolled || menuOpen;

  return (
    <header
      className="fixed inset-x-0 top-0 z-(--z-nav) transition-colors duration-700 ease-out"
      style={{
        backgroundColor: inverted ? "var(--linen)" : "transparent",
        borderBottom: inverted ? "1px solid var(--stone-deep)" : "1px solid transparent",
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-(--content-gutter) py-6 transition-colors duration-700 ease-out"
        style={{ color: inverted ? "var(--ink)" : "var(--linen)" }}
      >
        <Link href="/" className="flex items-center gap-3">
          <LogoMark className="h-8 w-auto" inkColor="currentColor" />
          <span className="font-body text-sm font-medium uppercase tracking-[0.2em]">
            Not Just Tiles
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline font-body text-xs uppercase tracking-[0.15em]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className="h-px w-5 transition-transform duration-300 ease-out"
            style={{
              backgroundColor: "currentColor",
              transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="h-px w-5 transition-transform duration-300 ease-out"
            style={{
              backgroundColor: "currentColor",
              transform: menuOpen ? "translateY(-3px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="flex flex-col gap-8 px-(--content-gutter) pb-12 pt-4 md:hidden"
          style={{ backgroundColor: "var(--linen)", color: "var(--ink)" }}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
