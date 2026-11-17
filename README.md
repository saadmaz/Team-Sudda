<div align="center">

# Team Sudda

**Professional cleaning services for homes and workplaces.**

The official website of Team Sudda: home, office and deep-cleaning services across Colombo, Sri Lanka.

[![Website](https://img.shields.io/badge/website-teamsudda.lk-374151?style=flat-square&labelColor=111827)](https://teamsudda.lk)
[![CI](https://github.com/saadmaz/Team-Sudda/actions/workflows/ci.yml/badge.svg)](https://github.com/saadmaz/Team-Sudda/actions/workflows/ci.yml)
[![Version](https://img.shields.io/badge/version-v1.1.0-374151?style=flat-square&labelColor=111827)](https://github.com/saadmaz/Team-Sudda/releases)
![License](https://img.shields.io/badge/license-proprietary-374151?style=flat-square&labelColor=111827)

[**teamsudda.lk**](https://teamsudda.lk) · [Documentation](docs/README.md) · [Report a bug](https://github.com/saadmaz/Team-Sudda/issues/new?template=bug_report.yml) · [Request a change](https://github.com/saadmaz/Team-Sudda/issues/new?template=feature_request.yml)

</div>

---

## Contents

- [About](#about)
- [Features](#features)
- [Architecture](#architecture)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Project structure](#project-structure)
- [Quality checks](#quality-checks)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Releases and versioning](#releases-and-versioning)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## About

Team Sudda is a professional cleaning team serving homes and businesses across Colombo. This repository powers [teamsudda.lk](https://teamsudda.lk): the services, pricing and booking flow customers use to arrange a clean.

|                  |                                                                   |
| ---------------- | ----------------------------------------------------------------- |
| **Organisation** | Tank Sudda (Pvt) Ltd                                              |
| **Status**       | Live                                                              |
| **Website**      | [teamsudda.lk](https://teamsudda.lk)                              |
| **Contact**      | [hello@teamsudda.lk](mailto:hello@teamsudda.lk) · +94 74 100 4296 |
| **Maintainer**   | [Saad Mazhar](https://github.com/saadmaz)                         |

## Features

- **Service catalogue:** Home, office, deep, post-renovation, sofa and carpet, sanitisation, after-event and move-in/move-out cleaning.
- **Transparent pricing:** Basic, Standard and Business plans.
- **Online booking:** A validated booking form at `/book`, delivered by email through EmailJS.
- **Trust signals:** Team profiles, client logos, testimonials, gallery and FAQ.
- **Blog:** Cleaning guides with individual article pages.
- **SEO:** Per-page titles, descriptions, canonical URLs, Open Graph tags and JSON-LD structured data.
- **Always-on contact:** Floating WhatsApp button and click-to-call on every page.
- **Legal pages:** Privacy Policy and Terms.

## Architecture

A React single-page application built with Vite and hosted on Vercel. React Router renders each page client-side, `vercel.json` provides the SPA fallback and security headers, and the booking and contact forms send email through EmailJS.

The full picture, with diagrams, is in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Significant decisions are recorded as [ADRs](docs/adr/README.md).

## Tech stack

| Layer     | Technology                                       |
| --------- | ------------------------------------------------ |
| Framework | React 18 single-page app with React Router 6     |
| Language  | TypeScript                                       |
| Build     | Vite 5 with SWC                                  |
| Styling   | Tailwind CSS 3 and Radix-based UI primitives     |
| Motion    | Framer Motion                                    |
| Forms     | React Hook Form + Zod, delivered through EmailJS |
| Hosting   | Vercel                                           |
| Tooling   | npm, Vitest, Testing Library, ESLint             |

## Getting started

### Prerequisites

- Node.js 20 or later (22 LTS recommended)
- Git

### Install and run

```sh
git clone https://github.com/saadmaz/Team-Sudda.git
cd Team-Sudda
npm ci
cp .env.example .env    # then fill in the EmailJS values
npm run dev
```

The site runs at **http://localhost:8080**.

### Scripts

| Command              | Description                                  |
| -------------------- | -------------------------------------------- |
| `npm run dev`        | Start the development server with hot reload |
| `npm run build`      | Production build into `dist/`                |
| `npm run preview`    | Serve the production build locally           |
| `npm run lint`       | Lint with ESLint                             |
| `npm run typecheck`  | Type-check the project with `tsc`            |
| `npm test`           | Run the test suite once                      |
| `npm run test:watch` | Run tests in watch mode                      |

## Configuration

Three public, domain-restricted EmailJS values (`VITE_EMAILJS_*`) enable form delivery. All copy and business data lives in `src/lib/constants/`.

Every variable, where it is set and which are secret: [docs/CONFIGURATION.md](docs/CONFIGURATION.md). How to update content is in [docs/CONTENT.md](docs/CONTENT.md).

## Project structure

```
.
├── .github/                 # CI workflow, issue and pull request templates
├── public/                  # Static files: robots.txt, favicon, social image
├── src/
│   ├── assets/              # Photography
│   ├── components/          # Page sections: Hero, Services, Pricing, Contact...
│   │   └── ui/              # Radix-based UI primitives
│   ├── hooks/               # useSEO and UI hooks
│   ├── lib/
│   │   ├── constants/       # All site content: services, pricing, team, blog, FAQ, contact
│   │   └── emailjs.ts       # Email delivery for forms
│   ├── pages/               # One component per route
│   └── test/                # Vitest setup and tests
├── vercel.json              # SPA routing, security headers and caching
└── vite.config.ts           # Build configuration
```

## Quality checks

Every push and pull request to `main` runs the [CI workflow](.github/workflows/ci.yml): lint, formatting, type check, tests and a production build. Run the same checks locally before opening a pull request:

```sh
npm run lint && npm run format:check && npm run typecheck && npm test && npm run build
```

## Deployment

| Environment | Branch    | URL                                          |
| ----------- | --------- | -------------------------------------------- |
| Development | `develop` | [dev.teamsudda.lk](https://dev.teamsudda.lk) |
| Production  | `main`    | [teamsudda.lk](https://teamsudda.lk)         |

Vercel builds and serves each branch; the Deploy workflow verifies the build and the live URL. Work merges into `develop` and deploys to development; a release pull request from `develop` into `main` deploys to production.

Environments, setup, secrets and post-deployment checks are in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). To release or roll back, follow the [runbooks](docs/runbooks/README.md).

## Documentation

All documentation lives in [`docs/`](docs/README.md), using the same layout in every STTPS repository.

| Document                                  | Covers                                              |
| ----------------------------------------- | --------------------------------------------------- |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md)   | How the system is built and how data flows          |
| [CONFIGURATION.md](docs/CONFIGURATION.md) | Environment variables and configuration files       |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md)       | Hosting, the delivery pipeline and first-time setup |
| [CONTENT.md](docs/CONTENT.md)             | Updating copy, business data, imagery and articles  |
| [adr/](docs/adr/README.md)                | Architecture decision records                       |
| [runbooks/](docs/runbooks/README.md)      | Release and rollback procedures                     |

Product and reference documents for this project are listed in the [documentation index](docs/README.md).

## Releases and versioning

The project follows [Semantic Versioning](https://semver.org). Each release is tagged `vX.Y.Z` and published on the [Releases](https://github.com/saadmaz/Team-Sudda/releases) page. Notable changes are recorded in [CHANGELOG.md](CHANGELOG.md), and the release procedure is in [docs/runbooks/release.md](docs/runbooks/release.md).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the branching model, commit conventions and pull request checklist. All participants are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please do not report security issues in public issues. See [SECURITY.md](SECURITY.md) for how to report a vulnerability privately.

## License

Copyright © 2026 Tank Sudda (Pvt) Ltd. All rights reserved.

This is proprietary software. No permission is granted to use, copy, modify or distribute it without prior written consent. See [LICENSE](LICENSE).
