# Rollback

<!-- nav -->

<sub><a href="../../README.md">Project README</a> · <a href="../README.md">Documentation index</a></sub>

> [!WARNING]
> Use this when a deploy has broken production. Restore service first, then fix the cause.

## Fastest: promote the previous deployment

1. Open the Vercel dashboard → the project → **Deployments**.
2. Find the last good production deployment and choose **Instant Rollback**.

From a terminal: `npx vercel rollback <deployment-url>`.

## Then: make `main` match production

Revert the bad change on `main` so the next deploy does not reintroduce it:

```sh
git revert <bad-commit-sha>
```

Open the revert as a pull request and merge it once CI passes. Vercel resumes automatic production deploys after the next merge.

Afterwards, record what happened and the fix in the pull request that resolves the root cause.
