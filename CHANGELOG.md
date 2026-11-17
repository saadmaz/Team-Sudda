# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/saadmaz/Team-Sudda/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/saadmaz/Team-Sudda/releases/tag/v1.0.0
