# Contributing

Thanks for helping build Team Sudda Website. This guide covers how changes move from an idea to production.

This is a private, proprietary repository: see [LICENSE](LICENSE). Access is limited to Team Sudda team members and invited collaborators.

## Workflow

1. **Open or pick an issue.** Use the bug report or change request template so the problem and expected result are clear.
2. **Branch from `develop`.** Use a short, descriptive name with a type prefix:

   | Prefix     | Use for                              |
   | ---------- | ------------------------------------ |
   | `feat/`    | New features, screens or pages       |
   | `fix/`     | Bug fixes                            |
   | `content/` | Copy, imagery or articles            |
   | `style/`   | Visual or design changes             |
   | `chore/`   | Dependencies, tooling, configuration |
   | `docs/`    | Documentation                        |

3. **Make the change** and run the checks locally:

   ```sh
   npm run lint && npm run typecheck && npm test && npm run build
   ```

4. **Open a pull request** into `develop` and complete the checklist in the template. CI must pass before merging.
5. **Squash and merge** once reviewed. The change deploys to the development environment. Delete the branch afterwards.
6. **Release** by opening a pull request from `develop` into `main` (see [docs/runbooks/release.md](docs/runbooks/release.md)). Merging it deploys to production.

## Branches and environments

| Branch                 | Environment | Purpose                                                |
| ---------------------- | ----------- | ------------------------------------------------------ |
| `develop`              | Development | Integration branch; every merge deploys to development |
| `main`                 | Production  | Released code only; every merge deploys to production  |
| `feat/*`, `fix/*`, ... | None        | Short-lived work branches, merged into `develop`       |

Never push directly to `develop` or `main`, and never force-push to either.

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org):

```
<type>(<optional scope>): <summary in the imperative mood>
```

| Type       | Meaning                                                 |
| ---------- | ------------------------------------------------------- |
| `feat`     | A new feature                                           |
| `fix`      | A bug fix                                               |
| `perf`     | A performance improvement                               |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `style`    | Visual or formatting change with no behaviour change    |
| `content`  | Copy, imagery or article content                        |
| `docs`     | Documentation only                                      |
| `test`     | Adding or updating tests                                |
| `ci`       | Continuous integration or deployment workflows          |
| `chore`    | Build, tooling or dependency changes                    |

## Code standards

- **TypeScript.** Prefer precise types; no `any` without a written reason.
- **Formatting.** Prettier and ESLint are the source of truth. Format before committing.
- **Accessibility.** Every image needs meaningful `alt` text (or `alt=""` if decorative). Interactive elements must be keyboard-reachable with a visible focus state. Keep text contrast at WCAG AA or better.
- **Secrets.** Never commit API keys, tokens, passwords or service-account files. Use the hosting provider's secret store or GitHub Actions secrets, and keep `.env.example` up to date with variable names only.
- **Dependencies.** Add a dependency only when it earns its weight, and keep the lockfile committed.

## Documentation and decisions

Every repository uses the same `docs/` layout, indexed in [docs/README.md](docs/README.md):

| Path                    | Holds                                               |
| ----------------------- | --------------------------------------------------- |
| `docs/ARCHITECTURE.md`  | How the system is built and how data flows          |
| `docs/CONFIGURATION.md` | Environment variables and settings                  |
| `docs/DEPLOYMENT.md`    | Hosting, the delivery pipeline and first-time setup |
| `docs/adr/`             | Architecture decision records                       |
| `docs/runbooks/`        | Step-by-step operational procedures                 |

Update the relevant document in the same pull request as the change. Record any significant technical decision as a new ADR (see [docs/adr/README.md](docs/adr/README.md)).

## Releases

Releases follow [Semantic Versioning](https://semver.org):

- **Major:** A redesign or a breaking change to data, APIs or integrations.
- **Minor:** New features, screens or pages.
- **Patch:** Fixes, copy and small visual changes.

Follow [docs/runbooks/release.md](docs/runbooks/release.md) to cut a release.

## Questions

Contact [hello@teamsudda.lk](mailto:hello@teamsudda.lk).
