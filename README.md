<div align="center">

# Team Sudda

**Professional cleaning services for homes and workplaces.**

The official website of Team Sudda: home, office and deep-cleaning services across Colombo, Sri Lanka.

[![Website](https://img.shields.io/badge/website-teamsudda.lk-0F766E?style=flat-square&labelColor=0B1728)](https://teamsudda.lk)
[![CI](https://github.com/saadmaz/Team-Sudda/actions/workflows/ci.yml/badge.svg)](https://github.com/saadmaz/Team-Sudda/actions/workflows/ci.yml)
![License](https://img.shields.io/badge/license-proprietary-0B1728?style=flat-square)

[**teamsudda.lk**](https://teamsudda.lk) · [Report a bug](https://github.com/saadmaz/Team-Sudda/issues/new?template=bug_report.yml) · [Request a change](https://github.com/saadmaz/Team-Sudda/issues/new?template=feature_request.yml)

</div>

---

## Contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Project structure](#project-structure)
- [Content management](#content-management)
- [Quality checks](#quality-checks)
- [Deployment](#deployment)
- [Releases and versioning](#releases-and-versioning)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## About

Team Sudda is a professional cleaning team serving homes and businesses across Colombo. This repository powers [teamsudda.lk](https://teamsudda.lk): the services, pricing and booking flow customers use to arrange a clean.

|                  |                                                                   |
| ---------------- | ----------------------------------------------------------------- |
| **Organisation** | Tank Sudda (Pvt) Ltd                                              |
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

The booking and contact forms send email through [EmailJS](https://www.emailjs.com). Copy `.env.example` to `.env` and set:

| Variable                   | Purpose                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service that delivers the message                                                               |
| `VITE_EMAILJS_TEMPLATE_ID` | Template using `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, `{{date}}`, `{{message}}` |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key                                                                                      |

These values are public by design (they are compiled into the browser bundle). Restrict the EmailJS account to the `teamsudda.lk` domain in the EmailJS dashboard. If they are missing, the forms show an error asking the visitor to get in touch on WhatsApp instead.

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

## Content management

All copy and business data lives in [`src/lib/constants/`](src/lib/constants), so routine updates don't touch page code.

| Task                                  | Where                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Phone, email, address or social links | `src/lib/constants/contact.ts`                                                                         |
| Services                              | `src/lib/constants/services.ts`                                                                        |
| Pricing plans                         | `src/lib/constants/pricing.ts`                                                                         |
| Team members                          | `src/lib/constants/team.ts`                                                                            |
| Testimonials and client logos         | `testimonials.ts`, `clients.ts`                                                                        |
| FAQ                                   | `src/lib/constants/faqs.ts`                                                                            |
| Blog posts                            | `src/lib/constants/blog.ts`                                                                            |
| Add a page                            | Create it in `src/pages/`, register it in `src/App.tsx` above the catch-all route, and call `useSEO()` |

## Quality checks

Every push and pull request to `main` runs the [CI workflow](.github/workflows/ci.yml): lint, type check, tests and a production build. Run the same checks locally before opening a pull request:

```sh
npm run lint && npm run typecheck && npm test && npm run build
```

## Deployment

The site is hosted on **Vercel**, connected to this repository. Every push to `main` deploys to production, and every pull request gets a preview URL.

| Setting               | Value                                                             |
| --------------------- | ----------------------------------------------------------------- |
| Framework preset      | Vite                                                              |
| Build command         | `npm run build`                                                   |
| Output directory      | `dist`                                                            |
| Environment variables | The three `VITE_EMAILJS_*` values, set for Production and Preview |

[`vercel.json`](vercel.json) adds the single-page-app fallback (so deep links such as `/about` load directly), security headers and long-term caching for hashed assets.

## Releases and versioning

The project follows [Semantic Versioning](https://semver.org). Each release is tagged `vX.Y.Z` and published on the [Releases](https://github.com/saadmaz/Team-Sudda/releases) page. Notable changes are recorded in [CHANGELOG.md](CHANGELOG.md).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the branching model, commit conventions and pull request checklist. All participants are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please do not report security issues in public issues. See [SECURITY.md](SECURITY.md) for how to report a vulnerability privately.

## License

Copyright © 2026 Tank Sudda (Pvt) Ltd. All rights reserved.

This is proprietary software. No permission is granted to use, copy, modify or distribute it without prior written consent. See [LICENSE](LICENSE).
