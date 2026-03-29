#!/bin/bash

set -e

# ─── NPM Auth Token ───────────────────────────────────────────────────────────
# Set your npm Automation token here to bypass 2FA on publish.
# Get one at: https://www.npmjs.com/settings/<your-username>/tokens
# Token type: "Automation" (Classic) or Granular with bypass 2FA enabled.
NPM_TOKEN=""
# ──────────────────────────────────────────────────────────────────────────────

if [[ -n "$NPM_TOKEN" ]]; then
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
  trap 'rm -f .npmrc' EXIT
fi

echo ""
echo "🍫 chai-choco-tailwind — publish script"
echo "========================================"

# Bump version
echo ""
echo "Version bump type? (patch / minor / major) [default: patch]"
read -r BUMP_TYPE
BUMP_TYPE=${BUMP_TYPE:-patch}

if [[ "$BUMP_TYPE" != "patch" && "$BUMP_TYPE" != "minor" && "$BUMP_TYPE" != "major" ]]; then
  echo "❌ Invalid type '$BUMP_TYPE'. Use patch, minor, or major."
  exit 1
fi

npm version "$BUMP_TYPE" --no-git-tag-version
NEW_VERSION=$(node -p "require('./package.json').version")
echo "✔ Version bumped to v$NEW_VERSION"

# Build
echo ""
echo "Building dist..."
npm run build
echo "✔ Build complete"

# Dry run
echo ""
echo "Files that will be published:"
npm pack --dry-run 2>&1 | grep -E "^npm notice (=== |[0-9])" || true

# Confirm
echo ""
echo "Publish v$NEW_VERSION to npmjs? (y/N)"
read -r CONFIRM
if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
  echo "Aborted. Version bump was NOT committed."
  exit 0
fi

# Publish
npm publish --access public
echo ""F
echo "✅ Published chai-choco-tailwind@$NEW_VERSION to npm!"
echo "   https://www.npmjs.com/package/chai-choco-tailwind"
