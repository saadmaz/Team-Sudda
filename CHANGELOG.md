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

[Unreleased]: https://github.com/saadmaz/Team-Sudda/compare/v1.1.3...HEAD
[1.1.3]: https://github.com/saadmaz/Team-Sudda/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/saadmaz/Team-Sudda/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/saadmaz/Team-Sudda/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/saadmaz/Team-Sudda/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/saadmaz/Team-Sudda/releases/tag/v1.0.0
