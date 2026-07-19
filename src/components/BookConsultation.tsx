"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function BookConsultation() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="consultation"
      className="section-glow section-glow--light overflow-hidden px-(--content-gutter) py-(--section-padding)"
      style={{ backgroundColor: "var(--caramel)" }}
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2
            className="font-display text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1]"
            style={{ color: "var(--linen)" }}
          >
            Book a private consultation
          </h2>
          <p
            className="mt-5 max-w-[42ch] font-body text-base leading-relaxed"
            style={{ color: "var(--linen-muted)" }}
          >
            For full-room curation, bespoke sourcing, or trade partnerships, our design
            team responds within one business day.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {submitted ? (
            <p className="font-body text-lg" style={{ color: "var(--linen)" }}>
              Thank you — we&rsquo;ll be in touch shortly.
            </p>
          ) : (
            <form
              className="flex flex-col gap-6"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="flex flex-col gap-2">
                <span className="font-body text-xs uppercase tracking-[0.15em]" style={{ color: "var(--linen-muted)" }}>
                  Name
                </span>
                <input
                  required
                  type="text"
                  className="border-b bg-transparent py-2 font-body text-base focus:outline-none"
                  style={{ borderColor: "var(--caramel-deep)", color: "var(--linen)" }}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-body text-xs uppercase tracking-[0.15em]" style={{ color: "var(--linen-muted)" }}>
                  Email
                </span>
                <input
                  required
                  type="email"
                  className="border-b bg-transparent py-2 font-body text-base focus:outline-none"
                  style={{ borderColor: "var(--caramel-deep)", color: "var(--linen)" }}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-body text-xs uppercase tracking-[0.15em]" style={{ color: "var(--linen-muted)" }}>
                  Tell us about your project
                </span>
                <textarea
                  rows={3}
                  className="resize-none border-b bg-transparent py-2 font-body text-base focus:outline-none"
                  style={{ borderColor: "var(--caramel-deep)", color: "var(--linen)" }}
                />
              </label>

              <button
                type="submit"
                className="btn-outline w-fit px-9 py-3.5 font-body text-xs uppercase tracking-[0.2em]"
              >
                Request Consultation
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
