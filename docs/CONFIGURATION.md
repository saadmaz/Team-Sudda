# Configuration

<!-- nav -->

<sub><a href="../README.md">Project README</a> · <a href="README.md">Documentation index</a></sub>

> Environment variables and settings for teamsudda.lk. Part of the [project documentation](README.md).

The booking and contact forms send email through [EmailJS](https://www.emailjs.com). Copy `.env.example` to `.env` and set:

| Variable                   | Purpose                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service that delivers the message                                                               |
| `VITE_EMAILJS_TEMPLATE_ID` | Template using `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, `{{date}}`, `{{message}}` |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key                                                                                      |
| `VITE_GA_MEASUREMENT_ID`   | Google Analytics 4 measurement ID. Leave empty to disable analytics                                     |

These values are public by design (they are compiled into the browser bundle). Restrict the EmailJS account to the `teamsudda.lk` domain in the EmailJS dashboard. If they are missing, the forms show an error asking the visitor to get in touch on WhatsApp instead.

## Configuration files

| File                 | Controls                                       |
| -------------------- | ---------------------------------------------- |
| `vercel.json`        | SPA fallback, security headers and caching     |
| `vite.config.ts`     | Dev server and build configuration             |
| `tailwind.config.ts` | Design tokens and Tailwind plugins             |
| `index.html`         | Default title, description and social metadata |
