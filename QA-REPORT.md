# QA Report — Website v6

## Changes in this revision
- Newsletter subscription moved into a dedicated footer column immediately after Contact on all HTML pages.
- Primary navigation labels render in uppercase.
- Footer bottom now contains centered, separately linked Privacy Policy, Terms of Use, Disclaimer and Cookie Policy links.
- Removed the separate Privacy notice link from the footer Contact column.
- Removed the additional `section-tight` CTA section from the Contact page.
- Privacy acknowledgement checkbox and text now use a robust two-column grid for aligned wrapping.
- Two of nine Insight cards now use new mixed-diversity photography featuring white professionals (approximately 22% of the Insight card image set), while the wider site remains Black-professional-led.
- Added Terms of Use, Disclaimer and Cookie Policy pages.
- Updated sitemap and service-worker cache version.

## Automated checks
- 29 HTML documents present.
- Zero missing local references except the intentionally outstanding cinematic MP4 at `assets/video/femi-executive-hero.mp4`.
- Each HTML page has one footer newsletter form and one footer legal navigation.
- No separate pre-footer newsletter sections remain.
- Contact page has no `section-tight` CTA section.
- All nine Insight cards reuse their corresponding detail-page hero image paths; two card images were replaced in-place so card/detail image pairing remains intact.
- The two replaced Insight image assets are 1600 × 900 JPEGs.

## External/live checks not claimed
The website has not been deployed to the production domain in this environment. Live form delivery depends on the configured hosting provider. The cinematic MP4 remains an explicitly outstanding asset.
