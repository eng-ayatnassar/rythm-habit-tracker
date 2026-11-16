---
name: Rythm | إيقاع
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-energy, focus-driven productivity environment built for rapid task execution, daily habit adherence, and momentum tracking. It serves individuals seeking clarity, structure, and positive gamified reinforcement across both English (LTR) and Arabic (RTL) workflows.

The visual style blends **Modern Corporate Utility** with **Tactile Gamification**:
- Interfaces use crisp, light-weight backdrops that place cognitive emphasis directly on task states and completion metrics.
- Gamified micro-elements—such as streak counters, milestone badges, and interactive rings—provide lively, positive feedback loops without degrading into visual noise.
- Every interaction conveys momentum, precision, and physical responsiveness while maintaining absolute structural symmetry across directional switch-overs.

## Colors

The palette is engineered for vibrant clarity and immediate behavioral feedback:

- **Primary (`#10B981` - Electric Mint):** The core driver for progress rings, task completion checkboxes, primary calls to action, and positive reinforcement states.
- **Secondary (`#6366F1` - Electric Indigo):** Reserved for analytical insights, deep focus mode intervals, timer tracking, and metric comparisons.
- **Tertiary (`#F59E0B` - Energetic Amber):** Dedicated to habit continuity, streak flames, warning indicators, and active milestone markers.
- **Accent Coral (`#FB7185`):** Reserved strictly for urgent deadlines, overdue habits, high-priority flags, and destructive confirmations.
- **Canvas & Surface System:** 
  - Canvas Base: `#F8FAFC` (Clean slate-tinted off-white providing depth separation from elevated surfaces).
  - Surface Default: `#FFFFFF` (Crisp container background for cards, modals, and lists).
  - Neutral Content: Deep Slate (`#0F172A`) for high-contrast titles and body text, supported by Secondary Slate (`#334155`) for secondary data, and Border Neutral (`#E2E8F0`) for crisp structural division.

## Typography

The typography scale relies on Inter for global typographic consistency. For Arabic locales, font-family cascading falls back gracefully to system Arabic grotesques (`IBM Plex Sans Arabic`, `Cairo`, system-ui) while preserving equivalent metrics, optical size, and vertical rhythm.

- **Numerals & Metrics:** Habit counts, timers, and completion percentages leverage tabular figures (`tnum`) to eliminate layout jitter during live count animations.
- **Directional Adaptation:** Arabic headings preserve structural line-height ratios (+10% line-height headroom compared to Latin counterparts) to prevent glyph clipping on ascending and descending diacritics.
- **Hierarchical Contrast:** Bold weights (`700`) are strictly reserved for primary milestone summaries and daily headlines, maintaining an authoritative yet airy reading experience.

## Layout & Spacing

The layout is built upon an 8pt spatial cadence with an underlying 12-column responsive fluid grid on desktop viewports and a single-to-two-column stacking layout on mobile screens:

- **Desktop (1024px+):** Max layout container capped at 1280px with `margin-desktop` (2rem) and `gutter-desktop` (1.5rem). The dashboard divides cleanly into a persistent 4-column progress & metrics sidebar alongside an 8-column main habit workflow stream.
- **Tablet (768px - 1023px):** 8-column configuration with 1.5rem margins and 1rem gutters. Analytics stack beneath priority daily targets.
- **Mobile (< 768px):** Single-column stream with 1rem canvas margins. Navigation relocates to an anchored bottom tab-bar.
- **RTL Sizing Rules:** Grid offsets, card columns, and margin definitions swap axis dynamically using standard logical properties (`margin-inline-start`, `padding-inline-end`).

## Elevation & Depth

Visual hierarchy combines clean tonal layers with diffused ambient drop-shadows to ensure cards feel elevated above the ceramic canvas without appearing harsh:

- **Surface Level 0 (Canvas):** `#F8FAFC` flat base canvas.
- **Surface Level 1 (Cards & Modules):** `#FFFFFF` with a crisp, low-contrast border (`1px solid #E2E8F0`) and an ambient shadow: `0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 6px -1px rgba(15, 23, 42, 0.03)`.
- **Surface Level 2 (Hover States & Active Tasks):** Elevated using `0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.03)` with border shifting to `#CBD5E1`.
- **Surface Level 3 (Modals, Overlays, Floating Timers):** High-level elevation backed by `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)` over a 40% opacity slate scrim (`rgba(15, 23, 42, 0.40)` with `backdrop-filter: blur(4px)`).

## Shapes

The design system standardizes on Roundedness Level 2:
- Standard elements (buttons, inputs, regular cards) apply `0.5rem` (`8px`) border radii.
- Larger parent containers, daily calendar views, and dialog boxes scale to `rounded-lg` (`1rem` / `16px`).
- Habit category chips, streak badges, and status pills utilize full circular caps (`9999px`) to maintain tactile, gamified recognition across both English and Arabic labels.

## Components

### Buttons
- **Primary Action:** Solid Electric Mint background (`#10B981`) with pure white text (`#FFFFFF`), `0.5rem` radius, bold text (`label-lg`), and an inner subtle highlight. On hover, shifts to `#059669` with a subtle elevation boost.
- **Secondary / Ghost:** Transparent background with `#E2E8F0` border and `#0F172A` text; shifts to `#F1F5F9` on hover.
- **Icon Buttons:** Fixed 40x40px or 32x32px square targets with `0.5rem` rounded corners, centering micro-icons with directional mirroring support in RTL mode.

### Habit Chips & Badges
- **Pill Shape:** Fully rounded (`rounded-full`) with `space-xs` vertical padding and `space-md` horizontal padding.
- **Streak Pill:** Energetic Amber wash (`#FEF3C7`) with deep amber text (`#B45309`) accompanied by an inline flame indicator placed at the leading edge (`margin-inline-end: 0.25rem`).
- **Priority Pill:** Soft Coral wash (`#FFE4E6`) with vibrant rose label (`#E11D48`).

### Habit Cards & List Rows
- Packaged inside Level 1 surfaces with `1rem` padding.
- Includes a dedicated leading status control (interactive progress ring or checkbox), middle content group containing title and habit frequency tags, and trailing streak metrics.
- Left-to-right on LTR switches seamlessly to right-to-left layout order on RTL without manually repositioning child slots.

### Checkboxes & Progress Rings
- **Checkboxes:** Custom rounded squares (`6px` radius) with `2px` stroke in `#CBD5E1`. Upon completion, transitions with a quick bounce scale (1.1x down to 1.0x) into filled `#10B981` featuring a white checkmark.
- **Progress Rings:** SVG circular meters featuring a neutral track (`#E2E8F0`) and an animated stroke-dashoffset colored in Mint (`#10B981`) or Indigo (`#6366F1`) based on metric type.

### Input Fields
- Structured at 44px height with a `0.5rem` corner radius, `#FFFFFF` surface fill, and `1px solid #E2E8F0`.
- Focus shifts ring stroke to `2px solid #10B981` with an outer soft mint glow (`rgba(16, 185, 129, 0.15)`).
- Input labels and placeholder text align logically with `text-align: start`.