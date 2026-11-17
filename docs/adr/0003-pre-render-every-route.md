# ADR-0003: Pre-render every route at build time

<!-- nav -->

<sub><a href="../../README.md">Project README</a> · <a href="../README.md">Documentation index</a></sub>

| Status   | Date       |
| -------- | ---------- |
| Accepted | 2026-11-17 |

Builds on [ADR-0001](0001-single-page-application-on-vercel.md).

## Decision

After the client build, render every public route to static HTML with React's server renderer, write one file per route with its own title, description, canonical URL, Open Graph tags and structured data, and hydrate it in the browser. Generate `sitemap.xml` from the same route list.

## Alternatives considered

Keep the client-only single-page app; migrate to Next.js or Astro; inject only per-route metadata without rendering content.

## Rationale

The site grew from one page to more than 50 service, industry, area and guide pages, which only help search if crawlers and link previews can see their content and metadata. Pre-rendering gets that without a server or a framework migration. The existing React components, router and Vercel hosting stay as they are, and the build fails if a page is missing metadata or a heading.
