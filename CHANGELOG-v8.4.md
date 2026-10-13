# v8.4 — Cookie Consent

- Added a privacy consent panel styled to match the supplied reference.
- Added Accept all, Reject non-essential, and Manage preferences actions.
- Added essential/analytics preference controls and persisted choices in localStorage.
- Non-essential analytics remains disabled unless the visitor opts in; the panel emits `cookieconsentchange` and sets `data-analytics-consent` on the document element.
- Added the panel consistently across HTML pages and linked its policy text to the existing Cookie Policy page.
- Existing v8.3 search navigation and deployment-base behavior retained.

Note: an analytics provider is not enabled by this change; the consent mechanism provides a gate for a future approved integration.
