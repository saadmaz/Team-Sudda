# ADR-0001: Single-page application on Vercel

<!-- nav -->

<sub><a href="../../README.md">Project README</a> · <a href="../README.md">Documentation index</a></sub>

| Status   | Date       |
| -------- | ---------- |
| Accepted | 2026-04-18 |

## Decision

Build the site as a React single-page application with Vite and host it on Vercel, with SPA routing and security headers in `vercel.json`.

## Alternatives considered

Server-side rendering; shared hosting.

## Rationale

A small marketing site with client-side routing is simple to build and preview, and Vercel provides preview URLs for every pull request.
