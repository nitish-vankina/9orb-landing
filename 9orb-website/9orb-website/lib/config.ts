/**
 * Centralized runtime configuration.
 *
 * The marketing site never embeds the authenticated 9orb Protect
 * application — it only links to it. Every "Launch Protect" and
 * "Sign In" action should read from `protectAppUrl` rather than
 * hardcoding a URL, so the target can change per environment without
 * touching component code.
 */

function readAppUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_PROTECT_APP_URL;
  if (fromEnv && fromEnv.length > 0) return fromEnv;
  // Local development fallback only. Production deployments should
  // always set NEXT_PUBLIC_PROTECT_APP_URL explicitly.
  return "http://localhost:3001";
}

function readSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv && fromEnv.length > 0) return fromEnv;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "9orb",
  protectAppUrl: readAppUrl(),
  siteUrl: readSiteUrl(),
  /** Sign-in routes to the same application, at its auth entry point. */
  get signInUrl() {
    return `${this.protectAppUrl.replace(/\/$/, "")}/sign-in`;
  },
  /** Launch routes to the application's default authenticated entry point. */
  get launchUrl() {
    return this.protectAppUrl;
  },
  securityContactEmail: "security@9orb.com",
  generalContactEmail: "hello@9orb.com",
} as const;
