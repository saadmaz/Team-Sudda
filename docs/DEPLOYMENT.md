# Deployment

> How teamsudda.lk reaches production. Part of the [project documentation](README.md).

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
