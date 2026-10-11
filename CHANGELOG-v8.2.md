# Changelog — v8.2

## Fixes
- Added a custom root-level `404.html` page using the existing site shell, brand styling, navigation, footer, search, language selector, and contact affordances.
- Added clear recovery paths from the 404 page to the homepage, Industries, Expertise, Insights, and Contact pages.
- Corrected the malformed CTA expression on the Speaking page to a real HTML anchor pointing to `../contact/?type=speaking`, preserving the speaking enquiry query parameter.

## Notes
- The custom 404 page is suitable for static hosting that supports a root `404.html` convention (including GitHub Pages and Netlify).
- This package has not been deployed to the live domain.
