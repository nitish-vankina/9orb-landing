import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Disclosure } from "@/components/ui/Disclosure";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy — 9orb",
  description: "How 9orb collects, uses, and protects information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is a placeholder outlining 9orb's intended approach to privacy. It requires legal review before publication as a final policy."
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <Disclosure>
            Draft — not yet final. This placeholder describes 9orb&apos;s general approach and has not
            been reviewed by counsel. Do not rely on it as a complete or binding privacy policy.
          </Disclosure>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-300">
            <div>
              <h2 className="text-lg font-medium text-white">Non-custodial design</h2>
              <p className="mt-2">
                9orb Protect is built not to require custody of private keys or seed material.
                Those secrets are handled on your device and are not something 9orb collects or
                stores.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">Information we may collect</h2>
              <p className="mt-2">
                Account information, wallet metadata needed for monitoring (such as public
                addresses), configuration and readiness state, and standard technical logs. This
                list is illustrative and will be finalized alongside the rest of this policy.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">How information is used</h2>
              <p className="mt-2">
                To operate wallet threat monitoring and recovery-readiness features, to maintain
                account security, and to communicate with you about your account. Final policy
                language will define retention, sharing, and deletion practices in detail.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">Contact</h2>
              <p className="mt-2">
                Privacy questions can be sent to{" "}
                <a href={`mailto:${siteConfig.generalContactEmail}`} className="text-white hover:underline">
                  {siteConfig.generalContactEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
