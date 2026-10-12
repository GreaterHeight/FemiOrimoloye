# QA Report — v8.3

## Checks performed
- Search result links now call `resolveSiteUrl()` before navigation.
- Resolver derives the deployment base path from the loaded `js/main.js` asset URL; root-hosted custom domains resolve with an empty base, and repository-hosted deployments preserve the repository prefix.
- Search index target paths correspond to files/pages included in the package, including the nested contact success page and article pages.
- JavaScript syntax validation: see package validation result for this release.

## Not verified
- A live browser click-through against the deployed GitHub Pages URL has not been performed in this package build.
- This fixes the search-result path construction; it does not by itself change DNS, GitHub Pages repository settings, or hosting configuration.
