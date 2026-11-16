# Security Policy

## Supported versions

Only the version currently deployed to production, built from the `main` branch, receives security fixes.

| Version | Supported |
| --- | --- |
| Latest release on `main` | Yes |
| Older releases | No |

## Reporting a vulnerability

Please **do not** open a public issue, pull request or discussion for a security problem.

Report it privately by email to **[hello@teamsudda.lk](mailto:hello@teamsudda.lk)** with the subject line `Security report`, or use GitHub's [private vulnerability reporting](https://github.com/saadmaz/Team-Sudda/security/advisories/new). Include:

- a description of the issue and its potential impact,
- the affected URL, screen, endpoint or file,
- steps to reproduce, or a proof of concept,
- any suggested fix.

### What to expect

| Stage | Target |
| --- | --- |
| Acknowledgement | Within 3 business days |
| Initial assessment | Within 7 business days |
| Fix or mitigation | Based on severity; critical issues are prioritised immediately |

We will keep you informed throughout and let you know when the issue is resolved.

## Scope

In scope:

- teamsudda.lk and its subdomains,
- the website and its forms,
- the source code in this repository.

Out of scope:

- denial-of-service and volumetric attacks,
- social engineering of Team Sudda staff or customers,
- findings from automated scanners without a demonstrated impact,
- third-party services (for example Cloudflare, Firebase or the hosting provider). Report those to the provider directly.

## Handling secrets

Credentials, API keys and service-account files are never committed to this repository. They live in the hosting provider's secret store or in GitHub Actions secrets. If you find a secret in the code or its history, report it as a vulnerability.

## Safe harbour

We will not pursue action against anyone who reports a vulnerability in good faith, avoids privacy violations and service disruption, does not access or modify other people's data, and gives us reasonable time to fix the issue before disclosing it.
