# QA Report — v8.1 Footer & Brand Descriptor Refinement

## Requested changes
- Language switcher moved from the header navigation to the footer.
- “People · Performance · Impact” kept on one line in the brand/logo lockup.

## Checks completed
- 29 HTML pages found.
- Exactly one language selector per HTML page (29 total).
- Footer language selector present on all 29 pages.
- No language selector remains inside the primary navigation.
- Confirmation pages that previously omitted a footer now have a minimal footer with the language selector.
- Existing search button remains in the header navigation.
- Existing shared language-switching logic remains in place; it selects all `.language-select` elements and persists the language preference.
- Brand descriptor single-line styling added, with compact mobile typography.
- `node --check` passed for `js/main.js`.

## Not claimed as verified
- Full browser-based visual acceptance testing was not completed in this pass.
- Production deployment, contact-form delivery, newsletter delivery and the cinematic hero MP4 remain outside these two layout refinements and require separate verification/configuration.
