# Deployment

<!-- nav -->

<sub><a href="../README.md">Project README</a> · <a href="README.md">Documentation index</a></sub>

> How teamsudda.lk reaches production. Part of the [project documentation](README.md).

## Environments

| Environment   | Branch    | Worker                   | URL                                                      | Deploys                                                                      |
| ------------- | --------- | ------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `development` | `develop` | `team-sudda-website-dev` | [dev.teamsudda.lk](https://dev.teamsudda.lk)             | Automatically on every merge into `develop`                                  |
| `production`  | `main`    | `team-sudda-website`     | [teamsudda.lk](https://teamsudda.lk), `www.teamsudda.lk` | Automatically when `develop` is promoted to `main` by a release pull request |

The site is hosted on **Cloudflare Workers** as static assets. **Cloudflare Workers Builds** is connected to this repository. On every push it runs `npm run build` and deploys `dist/` with wrangler. The [Deploy workflow](../.github/workflows/deploy.yml) waits for that Cloudflare build, records the deploy in the matching GitHub environment and smoke-tests the live URL.

[`wrangler.jsonc`](../wrangler.jsonc) defines both Workers and their custom domains. On deploy, wrangler attaches the domains and creates their DNS records in the `teamsudda.lk` zone. `/about` serves `about.html`, and any URL without a file gets `404.html` with a 404 status. [`public/_headers`](../public/_headers) sets the security headers and long-term caching for hashed assets, and [`public/_redirects`](../public/_redirects) holds permanent redirects.

## First-time setup (production)

1. **Clear old DNS records.** In the Cloudflare dashboard, open the `teamsudda.lk` DNS tab and delete any existing `A`, `AAAA` or `CNAME` records for `teamsudda.lk` and `www`. Wrangler can't attach a custom domain while a conflicting record exists.
2. **Connect the repository.** Go to Workers & Pages → Create → Import a repository, then choose `saadmaz/Team-Sudda-Website`.

   | Setting                      | Value                          |
   | ---------------------------- | ------------------------------ |
   | Project (Worker) name        | `team-sudda-website`           |
   | Production branch            | `main`                         |
   | Build command                | `npm run build`                |
   | Deploy command               | `npx wrangler deploy`          |
   | Non-production branch deploy | `npx wrangler versions upload` |
   | Root directory               | `/`                            |
   | Build variable               | `NODE_VERSION` = `22`          |

   The Worker name must match `name` in `wrangler.jsonc`.

3. **Build variables.** Under the Worker's Settings → Build → Variables and secrets, add the values that get compiled into the site. Then trigger a new build.
   - `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`: the forms show a WhatsApp fallback until these are set
   - `VITE_GA_MEASUREMENT_ID`: optional
4. **Check the domains.** After the first successful build, Settings → Domains & Routes should list `teamsudda.lk` and `www.teamsudda.lk`. If the build log says it couldn't add them, add both there as **Custom domains** by hand.
5. **Redirect apex to www** (recommended, because canonical URLs use `www`). Go to Rules → Redirect Rules → Create rule → template **Redirect from root to WWW**. Use a 301 status and keep the query string.
6. **EmailJS.** Add `teamsudda.lk` and `www.teamsudda.lk` to the allowed domains in the EmailJS dashboard.

The GitHub `production` environment variable `APP_URL` is `https://www.teamsudda.lk`; the Deploy workflow smoke-tests it.

### Setting up development

1. Import the same repository again as a second Worker named `team-sudda-website-dev`. Use `develop` as the production branch and the deploy command `npx wrangler deploy --env development`. Add the same build variables.
2. Set the GitHub repository variable `DEVELOPMENT_ENABLED` to `true`, so the Deploy workflow checks `dev.teamsudda.lk`.
3. Replace the grey development badge in the README Deployment table with the live status badge:
   `https://img.shields.io/github/deployments/saadmaz/Team-Sudda/development?style=flat-square&label=development&labelColor=111827`.

### Promotion

1. Feature branches merge into `develop` and deploy to development.
2. When development is verified, open a release pull request from `develop` into `main` (see [runbooks/release.md](runbooks/release.md)).
3. Merging it deploys to production.

### Previewing and deploying by hand

```sh
npm run build
npx wrangler@4 dev                        # serve dist/ locally with Cloudflare's routing
npx wrangler@4 login
npx wrangler@4 deploy                     # production
npx wrangler@4 deploy --env development   # development
```

## Post-deployment checks

The Deploy workflow checks the homepage, a service page, the sitemap and the 404 status automatically. After a release, also:

1. Open https://www.teamsudda.lk, then refresh on an inner page such as `/services/office-cleaning`.
2. Submit a test booking and confirm it arrives at hello@teamsudda.lk (once EmailJS is configured).
3. Check the response headers include `Strict-Transport-Security`.
