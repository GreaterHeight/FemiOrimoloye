# v8.3 — Search Result Navigation Fix

- Fixed search-result navigation to resolve links against the website's deployment base path, inferred from the loaded `js/main.js` asset URL.
- This supports GitHub Pages project sites deployed beneath a repository path as well as custom domains served from the root.
- Kept the search index and existing result presentation intact.

## Scope
This release specifically addresses search-result links that previously used root-absolute paths (such as `/industries/`) and could navigate outside a GitHub Pages project site's repository path, producing GitHub's generic 404 screen.
