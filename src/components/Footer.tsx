"use client";

import { useState } from "react";
import Link from "next/link";
import { Wordmark } from "./Logo";

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
      { label: "Our Story", href: "/#collections" },
      { label: "Craftsmanship", href: "/#craftsmanship" },
      { label: "Book Consultation", href: "/#consultation" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer
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
        <div className="flex gap-6">
          <a href="#" className="link-underline font-body text-xs uppercase tracking-[0.1em] opacity-80">
            Instagram
          </a>
          <a href="#" className="link-underline font-body text-xs uppercase tracking-[0.1em] opacity-80">
            Pinterest
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden px-(--content-gutter) pb-6">
        <Wordmark
          color="var(--linen)"
          className="text-[clamp(3.5rem,14vw,11rem)]"
        />
      </div>
    </footer>
  );
}
