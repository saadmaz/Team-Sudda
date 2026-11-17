# Deployment

<!-- nav -->

<sub><a href="../README.md">Project README</a> · <a href="README.md">Documentation index</a></sub>

> How teamsudda.lk reaches production. Part of the [project documentation](README.md).

## Environments

| Environment   | Branch    | Worker                   | URL                                                      | Deploys                                                                      |
| ------------- | --------- | ------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `development` | `develop` | `team-sudda-website-dev` | [dev.teamsudda.lk](https://dev.teamsudda.lk)             | Automatically on every merge into `develop`, once enabled                    |
| `production`  | `main`    | `team-sudda-website`     | [teamsudda.lk](https://teamsudda.lk), `www.teamsudda.lk` | Automatically when `develop` is promoted to `main` by a release pull request |

The site is hosted on **Cloudflare Workers** as static assets. The [Deploy workflow](../.github/workflows/deploy.yml) builds the branch, uploads `dist/` with `wrangler deploy`, then smoke-tests the live URL. Each environment is a GitHub Environment with its own variables, so one workflow serves both. Production accepts deployments from `main` only; development from `develop` only.

[`wrangler.jsonc`](../wrangler.jsonc) defines both Workers and their custom domains. On deploy, wrangler attaches the domains and creates their DNS records in the `teamsudda.lk` zone. `/about` serves `about.html`, and any URL without a file gets `404.html` with a 404 status. [`public/_headers`](../public/_headers) sets the security headers and long-term caching for hashed assets, and [`public/_redirects`](../public/_redirects) holds permanent redirects.

## First-time setup

1. **Cloudflare API token.** In the Cloudflare dashboard go to My Profile → API Tokens → Create Token, and start from the **Edit Cloudflare Workers** template. Add the zone permissions **Zone → DNS → Edit** and **Zone → Workers Routes → Edit**, limited to the `teamsudda.lk` zone. Copy the token.
2. **Account ID.** It's shown on the Workers & Pages overview page in the Cloudflare dashboard.
3. **GitHub secrets** (repository settings → Secrets and variables → Actions):
   - `CLOUDFLARE_API_TOKEN`: the token from step 1
   - `CLOUDFLARE_ACCOUNT_ID`: the account ID from step 2
4. **GitHub environment variables.** Set these on both the `production` and `development` environments. They're compiled into the site at build time:
   - `APP_URL`: `https://www.teamsudda.lk` (production) or `https://dev.teamsudda.lk` (development)
   - `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_GA_MEASUREMENT_ID`: optional, production only
5. **Clear old DNS records.** Delete any existing `A`, `AAAA` or `CNAME` records for `teamsudda.lk`, `www` and `dev` in the Cloudflare DNS tab. Wrangler can't attach a custom domain while a conflicting record exists.
6. **Deploy.** Run the Deploy workflow on `main` (Actions → Deploy → Run workflow), or merge a release.
7. **Redirect apex to www** (recommended, because canonical URLs use `www`). Go to Rules → Redirect Rules → Create rule → template **Redirect from root to WWW**. Use a 301 status and keep the query string.
8. **EmailJS.** Add `teamsudda.lk` and `www.teamsudda.lk` to the allowed domains in the EmailJS dashboard.

### Setting up development

Set the `DEVELOPMENT_ENABLED` repository variable to `true`. The next push to `develop` creates the `team-sudda-website-dev` Worker on `dev.teamsudda.lk`. Then replace the grey development badge in the README Deployment table with the live status badge:
`https://img.shields.io/github/deployments/saadmaz/Team-Sudda/development?style=flat-square&label=development&labelColor=111827`.

### Promotion

1. Feature branches merge into `develop` and deploy to development.
2. When development is verified, open a release pull request from `develop` into `main` (see [runbooks/release.md](runbooks/release.md)).
3. Merging it deploys to production.

### Deploying by hand

```sh
npm run build
npx wrangler@4 login
npx wrangler@4 deploy                    # production
npx wrangler@4 deploy --env development  # development
```

To preview the production build locally with Cloudflare's routing, run `npx wrangler@4 dev` after `npm run build`.

## Post-deployment checks

The Deploy workflow checks the homepage, a service page, the sitemap and the 404 status automatically. After a release, also:

1. Open https://www.teamsudda.lk, then refresh on an inner page such as `/services/office-cleaning`.
2. Submit a test booking and confirm it arrives at hello@teamsudda.lk.
3. Check the response headers include `Strict-Transport-Security`.
