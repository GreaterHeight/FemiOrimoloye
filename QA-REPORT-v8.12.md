# QA Report — v8.12

## Checks performed
- Searched HTML pages for the old generic X and YouTube footer URLs.
- Searched all HTML pages for the old developer-credit casing.
- Searched all nine Insight detail pages for the exact editorial note and `.article-reference-note` wrapper.
- Checked HTML files are readable UTF-8 and the ZIP archive can be opened.

## Expected outcomes
- X footer destination: `https://x.com/IamFemiOrimoloye`
- YouTube footer destination: `https://www.youtube.com/@IamFemiOrimoloye`
- Footer credit: `DEVELOPED BY GREATERHEIGHT TECHNOLOGIES`
- Editorial note removed from all nine article detail pages.

## Limitations
This was source-level QA. No live deployment or full browser visual test was performed.
