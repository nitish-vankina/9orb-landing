import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Disclosure } from "@/components/ui/Disclosure";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service — 9orb",
  description: "Terms governing use of 9orb's website and 9orb Protect.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="This page is a placeholder outlining the general shape of 9orb's terms. It requires legal review before publication as a final agreement."
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <Disclosure>
            Draft — not yet final. This placeholder has not been reviewed by counsel and does not
            constitute a binding agreement. It intentionally avoids describing 9orb as offering
            custody, brokerage, exchange, or investment advisory services.
          </Disclosure>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-300">
            <div>
              <h2 className="text-lg font-medium text-white">What 9orb Protect is</h2>
              <p className="mt-2">
                9orb Protect is non-custodial security and recovery-readiness software. It does
                not hold customer funds, private keys, or seed material, and cannot move a
                customer&apos;s assets.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">What 9orb Protect is not</h2>
              <p className="mt-2">
                9orb Protect is not a wallet, custodian, exchange, broker, or investment adviser.
                It does not guarantee detection of every security threat, and readiness scoring
                does not represent a probability of successful asset recovery.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">Your responsibility</h2>
              <p className="mt-2">
                You are solely responsible for your private keys, seed material, and for
                authorizing any transaction signed from your own wallet. 9orb cannot recover
                assets on your behalf and cannot reverse a signed transaction.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-white">Contact</h2>
              <p className="mt-2">
                Questions about these terms can be sent to{" "}
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
