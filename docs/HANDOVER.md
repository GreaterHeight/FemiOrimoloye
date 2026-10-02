# OLUWAFEMI ORIMOLOYE WEBSITE — HANDOVER PACKAGE

## Release

- Project ID: OLUWAFEMI-ORIMOLOYE-WEB-001
- Release stage: Gate 8
- Build type: Static HTML/CSS/JavaScript
- Framework: None
- JavaScript: Vanilla JS
- Styling: CSS
- Source package: Gate 6 development build
- Launch authorization: Granted with documented exceptions

## Source Structure

- HTML page routes in root and page directories
- `css/styles.css`
- `js/main.js`
- `js/navigation.js`
- `js/animations.js`
- `js/forms.js`
- `images/`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `_headers`
- `llms.txt`
- `llms-full.txt`

## Deployment Configuration

Configure the production host for:

- HTTPS
- static routing
- custom error page / 404
- `_headers` support where the host permits it
- canonical production domain
- production sitemap URL
- form endpoint
- analytics identifiers
- server-side spam protection and rate limiting

## Form

The contact form currently provides client-side validation and a honeypot field. A real server-side submission mechanism must be connected before treating contact enquiries as operational.

Do not claim successful submission unless the endpoint actually receives and processes the message.

## Analytics

The build contains event hooks for:

- `cta_start_conversation`
- `final_start_conversation`
- `contact_form_validated`

Production analytics IDs and consent/configuration must be inserted by the deployment owner.

## SEO

Before production indexing:

- replace placeholder/scaffold sitemap entries with the real domain;
- configure canonical URLs;
- verify page titles and descriptions;
- verify Open Graph values;
- verify structured data;
- submit the production sitemap to the applicable search engine tools.

## Security

Included baseline configuration:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- Content Security Policy scaffold
- HSTS scaffold
- frame-ancestor protection
- base URI restriction
- form-action restriction

The host must actually apply supported headers. Validate CSP after production analytics and form integrations are configured.

## Backup / Rollback

Retain the exact release ZIP as the rollback artifact. Before deployment, create a dated backup of the currently deployed site, if one exists. Rollback consists of restoring the previous known-good static artifact.

## Known Accepted Exceptions

See `GATE-08-LAUNCH-AUTHORIZATION.md`.

## Post-Launch

See `POST-LAUNCH-BACKLOG.md`.
