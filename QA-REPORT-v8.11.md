# QA Report — v8.11 Article Detail Experience

## Automated checks
- Confirmed nine insight detail pages were updated.
- Confirmed each page includes key takeaways, generated table of contents, share controls, author profile, contextual CTA and related-insight section.
- Checked all generated table-of-contents fragment links against heading IDs: no broken links found.
- Checked executable inline JavaScript syntax with Node.js: no syntax errors found (JSON-LD data blocks were excluded from JavaScript syntax checking).
- Checked the related-article image paths: all referenced image files exist.
- Preserved the existing 29-page site and its assets; only the shared stylesheet, nine article detail pages, and v8.11 documentation were changed.

## Not verified
- No live deployment was performed.
- No full browser-based visual regression or mobile-device test was performed.
- Share and clipboard actions are implemented but were not tested in a browser with real user permissions.
- The existing article drafts remain shorter than the recommended research-led target lengths. The template does not fabricate citations; each article still needs substantive research and source links before it can be described as fully researched.
