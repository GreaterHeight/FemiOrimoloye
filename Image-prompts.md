# Image Prompts & Visual Asset Register

All supplied portraits are used as the source of truth for Femi's identity. Do not generate a substitute person or present an invented workplace, event, client, conference or project as documentary evidence. The website uses the supplied portraits directly. The hero poster uses the supplied `portrait-modern-office.jpg` image and a restrained CSS brand treatment.

## Asset inventory

| ID | Page / section | Exact path | Purpose | Type / dimensions target | Desktop / mobile crop | Placeholder / prompt mapping | Status |
|---|---|---|---|---|---|---|---|
| IMG-01 | Home / cinematic hero | `/assets/images/home/femi-hero-poster.jpg` | Executive presence and immediate human connection | JPG, 1122×1402 source; use as responsive cover | Desktop focal point approx. 58% x / 35% y; mobile center subject and protect face | Prompt IMG-01; supplied portrait is the identity source | ASSET SUPPLIED |
| IMG-02 | About / editorial portrait | `/assets/images/about/femi-editorial.jpg` | Human introduction and professional context | JPG, 1024×1536 source | Full portrait desktop; tighter upper-body crop mobile | Prompt IMG-02; supplied portrait-polished.jpg | ASSET SUPPLIED |
| IMG-03 | Experience / professional portrait | `/assets/images/experience/femi-professional.jpg` | Supporting visual for career narrative if used in a later composition | JPG, 1159×1356 source | Head and shoulders, avoid crop at chin/shoulder | Prompt IMG-03; supplied portrait-professional.jpg | ASSET SUPPLIED |
| IMG-04 | Shared / confident portrait | `/assets/images/shared/femi-confident.jpg` | Optional portrait for resource or speaking placement | JPG, 1024×1536 source | Subject remains central; do not overuse | Prompt IMG-04; supplied portrait-confident.jpg | ASSET SUPPLIED |
| IMG-05 | Shared / professional in context | `/assets/images/shared/femi-in-context.jpg` | Secondary context image; use selectively | JPG, 1024×1536 source | Retain contextual environment, no fake event cues | Prompt IMG-05; supplied portrait-luxury-office.jpg | ASSET SUPPLIED |
| VID-01 | Home / cinematic hero video | `/assets/video/femi-executive-hero.mp4` | 24-second executive presence film | MP4 / H.264, 1920×1080, 24 or 25 fps, under 10 MB target, silent loop | 16:9 desktop master; prepare 9:16 or a deliberate mobile crop where possible | See `Cinematic-Hero-Art-Direction.md` | PROMPT READY — FINAL FILM NOT SUPPLIED |
| IMG-06 | Home / video poster | `/assets/images/home/femi-hero-poster.jpg` | First paint, reduced-motion and video fallback | JPG, supplied photo source | Same focal-point and grade as hero video | Shared poster/video still; do not flash a different placeholder | ASSET SUPPLIED |
| IMG-07 | Social sharing / Open Graph | `/assets/images/shared/og-default.jpg` | Branded preview for social shares | JPG, 1200×630 | Portrait on right, copy-safe area left | Composed from supplied portrait and approved brand colours; no generative prompt needed | ASSET SUPPLIED / COMPOSED |
| ICON-01 | Browser / PWA | `/assets/images/icon-192.png`, `/assets/images/icon-512.png`, `/assets/images/favicon.ico` | Browser and install identity | PNG 192 and 512; ICO | Preserve supplied FO monogram | Supplied icon assets; favicon derived from icon-192 | ASSET SUPPLIED |

## Prompt IMG-01 — Hero poster / executive presence

**Purpose:** Create a restrained, cinematic editorial treatment around the supplied subject for a premium human-capital strategy website. Preserve identity. Use the supplied `portrait-modern-office.jpg` as the only identity reference.

**Prompt:** Produce a photorealistic editorial executive portrait treatment of the exact person in the supplied reference. Preserve facial structure, skin tone, age, hairline, facial hair, expression and distinguishing characteristics. Place him in a believable contemporary professional office environment with natural architectural depth, real material texture, subtle window light and restrained navy/royal-blue colour influence. Frame as a 16:9 landscape composition with the subject on the right third and generous calm negative space on the left for website typography. Use realistic full-frame camera perspective, natural skin texture, true-to-life highlights, soft directional daylight and restrained contrast. Premium editorial photography, not a glossy advertisement. No logos, no readable text, no invented employer branding, no fake screens, no awards, no exaggerated luxury, no artificial skin smoothing, no neon, no impossible anatomy, no over-saturated blue or red. Do not add any copy; the headline and brand graphics are added in HTML/CSS.

**Output:** 1920×1080 JPG, high quality. Desktop focal point on right third. Mobile crop must keep face clear and reserve text space by using the static poster with a dark local overlay rather than placing copy over the face. The existing supplied portrait remains the launch fallback.

## Prompt IMG-02 — About editorial portrait

Use the supplied `portrait-polished.jpg` as identity source. Create a photorealistic editorial crop suitable for a professional profile page. Preserve identity and realistic skin texture. Warm neutral office light, subtle navy suit, calm confident expression, architectural background with believable depth, refined rather than luxury-coded. Vertical 4:5 crop and 1200×1500 output. No text, logos, fictional offices or documentary claims. The existing portrait is used until an approved replacement is commissioned.

## Prompt IMG-03 — Career context portrait

Use the supplied `portrait-professional.jpg` as identity source. Preserve face and distinguishing features exactly. Create a natural executive portrait for a career page, clean studio/office light, neutral background, navy and white wardrobe tones, natural skin texture and accurate anatomy. 4:5 vertical, 1200×1500. No text, logos, awards, props implying a specific employer or invented work event.

## Prompt IMG-04 — Speaking / confident portrait

Use `portrait-confident.jpg` as the identity source. Preserve identity precisely. Compose a calm, assured professional portrait with natural office light and subtle depth; do not depict an event stage, audience or conference unless genuine event photography is supplied. 4:5 vertical, 1200×1500. No invented event, signage, logo or text.

## Prompt IMG-05 — Professional environment

Use `portrait-luxury-office.jpg` as the source. Preserve identity. If a new crop or light retouch is produced, keep the setting credible, avoid conspicuous luxury cues, and use a quiet professional tone consistent with the brand. 4:5 vertical, 1200×1500. Do not invent a real employer's office or claim the setting belongs to a named organisation.

## Source-dependent assets — no generative prompt

Any real event photography, named client/company premises, interview, publication cover, testimonial portrait, conference stage, or project documentary evidence requires an authentic source asset and permission. Do not generate such assets as if they document real events.


## IMG-07 — Open Graph share image

The 1200×630 share preview is composed from the supplied `portrait-modern-office.jpg`, the approved brand palette and typographic hierarchy. It is not documentary evidence of a new event or workplace. Keep the identity source authentic, avoid extra logos, and update the image only if the brand owner approves a new portrait or message.


## Insight-card and article-hero images

Each insight card image is reused as the matching article-detail hero image. Generated editorial images are illustrative and are not represented as photographs of actual client engagements.

- **People Strategy Is a Business Design Problem** — `assets/images/insights/people-strategy-is-a-business-design-problem.jpg` — Black professionals discussing business performance charts in a modern boardroom.

- **Total Rewards Is a System, Not a Payroll Line** — `assets/images/insights/total-rewards-is-a-system-not-a-payroll-line.jpg` — Two professionals reviewing business data and reports at a conference table.

- **The Employee Experience Is Built Into the Processes** — `assets/images/insights/the-employee-experience-is-built-in-the-processes.jpg` — A professional team in a boardroom discussing organisational data.

- **Workforce Planning Begins With the Work, Not the Headcount** — `assets/images/insights/workforce-planning-begins-with-the-work.jpg` — A senior professional explaining workforce analytics to a colleague in a modern office.

- **Pay Equity Requires More Than a Salary Comparison** — `assets/images/insights/pay-equity-requires-more-than-a-salary-comparison.jpg` — Two Black professionals reviewing compensation analysis and reports in an executive office.

- **Employee Listening Matters Only When It Changes Decisions** — `assets/images/insights/employee-listening-matters-only-when-it-changes-decisions.jpg` — Professionals reviewing employee and business data in a modern conference room.

- **HR Technology Should Simplify the Work Around People** — `assets/images/insights/hr-technology-should-simplify-work.jpg` — Femi Orimoloye in a professional office, representing the human side of HR technology.

- **Leadership Capability Is Built in Everyday Systems** — `assets/images/insights/leadership-capability-is-built-in-everyday-systems.jpg` — Executive portrait in a professional office setting, illustrating leadership capability.

- **The Metrics That Matter Connect People Activity to Business Outcomes** — `assets/images/insights/people-metrics-must-connect-to-business-outcomes.jpg` — Professional in a contemporary office, representing evidence-led people decisions.
