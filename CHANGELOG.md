<a id="top"></a>

<div align="center">

<img src=".github/assets/changelog.svg" alt="Team Sudda: Changelog" width="100%">

<br/>

<p><strong>Every notable change to this project, newest first.</strong></p>

<a href="README.md"><img alt="README" src="https://img.shields.io/badge/README-374151?style=for-the-badge&labelColor=111827"></a>
<a href="CONTRIBUTING.md"><img alt="Contributing" src="https://img.shields.io/badge/Contributing-374151?style=for-the-badge&labelColor=111827"></a>
<a href="CODE_OF_CONDUCT.md"><img alt="Code of Conduct" src="https://img.shields.io/badge/Code%20of%20Conduct-374151?style=for-the-badge&labelColor=111827"></a>
<a href="SECURITY.md"><img alt="Security" src="https://img.shields.io/badge/Security-374151?style=for-the-badge&labelColor=111827"></a>
<a href="CHANGELOG.md"><img alt="Changelog" src="https://img.shields.io/badge/Changelog-ffd000?style=for-the-badge&labelColor=111827"></a>
<a href="LICENSE.md"><img alt="License" src="https://img.shields.io/badge/License-374151?style=for-the-badge&labelColor=111827"></a>

</div>

---

<div align="center">

<a href="https://github.com/saadmaz/Team-Sudda/releases"><img alt="Latest release" src="https://img.shields.io/github/v/release/saadmaz/Team-Sudda?include_prereleases&style=flat-square&label=latest%20release&labelColor=111827&color=ffd000"></a>
<a href="https://github.com/saadmaz/Team-Sudda/compare/main...develop"><img alt="Changes waiting for release" src="https://img.shields.io/github/commits-difference/saadmaz/Team-Sudda?base=main&head=develop&style=flat-square&label=unreleased%20commits&labelColor=111827&color=374151"></a>

</div>

> [!NOTE]
> The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html). Each version links to its full comparison at the bottom of this page, and to its [release notes](https://github.com/saadmaz/Team-Sudda/releases).

## [Unreleased]

### Changed

- Hosting moved from Vercel to Cloudflare Workers. The site deploys from the GitHub Deploy workflow with wrangler. Wrangler attaches `teamsudda.lk`, `www.teamsudda.lk` and `dev.teamsudda.lk` as custom domains, and security headers and redirects now live in `public/_headers` and `public/_redirects`.
- Unknown URLs now return a pre-rendered 404 page with a real 404 status instead of the app shell.

### Removed

- `vercel.json` and every Vercel reference.

## [1.3.0] - 2026-11-17

### Added

- A multi-page site: separate For Homes and For Business sections, a page for each of 13 services (checklist, exclusions, frequency and FAQs), 8 industry pages, 8 service-area pages, How We Work (the Team Sudda Standard), Pricing, Careers, FAQ and a quote chooser.
- Five enquiry forms: home booking, business site survey, careers application, contact and feedback, with step-by-step validation, a review step, spam protection and a WhatsApp fallback if sending fails.
- A new homepage with a homes and business split, commitments, the six-step process, a comparison with a typical cleaning service and the industries served.
- Dropdown navigation, a call, WhatsApp and quote bar on phones, and a skip-to-content link.
- Pre-rendered HTML for every page with its own title, description, canonical URL, social preview tags and structured data, plus a generated `sitemap.xml`.
- Optional Google Analytics 4 with lead and contact events, enabled by `VITE_GA_MEASUREMENT_ID`.
- Guides on in-house versus contract cleaning, an office cleaning checklist and how often to deep clean a home.

### Changed

- The About page now presents the STTPS group, and the values, mission and vision were rewritten around the Team Sudda Standard.
- The footer lists every service, industry and area.
- The privacy policy now names the service providers the site uses and covers job applications.
- The main JavaScript bundle is smaller (460 kB to 288 kB) because pages load on demand.
- The client section now shows the STTPS group companies Team Sudda cleans for (Tank Sudda, STOPWASH and Polish Station), replacing a list of organisations that were not Team Sudda clients.
- Service area copy now says Colombo and Greater Colombo, and booking messages no longer promise confirmation within one hour.
- The sanitisation article now explains how disinfection works, without unverifiable kill-rate claims.

### Removed

- The eco-friendly cleaning article and product claims that could not be confirmed.
- Unused toast, tooltip, select and data-fetching code and their dependencies.
- Unverified claims: 99.9%, EPA-approved and hospital-grade disinfection, 5-star rating, insured and background-checked staff, "Sri Lanka's #1" and the feature percentages.
- Placeholder testimonials and gallery projects that reused stock photos. Both sections stay hidden until real reviews and on-site photos are added.

## [1.2.1] - 2026-11-17

### Fixed

- Canonical, Open Graph and preview-image URLs now use `www.teamsudda.lk`, the address the site is served from, so search engines and social platforms no longer hit a redirect.

## [1.2.0] - 2026-11-17

### Added

- Favicon, Apple touch icon and theme colour, and the 1200x630 social preview image, which `index.html` referenced but were missing, so link previews and browser tabs now show the Team Sudda brand.

## [1.1.4] - 2026-11-17

### Removed

- 39 unused UI components, an unused hook, an unrendered Team section with its data, the unused stylesheet and placeholder image, and 36 unused dependencies. Installs and the repository are smaller; the production bundle and behaviour are unchanged.

## [1.1.3] - 2026-11-17

### Changed

- Contributing, Security Policy, Code of Conduct, License and Changelog redesigned with branded headers, navigation, tables, diagrams and callouts; the licence is now LICENSE.md.

## [1.1.2] - 2026-11-17

### Changed

- README shows the development environment as awaiting host setup until development deploys are enabled.

## [1.1.1] - 2026-11-17

### Changed

- Redesigned README with a brand banner, live release, CI and deployment badges, action buttons, feature grid, diagrams and collapsible panels.
- Navigation bars and callouts across the contributing, security, conduct and documentation pages.

### Fixed

- Production smoke test no longer fails when Cloudflare's bot protection challenges the CI runner; the challenge confirms the site is up.

## [1.1.0] - 2026-11-17

### Added

- Development and production environments: `develop` deploys to development and `main` to production, through one Deploy workflow and GitHub Environments with per-environment settings.

## [1.0.0] - 2026-11-16

First versioned release of [teamsudda.lk](https://teamsudda.lk).

### Added

- Home page with hero, services, why-us, pricing, team, client logos, testimonials, gallery preview, FAQ and call to action.
- About, Book, Blog (with article pages), Gallery, Privacy Policy and Terms pages, and a branded 404 page.
- Online booking and contact forms with validation, delivered through EmailJS.
- Floating WhatsApp button and TikTok, LinkedIn and X social links.
- Per-page SEO metadata, canonical URLs, Open Graph tags and JSON-LD structured data.
- Vercel configuration with single-page-app routing, security headers and long-term asset caching.
- Continuous integration on every push and pull request: lint, type check, tests and production build.
- Project governance: proprietary licence, security policy, contribution guidelines, code of conduct, issue forms, pull request template, CODEOWNERS and Dependabot.
- Standard documentation layout shared by every STTPS repository: architecture, configuration, deployment, decision records (ADRs) and release and rollback runbooks, indexed in `docs/README.md`.

### Fixed

- Lint errors in UI primitives, the booking form phone validation pattern and the Tailwind configuration.

[Unreleased]: https://github.com/saadmaz/Team-Sudda/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/saadmaz/Team-Sudda/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/saadmaz/Team-Sudda/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/saadmaz/Team-Sudda/compare/v1.1.4...v1.2.0
[1.1.4]: https://github.com/saadmaz/Team-Sudda/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/saadmaz/Team-Sudda/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/saadmaz/Team-Sudda/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/saadmaz/Team-Sudda/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/saadmaz/Team-Sudda/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/saadmaz/Team-Sudda/releases/tag/v1.0.0
