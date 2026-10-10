# Femi Orimoloye — Personal Brand & Digital Authority Platform

A bespoke, responsive static website based on the supplied Personal Brand Definition, Project Brief and Master Prompt v5.8. Brand system: Royal Blue `#1749B8`, Midnight Navy `#1B2230`, Powder Blue `#DCE8F8`, Soft Lavender `#9B8EAA`, Burgundy Red `#C6404B`, Clean White `#F7F8FA`; Cormorant Garamond, Inter and Manrope.

## Corrected path handling and preview

This package uses **relative internal paths** for stylesheets, JavaScript, images, navigation and form destinations. This is intentional: the site can be previewed from the extracted folder and can also be deployed at the root of `https://femiorimoloye.com/`. Upload the **contents of this folder**, not just `index.html`; keep the `css/`, `js/`, `assets/`, and page directories alongside it. If only the HTML file is uploaded or copied, styling and images will not load.

The cinematic hero MP4 is still a separate production asset. Until it is supplied, the real portrait poster remains the visual fallback.

## Run locally

This is a static site. Open `index.html` for a quick visual check, or serve the folder over HTTP for routing, manifest and service-worker testing. For example, from this directory run `python -m http.server 8080` and visit `http://localhost:8080`. PWA service-worker registration intentionally requires HTTPS or localhost.

## Included

- Home, About, Expertise, Experience, Leadership, Initiatives, Speaking, Media & Publications, Services, Industry Authority, Resources, Insights archive, three article detail pages, Contact, Privacy Notice and 404.
- Brand-responsive layouts, mobile navigation, reduced-motion support, SEO/social metadata, Person structured data, sitemap, robots.txt, `llms.txt`, `llms-full.txt`, PWA manifest and service worker.
- Contact and newsletter forms prepared for Netlify Forms, with honeypot fields and accessible fields. Netlify notification routing, privacy/consent review and newsletter-list integration must be configured before production.
- Original editorial drafts clearly labelled as project-created content rather than previously published work.
- Image inventory and image prompts; cinematic hero film production brief and poster/fallback direction.

## Launch-critical external dependencies

The site is deployable as a static package, but these items cannot honestly be marked live until the owner/provider access is available and an end-to-end test is performed:

1. **Cinematic executive presence film:** the requested final 24-second, eight-shot, seamless-loop MP4 is not supplied in the source materials and could not be generated in this run. The hero has a real, supplied-photo poster/fallback and references the exact final path `/assets/video/femi-executive-hero.mp4`. Add the approved film at that path and verify encoding, loop, crop and file size before claiming the film deliverable complete.
2. **Contact form:** configure Netlify Forms for the deployed site and add notification routing to `hello@femiorimoloye.com`. Submit a real test and verify delivery. If using another host, adapt to its supported form handler.
3. **Newsletter:** the form is prepared for Netlify Forms capture. To operate a real subscription list, connect the chosen email marketing provider, sender identity, consent wording, double-opt-in and unsubscribe workflow. Capturing a form submission alone is not the same as subscribing someone to a mailing list.
4. **Analytics/reporting:** add the selected provider and approved IDs after the consent model is confirmed. No IDs are fabricated or loaded by default.
5. **Domain/hosting:** connect `femiorimoloye.com`, configure HTTPS and verify DNS and canonical URLs. Hosting and DNS credentials were not supplied.
6. **Social links / WhatsApp:** LinkedIn URL is supplied; Instagram/Facebook profile URLs are inferred from the supplied handle and should be verified. Confirm that `+1 (506) 349-8901` is WhatsApp-enabled before advertising the WhatsApp shortcut.
7. **Privacy notice:** review the draft against the final hosting, forms, newsletter, analytics, jurisdiction and retention practices. It is not legal advice.
8. **Final source approval:** the supplied Personal Brand Definition is marked draft for client validation. Confirm credentials, current titles, employment dates and reported outcome metrics before launch.

## Deployment

Recommended: Netlify static hosting. Publish this directory as the site root. After deployment, configure form notifications and newsletter integration, attach the domain and HTTPS, then test the deployed URLs, direct article links, 404, manifest, installation, cache update behaviour, keyboard access, reduced motion and all contact actions. If using GitHub Pages or another host, ensure directory routes and custom 404 handling are supported and adapt the form handling accordingly.

## Notes

- No client testimonials, awards beyond supplied profile claims, existing media appearances, prior speaking engagements or prior publications have been invented.
- Metrics are contextualised as reported in supplied profile material and should be validated by the client before public release.
- No analytics IDs, API keys, newsletter credentials or other secrets are present in frontend code.
- This package is production-structured and ready for hosting configuration. It is not represented as already deployed to the domain or as having live external integrations that were not available for testing.

The package includes a `netlify.toml` with basic security headers and Netlify form configuration, plus form-success routes. Verify the CSP against the deployed build and any future third-party integrations before tightening it further.
