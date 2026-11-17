# ADR-0004: Host on Cloudflare Workers

<!-- nav -->

<sub><a href="../../README.md">Project README</a> · <a href="../README.md">Documentation index</a></sub>

| Status   | Date       |
| -------- | ---------- |
| Accepted | 2026-11-17 |

Supersedes the hosting part of [ADR-0001](0001-single-page-application-on-vercel.md).

## Decision

Serve the pre-rendered site from Cloudflare Workers static assets, configured in `wrangler.jsonc`, and deploy it from the GitHub Deploy workflow with `wrangler deploy`. `main` deploys to production (`teamsudda.lk`, `www.teamsudda.lk`); `develop` deploys to a separate Worker for `dev.teamsudda.lk`. Response headers and redirects live in `public/_headers` and `public/_redirects`.

## Alternatives considered

Stay on Vercel; Cloudflare Pages; Cloudflare's own Git integration (Workers Builds) instead of GitHub Actions.

## Rationale

The `teamsudda.lk` DNS zone is already on Cloudflare, so hosting there puts DNS, certificates, the CDN and the site in one account. Wrangler creates the custom-domain DNS records itself. Static asset requests on Workers are free and served from Cloudflare's edge. Workers is Cloudflare's recommended platform for new static sites. Deploying from GitHub Actions keeps the build, the environment variables and the smoke test next to CI, and works the same for production and development.
