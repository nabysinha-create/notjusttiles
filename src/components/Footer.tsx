"use client";

import { useState } from "react";
import Link from "next/link";

const COLUMNS = [
  {
    heading: "Collections",
    links: [
      { label: "Bedroom", href: "/#bedroom" },
      { label: "Living", href: "/#living" },
      { label: "Dining", href: "/#dining" },
      { label: "Office", href: "/#office" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "Our Story", href: "/#about" },
      { label: "Craftsmanship", href: "/#craftsmanship" },
      { label: "Book Consultation", href: "/#consultation" },
    ],
  },
];

// Replace "#" with the real profile URLs once the accounts are confirmed.
const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </g>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path
        fill="currentColor"
        d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1z"
      />
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
      />
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer
      id="contact"
      className="section-glow section-glow--dark overflow-hidden"
      style={{ backgroundColor: "var(--charcoal)", color: "var(--linen)" }}
    >
      <div className="relative grid grid-cols-2 gap-x-6 gap-y-12 px-(--content-gutter) py-(--section-padding) md:grid-cols-[1.3fr_1fr_1fr] md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <p className="max-w-[32ch] font-body text-lg leading-relaxed">
            Premium American furniture, curated for homes that value craftsmanship and
            timeless design.
          </p>

          {subscribed ? (
            <p className="mt-6 font-body text-sm" style={{ color: "var(--amber)" }}>
              You&rsquo;re on the list.
            </p>
          ) : (
            <form
              className="mt-6 flex max-w-sm items-end gap-4 border-b"
              style={{ borderColor: "rgba(250,247,242,0.25)" }}
              onSubmit={(event) => {
                event.preventDefault();
                if (email) setSubscribed(true);
              }}
            >
              <label className="flex-1">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  className="w-full bg-transparent py-2 font-body text-sm placeholder:opacity-60 focus:outline-none"
                  style={{ color: "var(--linen)" }}
                />
              </label>
              <button
                type="submit"
                aria-label="Subscribe"
                className="link-underline pb-2 font-body text-xs uppercase tracking-[0.15em]"
              >
                Sign up
              </button>
            </form>
          )}
        </div>

        {COLUMNS.map((column) => (
          <div key={column.heading}>
            <h3 className="font-body text-xs uppercase tracking-[0.15em] opacity-70">
              {column.heading}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="link-underline font-body text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="relative flex flex-col gap-6 border-t px-(--content-gutter) py-8 md:flex-row md:items-center md:justify-between"
        style={{ borderColor: "rgba(250,247,242,0.15)" }}
      >
        <p className="font-body text-xs opacity-60">
          © {new Date().getFullYear()} Not Just Tiles. All rights reserved.
        </p>
        <ul className="flex gap-3">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 hover:bg-(--linen) hover:text-(--charcoal)"
                style={{ borderColor: "rgba(250,247,242,0.3)" }}
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
                  {social.icon}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* One line, sized in cqw (the padded content width) so it spans edge to edge at every breakpoint. */}
      <div className="@container relative overflow-hidden px-(--content-gutter) pb-6">
        <div
          aria-hidden
          className="font-display whitespace-nowrap text-[19cqw] leading-none tracking-[-0.02em]"
          style={{ color: "var(--linen)" }}
        >
          NOT JUST TILES
        </div>
      </div>
    </footer>
  );
}
