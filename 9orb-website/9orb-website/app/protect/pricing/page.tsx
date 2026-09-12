import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PricingCard } from "@/components/ui/PricingCard";
import { FAQItem } from "@/components/ui/FAQItem";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Disclosure } from "@/components/ui/Disclosure";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Pricing — 9orb Protect",
  description:
    "9orb Protect plans: Personal, Protect+, and Enterprise. A 14-day trial is included; there is no permanent free tier.",
  path: "/protect/pricing",
});

const FAQS = [
  {
    q: "Is there a free plan?",
    a: "No. 9orb Protect includes a 14-day trial on paid plans rather than a permanent free tier.",
  },
  {
    q: "What happens after the trial?",
    a: "You'll be asked to choose a plan to continue. You can cancel during the trial without being charged.",
  },
  {
    q: "What's the difference between Personal and Protect+?",
    a: "Protect+ is built for users managing more wallets and wanting more advanced recovery and security capabilities. Full plan limits are being finalized and will be published before general availability.",
  },
  {
    q: "Is a one-time readiness check available?",
    a: "A standalone, one-time Readiness Check may be offered in the future as a lightweight way to evaluate your recovery posture before subscribing. It is not yet available.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward plans for a security product."
        description="Every plan includes a 14-day trial. There is no permanent free tier — 9orb Protect is built and supported as paid software."
      />

      <section className="border-b border-base-800 py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <PricingCard
              name="Personal"
              price="$12"
              cadence="/ month"
              description="For individual self-custody users protecting a personal set of wallets."
              features={[
                "Recovery readiness scoring",
                "Wallet threat monitoring",
                "Backup verification",
                "Sovereign Recovery Kit",
              ]}
              cta="Start 14-day trial"
              ctaHref={siteConfig.launchUrl}
              external
            />
            <PricingCard
              name="Protect+"
              price="$29"
              cadence="/ month"
              description="For advanced users with more wallets and deeper recovery and security capability needs."
              features={[
                "Everything in Personal",
                "Support for more connected wallets",
                "Expanded recovery and guardian capabilities",
                "Priority monitoring coverage",
              ]}
              cta="Start 14-day trial"
              ctaHref={siteConfig.launchUrl}
              external
              highlighted
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="For organizations and treasury or security teams with multi-party requirements."
              features={[
                "Organization-wide recovery policy",
                "Treasury and multi-signer workflows",
                "Dedicated onboarding",
                "Custom contract terms",
              ]}
              cta="Contact sales"
              ctaHref={`mailto:${siteConfig.generalContactEmail}`}
              external
            />
          </div>
          <p className="mt-8 text-center text-xs text-ink-500">
            Detailed plan limits are being finalized ahead of general availability and will be
            published here. Categories above reflect current plan design, not final limits.
          </p>
        </Container>
      </section>

      <section className="border-b border-base-800 bg-base-900/20 py-20">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Pricing questions." />
          <div className="mx-auto mt-10 max-w-2xl">
            {FAQS.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Disclosure>
            Pricing is subject to change. 9orb Protect is a security and recovery-readiness
            product; it does not provide custody, investment, or brokerage services.
          </Disclosure>
        </Container>
      </section>
    </>
  );
}
