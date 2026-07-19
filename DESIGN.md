---
name: NOTJUSTTILES
description: Quiet-luxury American furniture, curated not collected
---

# Design System: NOTJUSTTILES

## 1. Overview

**Creative North Star: "The Private Gallery"**

NOTJUSTTILES reads like a private gallery that happens to sell furniture: one held shot, one line of copy, one object, generous silence around each. The system is restrained rather than expressive — it borrows Apple's confidence in whitespace and slow reveal, RH's editorial scale in American luxury retail, and Minotti's material honesty, so that craftsmanship is always the loudest thing on the screen. It explicitly rejects the generic Shopify/SaaS template aesthetic: no card grids doing the talking, no color doing the selling, no motion proving the site is "modern."

**Key Characteristics:**
- No section is pale/off-white anymore. Every section sits on a dark or warm mid-dark tone — Dark Walnut, Warm Umber, or Caramel — plus Deep Charcoal reserved exclusively for the footer, matching a golden-lit, dark-room reference mood the brand pivoted toward. Cream is now the default text color everywhere.
- One signature bronze accent — anchored to the lamplight in the brand mark — appears only at rationed moments of emphasis.
- Every real photograph carries a consistent warm grade (desaturated, darkened, slightly sepia) plus a soft amber glow rising low in the frame and a dark vignette at the edges — a dark room lit by one warm source, applied consistently rather than left to whatever a source photo happens to look like.
- One restrained angled color-block accent (Designer Picks only) breaks the rectangle — used once, not as a repeating pattern.
- Every section carries a barely-perceptible ambient layer: a restrained vignette toward the edges and a very faint bronze glow behind the text, both drifting almost imperceptibly over ~24s. Never fast, never a focal point.
- Instrument Serif for display type against Inter for body/nav/UI — a confident, high-contrast editorial serif paired with a neutral, quiet grotesk.
- CTAs stay outline-only (never a filled button) even as the palette grew bolder — restraint in interaction, boldness in atmosphere.
- Choreographed, scroll-driven motion in the vein of an Apple product film: slow, purposeful, never bouncy.

## 2. Colors

The palette is warm, dark, and golden-lit throughout — there is no pale/off-white register anymore. Dark Walnut and Warm Umber carry what were the "dark" sections; Caramel is the warm mid-dark tone that replaced pale Stone/Parchment for what were the "light" sections (deliberately darker than a typical "light" tone so Cream text clears 4.5:1 contrast); Deep Charcoal is the one-time deepest moment reserved for the footer; Bronze is the one signature accent hue, drawn directly from the brand mark's pendant-lamp glow. Never use bronze as a background fill.

### Primary
- **Bronze** (`#A98452`, deep variant `#86663F`): the brand's signature light — the logo's lamp glow, hairline rules, hover/focus states, the ambient text-glow, the odd small mark. Never a fill color for buttons, cards, or large surfaces.

### Neutral
- **Caramel** (`#805F3F`, deep variant `#6A4D33`): the warm mid-dark register — sections that used to be pale now sit here, paired with Cream text. Deliberately dark enough (not a pastel tan) that body text stays accessible.
- **Dark Walnut** (`#2A1D16`) / **Warm Umber** (`#3A281E`): the two alternating darker section tones.
- **Deep Charcoal** (`#171513`): the deepest tone, reserved for the footer only — never used for any other section.
- **Cream** (`#F3EEE7`) / **Cream Muted** (`#C7BBA9`): the default text colors, used on every section now (Ink/Ink Muted are kept for legacy/product-page use only, where a section still sits on a pale background).

### Named Rules
**The Ember Rule.** Bronze is a threshold marker, not a surface — it appears where attention should pause (the lamp in the logo, a hairline rule, a hover or focus state, the ambient text-glow) and nowhere else. Target under 10% of any given view. If bronze is filling a button, a card, or a background, that's the rule broken, not a variant of it.

**The Seamless Cut Rule.** The section immediately following the hero stays on the dark ramp — never cut straight from cinematic video to a flat light field. Deep Charcoal never appears until the footer, so its arrival reads as the final curtain, not one tone among many.

**The Golden Room Rule.** Every real photograph gets the same warm-grade treatment (desaturated, darkened, faint sepia) plus a low amber glow and dark edge vignette — one consistent "lit by a single warm source" mood across all photography, not a grab-bag of however each source image happened to be shot.

**The Restrained Atmosphere Rule.** Ambient background motion (gradient drift, the bronze text-glow, film grain) exists only to keep a large flat section from feeling static — it must never be fast, never resemble a SaaS gradient mesh or particle field, and must fully disable under `prefers-reduced-motion`. The one angled color-block accent (Designer Picks) is a one-time geometric moment, not a reusable pattern — introducing it a second place would make it decoration instead of a deliberate beat.

## 3. Typography

**Display Font:** Instrument Serif (single weight, regular + italic) — a confident, high-contrast editorial serif with genuine presence at large display sizes.
**Body Font:** Inter — a neutral, quiet grotesk for body copy, navigation, and all UI text.

**Character:** A confident serif for headlines against a restrained sans body — the contrast pairing an editorial furniture catalog would use, not two similar grotesques competing with each other. Instrument Serif ships one weight, so hierarchy comes from size, tracking, and italics (used for pull-quotes), never from a faux-light or faux-bold variant.

### Hierarchy
- **Display**: hero and section headlines; large, generous line-height (~1.15), letter-spacing around -0.01 to -0.02em — never tighter than -0.04em.
- **Body**: supporting copy, capped at 65–75ch.
- **Label**: small caps or wide-tracked uppercase used sparingly — not on every section as a reflexive kicker.

### Named Rules
**The Wordmark Rule.** "NOTJUSTTILES" never sets as one dense line at display scale. At hero/footer sizes it stacks across two lines with generous tracking (e.g. "NOT JUST" / "TILES"), read as a considered lockup rather than a compound word forced into a single measure. Nav and favicon may use a tighter treatment if a short mark is introduced later, but no abbreviation is assumed until designed.

## 4. Elevation

Flat by default. Depth is conveyed through image scale, parallax, and layering of photography — not through drop shadows or card elevation. Choreographed motion (the chosen motion energy) implies depth through movement, so shadows stay nearly absent.

## 5. Components

`[no components exist yet — this section populates on the next $impeccable document scan once the project has code]`

## 6. Do's and Don'ts

### Do:
- **Do** let photography and film carry each section; treat copy as a caption, not a pitch.
- **Do** keep amber rationed to the logo, hairline rules, and hover/focus states — under 10% of any view.
- **Do** choreograph motion the way an Apple product film paces reveals: slow, sequential, purposeful.
- **Do** present product grids as plain photography with a caption underneath — no border, no shadow, no background box around the image.
- **Do** let product name/price fade in on hover in gallery contexts (Designer Picks) rather than sitting permanently under the image — object first, information second.
- **Do** treat the footer as an inverted (ink-background) surface with an oversized, stacked wordmark — a deliberate contrast beat, not a link farm.
- **Do** keep section padding and internal gaps tight enough to read as art-directed — generous whitespace is a choice, not empty scaffolding.

### Don't:
- **Don't** build generic Shopify layouts or anything with a template appearance.
- **Don't** use heavy gradients, startup SaaS styling, bright colors, or playful UI.
- **Don't** fill a button, card, or background with amber — CTAs stay quiet (outline or text-led; amber shows up only as a hairline, an underline, or a small mark).
- **Don't** let the page feel cluttered; when in doubt, remove an element rather than add one.
- **Don't** present products in cards that resemble Amazon or Shopify — no repeating icon-heading-text grids, no borders or shadows around product photography.
- **Don't** set "NOTJUSTTILES" as one dense unbroken line at display scale.
