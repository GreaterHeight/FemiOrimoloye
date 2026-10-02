# Security & Deployment Notes

- This is a static HTML/CSS/Vanilla JS build. It contains no secrets.
- Client-side form validation is for usability only. Production submission requires server-side validation, sanitisation, CSRF protection where applicable, spam controls and rate limiting.
- `_headers` is included for static hosts that support it (e.g. Netlify-style header configuration). Translate to the hosting platform's equivalent where necessary.
- Confirm the final Content Security Policy after analytics/form providers are selected. Do not broaden it casually.
- HTTPS is required in production.
- Configure backups, deployment rollback and monitoring at Gate 8.
