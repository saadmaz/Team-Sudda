# Rollback

<!-- nav -->

<sub><a href="../../README.md">Project README</a> · <a href="../README.md">Documentation index</a></sub>

> Use this when a deploy has broken production. Restore service first, then fix the cause.

## Fastest: roll back to the previous version

1. Open the Cloudflare dashboard → Workers & Pages → `team-sudda-website` → **Deployments**.
2. Find the last good version and choose **Rollback**.

From a terminal: `npx wrangler@4 rollback` (to the previous version) or `npx wrangler@4 rollback <version-id>`.

## Then: make `main` match production

Revert the bad change on `main` so the next deploy does not reintroduce it:

```sh
git revert <bad-commit-sha>
```

Open the revert as a pull request and merge it once CI passes. Cloudflare Workers Builds deploys the reverted `main` automatically.

Afterwards, record what happened and the fix in the pull request that resolves the root cause.
