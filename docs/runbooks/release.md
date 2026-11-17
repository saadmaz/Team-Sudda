# Release

Releases follow [Semantic Versioning](https://semver.org) and are recorded in [CHANGELOG.md](../../CHANGELOG.md).

## Steps

1. Confirm `main` is green in CI and that production is healthy.
2. Create a branch: `git switch -c release/vX.Y.Z`.
3. In `CHANGELOG.md`, move the `Unreleased` entries under a new `## [X.Y.Z] - YYYY-MM-DD` heading and update the comparison links at the bottom.
4. Set `version` to `X.Y.Z` in `package.json`, and update the version badge at the top of `README.md`.
5. Run the checks locally (see [CONTRIBUTING.md](../../CONTRIBUTING.md)).
6. Open a pull request titled `chore(release): vX.Y.Z`. Merging it deploys to production.
7. Tag the merge commit on `main` and push the tag:

   ```sh
   git switch main && git pull
   git tag -a vX.Y.Z -m "vX.Y.Z"
   git push origin vX.Y.Z
   ```

8. Publish the GitHub release with the changelog entry as the notes:

   ```sh
   gh release create vX.Y.Z --title "vX.Y.Z" --notes "<paste the changelog section>"
   ```

9. Check production against the post-deployment checks in [DEPLOYMENT.md](../DEPLOYMENT.md).
