# Datalogos Limited corporate website

Responsive single-page corporate website for Datalogos Limited, following the September 2026 Master Brand Identity. It presents AIdentity advisory, the modular Counterpoise platform, Verity assurance and the Datafolio portable wallet.

## Run locally

Open `index.html` in a browser, or run from this directory:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included

- `index.html` — site structure and customer-specific copy
- `styles.css` — responsive design system, portraits and embedded demo layout
- `app.js` and `data/blog-index.json` — responsive navigation, searchable 63-post blog archive and POC/whitepaper access request forms
- Whitepaper requests open a pre-addressed email to Advisory@datalogos.co.uk with the subject “Whitepaper Access”; the visitor must send it from their email app. Whitepaper files remain access controlled and are not distributed automatically.
- `assets/john-hauxwell-portrait.png` — supplied portrait, displayed head and shoulders in a circular crop
- `assets/darren-placeholder.svg` — brand-colour portrait placeholder for Darren White
- `demo/FINAL-Counterpoise-Standalone-Demo/` — self-contained Counterpoise v1.4 demo, embedded on the site and separately launchable

## Google Drive references

Blog archive index: https://docs.google.com/document/d/1p-uIw8ZQVttJ6Evd7VuG0TJlMjioHAsbzqIUb3a18Lc/edit?usp=drivesdk

Technical documents index: https://docs.google.com/document/d/1QJjTlZvZjDKJ0JAoh3jsEOeL9oy8rQ07g_KdVnqAMYI/edit?usp=drivesdk

The blog archive contains 63 entries from the Google Drive blog index, with search, topic filters, publication dates, links to the original AIdentity posts and corresponding Drive copies. The technical section links to selected master architecture, orchestrator, MCP-native, UML, Verity and Datafolio materials. The full technical index contains the broader catalogue and associated Drive folders.

## Product status

The embedded demonstration is illustrative and runs locally in the browser. It does not connect to cloud services, transmit data, issue credentials or process customer information. Product features and deployment profiles remain subject to implementation, customer requirements and validation. Cryptographic integrity evidence does not establish that the original source information is true.

## Before public launch

- Confirm approved public contact and leadership details.
- Replace Darren's placeholder with an approved headshot when available.
- Confirm Drive links are intended for the target audience and have suitable sharing permissions.
- Add privacy, cookie and accessibility statements as required for final hosting.
- Confirm production brand assets and legal clearance separately.
