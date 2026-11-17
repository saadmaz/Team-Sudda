# Deployment

<!-- nav -->

<sub><a href="../README.md">Project README</a> · <a href="README.md">Documentation index</a></sub>

> How teamsudda.lk reaches production. Part of the [project documentation](README.md).

## Environments

| Environment   | Branch    | URL                                          | Deploys                                                                      |
| ------------- | --------- | -------------------------------------------- | ---------------------------------------------------------------------------- |
| `development` | `develop` | [dev.teamsudda.lk](https://dev.teamsudda.lk) | Automatically on every merge into `develop`                                  |
| `production`  | `main`    | [teamsudda.lk](https://teamsudda.lk)         | Automatically when `develop` is promoted to `main` by a release pull request |

Vercel builds and serves each branch; the Deploy workflow verifies the build and the live URL. Each environment is a GitHub Environment with its own variables (`APP_URL` and host settings) and secrets, so one workflow serves both. Production accepts deployments from `main` only; development from `develop` only.

Development deploys are switched on per repository by setting the `DEVELOPMENT_ENABLED` repository variable to `true` once the development host exists. Until then, `develop` is built and tested by CI but not deployed.

### Setting up development

Once development is live, replace the grey development badge in the README Deployment table with the live status badge:
`https://img.shields.io/github/deployments/saadmaz/Team-Sudda/development?style=flat-square&label=development&labelColor=111827`.

Vercel: assign `dev.teamsudda.lk` to the `develop` branch (Settings → Domains → Git branch).

### Promotion

1. Feature branches merge into `develop` and deploy to development.
2. When development is verified, open a release pull request from `develop` into `main` (see [runbooks/release.md](runbooks/release.md)).
3. Merging it deploys to production.

The site is hosted on **Vercel**, connected to this repository. Every push to `main` deploys to production, and every pull request gets a preview URL.

| Setting               | Value                                                             |
| --------------------- | ----------------------------------------------------------------- |
| Framework preset      | Vite                                                              |
| Build command         | `npm run build`                                                   |
| Output directory      | `dist`                                                            |
| Environment variables | The three `VITE_EMAILJS_*` values, set for Production and Preview |

[`vercel.json`](../vercel.json) adds the single-page-app fallback (so deep links such as `/about` load directly), security headers and long-term caching for hashed assets.

## Post-deployment checks

1. Open https://teamsudda.lk and refresh on an inner page such as `/about` to confirm the SPA fallback.
2. Submit a test booking and confirm it arrives at hello@teamsudda.lk.
3. Check the response headers include `Strict-Transport-Security`.
