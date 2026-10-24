# Repository guidance

This is the canonical instruction file for this repository. Claude Code loads it through
`CLAUDE.md`.

## Start here

- Inspect branch, upstream divergence, status, and diff before editing.
- Preserve pre-existing changes and keep unrelated work out of the patch.
- Use the repository's existing runtime, package manager, framework, and deployment model.
- Do not refactor an existing project into the preferred new-project stack unless explicitly requested.
- Verify current documentation before changing version-dependent dependencies or hosting behavior.

## Project

This is a static, editorial local-history site for Hofstetten.

It uses Astro, Tailwind CSS, Bun, static output, Docker, and Railway. It has no database, CMS, or client framework.

## Project rules

- Use Bun and preserve `bun.lock`.
- Keep historical claims specific, sourced, and distinguish verified facts from inference.
- Preserve static output, accessibility, responsive images, and reduced-motion behavior.
- Reuse the established editorial design rather than adding generic decorative sections.
- Verify image licensing, acquisition source, and attribution.
- The public `www.hof-stetten.de` hostname points directly to Railway. GET/HEAD
  requests must redirect to the canonical apex before origin authentication,
  without serving protected content. Test this with the origin secret enabled
  and no verification header; the apex origin still requires verification.

## Commands

- `bun run check`: Astro validation
- `bun run test`: tests
- `bun run build`: production build
- `bun run test` builds first, then checks the real server and crawls internal
  pages and referenced assets, including responsive images and CSS fonts.
- `SMOKE_ORIGIN_SECRET=<test secret> bun run test:smoke -- <base URL>` runs
  the same checks against an already running test server. CI exercises the
  production Docker image with an isolated origin secret, including origin
  access protection, security/cache headers, MIME types and 404 responses.

## Verification

`main` requires an up-to-date pull request with `check` (GitHub Actions) and
`GitGuardian Security Checks` passing, including for administrators. No
second-person approval is required. Do not bypass or temporarily disable
protection to ship a change.

Run the relevant checks and exercise the affected workflow, endpoint, or generated artifact.
State clearly when authenticated, database, deployment, or live verification was not possible.

## Maintaining instructions

Update `AGENTS.md` when verified, durable repository behavior changes. Keep it concise and
move detailed explanations into `docs/`. Keep `CLAUDE.md` as the compatibility import
unless Claude-specific guidance is genuinely required.

## Analytics privacy

public/analytics-consent.js gates both Umami scripts behind an explicit choice.
Keep it consistent with the same asset in the other managed websites. Reject
and withdraw must stop requests, including beacon/keepalive sends. The loader
honors DNT/GPC, excludes query-bearing and authenticated routes, and strips
individual event data and titles. Server-side strict masking and replay limits
are owned by web-host-gitops analytics/websites.json. Never rely on recorder
data-mask-level attributes. Keep the site's privacy notice and providers aligned.
