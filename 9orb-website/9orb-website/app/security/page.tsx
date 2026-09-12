import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrincipleCard } from "@/components/ui/PrincipleCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SovereignBoundaryDiagram } from "@/components/diagrams/SovereignBoundaryDiagram";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Security — 9orb",
  description:
    "9orb's security architecture: non-custodial design, the client/server trust boundary, encryption, transaction authorization, and responsible disclosure.",
  path: "/security",
});

const ARCHITECTURE_PRINCIPLES = [
  { title: "Non-custodial", description: "9orb never holds private keys, seed material, or the ability to move customer assets." },
  { title: "Client-side secrets", description: "Sensitive recovery material is generated and handled on the user's device, not on 9orb's servers." },
  { title: "Signed authorization", description: "Every on-chain action requires the user's own wallet signature. 9orb cannot originate transactions on a user's behalf." },
  { title: "No override path", description: "There is no internal mechanism for 9orb staff to bypass a user's recovery policy or access their keys." },
];

const AUTH_SECURITY = [
  { title: "Passkeys", description: "Account authentication supports passkeys, reducing reliance on reusable passwords." },
  { title: "Encryption in transit and at rest", description: "Data 9orb does store — account metadata, monitoring configuration, readiness state — is encrypted in transit and at rest." },
  { title: "Least-privilege wallet access", description: "Wallet connections request read access for monitoring; signing authority is never requested for 9orb's own use." },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Architecture, not assurances."
        description="This page describes how 9orb Protect is actually built: what stays on your device, what 9orb's systems can see, and how transactions are authorized."
      />

      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="Trust boundary"
            title="What 9orb's systems can and cannot see."
            align="center"
          />
          <div className="mt-14">
            <SovereignBoundaryDiagram />
          </div>
        </Container>
      </section>

      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <SectionHeader eyebrow="Architecture" title="Non-custodial by design." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {ARCHITECTURE_PRINCIPLES.map((p, i) => (
              <PrincipleCard key={p.title} index={i + 1} title={p.title} description={p.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader eyebrow="Authentication & encryption" title="Account and data security." />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {AUTH_SECURITY.map((a) => (
              <div key={a.title} className="rounded-lg border border-base-800 bg-base-900/30 p-6">
                <h3 className="text-sm font-medium text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <SectionHeader
            eyebrow="Recovery architecture"
            title="Recovery that doesn't depend on 9orb staying operational."
            description="The Sovereign Recovery Kit is designed so that a 9orb outage, compromise, or shutdown does not destroy a user's ability to recover their assets. Recovery material is generated client-side and structured to remain usable independently."
          />
        </Container>
      </section>

      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="Transaction authorization"
            title="9orb never originates a transaction."
            description="When 9orb Protect proposes a remediation for a detected threat, it prepares an unsigned transaction for review. Signing — and therefore execution — always happens in the user's own wallet."
          />
        </Container>
      </section>

      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <SectionHeader
            eyebrow="Threat monitoring"
            title="High-confidence detection, explicitly scoped."
            description="9orb Protect monitors for known-pattern threats — malicious contracts and addresses, dangerous approvals, and dangerous delegate or authority grants — tuned per chain. It is not a general-purpose fraud guarantee, and no monitoring system can promise detection of every attack."
          />
        </Container>
      </section>

      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader eyebrow="Program status" title="Where we are today." />
          <div className="mt-10 max-w-2xl space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-base-800 bg-base-900/30 px-5 py-4">
              <span className="text-sm text-ink-200">Independent security audit</span>
              <Badge>Planned, not yet completed</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-base-800 bg-base-900/30 px-5 py-4">
              <span className="text-sm text-ink-200">Third-party penetration testing</span>
              <Badge>Planned, not yet completed</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-base-800 bg-base-900/30 px-5 py-4">
              <span className="text-sm text-ink-200">Compliance certifications (e.g. SOC 2)</span>
              <Badge>Not yet pursued</Badge>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-ink-500">
            9orb does not currently claim completed audits or certifications. This section will be
            updated as work is completed and evidence is available.
          </p>
        </Container>
      </section>

      <section className="bg-base-950 py-20">
        <Container className="flex flex-col items-center text-center">
          <SectionHeader
            eyebrow="Responsible disclosure"
            title="Found a security issue?"
            description="We take security reports seriously. A full disclosure policy — including scope and response-time commitments — is being finalized. In the meantime, please reach out directly."
            align="center"
          />
          <div className="mt-7">
            <Button href={`mailto:${siteConfig.securityContactEmail}`} external>
              {siteConfig.securityContactEmail}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
