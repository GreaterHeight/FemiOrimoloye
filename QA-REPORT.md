# Production QA Report — Femi Orimoloye Website

**Build status:** Static production package assembled; external launch gates remain.

## Automated structural checks performed

- 20 HTML documents detected across the package, including success states and 404.
- 17 public URLs listed in `sitemap.xml`; each maps to an existing local HTML route.
- Required page families and three article-detail routes are present.
- Unique title elements and main landmarks are present across public pages; success routes are intentionally minimal.
- Local CSS, JavaScript, favicon, manifest and image references resolve, with one intentional exception: `/assets/video/femi-executive-hero.mp4` is the documented final-film slot and the actual video has not been supplied/rendered.
- 192 px and 512 px supplied app icons are included; favicon generated from supplied icon artwork.
- Contact and newsletter forms use Netlify Forms markup and honeypot fields; actual receipt, routing and list integration must be verified on the deployed host.
- No analytics IDs, API secrets, fabricated testimonials or invented publication history were added.

## Not yet verified

- Full interactive browser testing at every target viewport and browser.
- Real Netlify form delivery and notification routing.
- Real newsletter-provider subscription, confirmation and unsubscribe flow.
- PWA installation/offline/update behaviour over HTTPS on supported devices.
- Final film playback, seamless loop, crop, size and reduced-motion fallback with the approved MP4.
- Live domain, DNS, TLS certificate and canonical URL behaviour.
- Live social profile URLs and WhatsApp availability.
- Legal/privacy review and final approval of credentials, career dates and reported metrics.

## Acceptance position

The site is structured and package-ready for static hosting configuration. Do not represent the final film, live form routing, newsletter subscription, analytics or domain deployment as complete until the relevant external dependency has been configured and tested.


## Follow-up correction after user-reported rendering failure

The supplied screenshot showed browser-default styling, collapsed navigation and broken image paths. The package has been revised to use relative internal asset and navigation paths, a relative CSS variables import and relative image URLs in CSS. This addresses the path-resolution failure mode when the extracted site is previewed from a local file path or served beneath a path prefix. The package must be deployed with the complete directory tree; `index.html` alone is not a complete website.

Validation performed after correction: checked all 20 HTML pages for local stylesheet references and local image/video paths; no missing local image references remain other than the intentionally unproduced hero MP4. A full live-hosted browser and integration test is still pending deployment; the screenshot's exact serving environment is not available in this workspace.


## Follow-up revision — 11 October 2026

- Reduced the homepage photo overlay substantially; the subject image is now intended to remain visually dominant, with contrast concentrated behind the copy.
- Added a logo-based page-loading throbber using the supplied `icon-192.png`, including reduced-motion handling and a fail-safe timeout.
- Added six new original insight drafts and six corresponding detail pages, bringing the insight library to nine articles.
- Added an image to each insight card and reused that exact image on its corresponding detail-page hero.
- Updated Open Graph/Twitter images and Article JSON-LD for all nine detail pages.
- Added article URLs to sitemap and summaries to LLM content files.
- Browser render and local-path checks are required after packaging; do not mark third-party form integrations or cinematic video as complete until configured/tested.


### Automated checks for the 11 October update

- 26 HTML documents present, including nine article detail pages.
- Nine insight cards present in the Insights index; all cards contain an image and link to their matching detail page.
- Each article detail hero points to the same image filename as its corresponding card.
- Local internal navigation checks: zero broken internal links.
- Local stylesheet/image/script/icon references: zero missing references. The only intentionally unresolved local media reference is `assets/video/femi-executive-hero.mp4`, documented as the outstanding cinematic film deliverable.
- A live browser-render test could not be completed in this execution environment; verify the extracted package on the target host after deployment.
