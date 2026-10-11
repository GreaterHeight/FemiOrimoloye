# QA Report — v8.2

## Targeted checks
- [x] Root-level `404.html` exists.
- [x] 404 page title is `Page Not Found (404) | Femi Orimoloye`.
- [x] 404 page provides recovery links to homepage, Industries, Expertise, Insights, and Contact.
- [x] 404 page reuses existing site styles, navigation, footer, language selector and scripts.
- [x] Malformed `{A(...)}` expression removed from the Speaking page.
- [x] Speaking CTA is a valid anchor to `../contact/?type=speaking`.
- [x] Existing v8.1 files retained; no framework rewrite.

## Not verified
- Browser-based visual acceptance test and live hosting behavior have not been run in this build environment.
- No deployment to `femiorimoloye.com` has been performed.
