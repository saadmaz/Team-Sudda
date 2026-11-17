# ADR-0002: Form delivery through EmailJS

| Status   | Date       |
| -------- | ---------- |
| Accepted | 2026-04-21 |

## Decision

Deliver booking and contact forms as email through EmailJS using public, domain-restricted keys.

## Alternatives considered

A custom backend; storing submissions in a database.

## Rationale

No server to run or secure, and enquiries arrive in the team inbox. The keys are public by design and restricted to the site's domain.
