import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

const defaultDescription =
  "9orb develops security software, blockchain infrastructure, and proprietary digital-asset research. 9orb Protect is our non-custodial security and recovery-readiness platform for Bitcoin, Ethereum, and Solana.";

export function buildMetadata(overrides: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const { title, description = defaultDescription, path = "" } = overrides;
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "9orb",
      type: "website",
      images: [
        {
          url: `${siteConfig.siteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "9orb",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.siteUrl}/og.png`],
    },
  };
}
