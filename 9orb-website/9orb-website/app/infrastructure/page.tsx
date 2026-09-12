import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrincipleCard } from "@/components/ui/PrincipleCard";
import { Button } from "@/components/ui/Button";
import { InfrastructurePipelineDiagram } from "@/components/diagrams/InfrastructurePipelineDiagram";
import { InfraTopologyMockup } from "@/components/diagrams/InfraTopologyMockup";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "9orb Infrastructure",
  description:
    "9orb operates blockchain node and data infrastructure across Bitcoin, Ethereum, and Solana to support reliable network access for 9orb's products.",
  path: "/infrastructure",
});

const CHAIN_NOTES = [
  {
    chain: "Bitcoin",
    description:
      "Node infrastructure and address-level intelligence supporting Protect's Bitcoin threat monitoring.",
  },
  {
    chain: "Ethereum",
    description:
      "Node and mempool-adjacent infrastructure supporting contract, approval, and drainer-pattern detection.",
  },
  {
    chain: "Solana",
    description:
      "Node infrastructure supporting program, account, and authority-change monitoring.",
  },
];

const PRINCIPLES = [
  { title: "Built for our own products", description: "Infrastructure exists first to keep 9orb Protect accurate and timely, not as a standalone commercial offering today." },
  { title: "Chain-specific by design", description: "Each network's node and data systems are built around that network's actual behavior, not a generic abstraction layer." },
  { title: "Reliability over reach", description: "We invest in depth on Bitcoin, Ethereum, and Solana rather than shallow support for many networks." },
  { title: "Internal data pipelines", description: "Ingested chain data is normalized and processed internally to support monitoring, readiness, and research systems." },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="9orb Infrastructure"
        title="The systems layer beneath 9orb's products."
        description="9orb operates blockchain node and data infrastructure across Bitcoin, Ethereum, and Solana. This infrastructure supports our own products and network operations — it is not currently offered as a standalone commercial service."
      />

      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="Overview"
            title="Nodes, ingestion, and processing — built to support real-time security monitoring."
            description="Reliable, low-latency access to chain data is a prerequisite for high-confidence threat detection. 9orb Infrastructure exists to make that possible."
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
            <InfrastructurePipelineDiagram />
            <InfraTopologyMockup />
          </div>
        </Container>
      </section>

      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <SectionHeader eyebrow="Per-network" title="Chain-specific infrastructure." />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {CHAIN_NOTES.map((c) => (
              <div key={c.chain} className="rounded-lg border border-base-800 bg-base-900/30 p-6">
                <h3 className="text-sm font-medium text-white">{c.chain}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader eyebrow="Principles" title="How we think about infrastructure." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {PRINCIPLES.map((p, i) => (
              <PrincipleCard key={p.title} index={i + 1} title={p.title} description={p.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-base-950 py-20">
        <Container className="flex flex-col items-center text-center">
          <h2 className="max-w-xl text-balance text-2xl font-semibold text-white sm:text-3xl">
            Infrastructure questions, partnerships, or technical inquiries.
          </h2>
          <div className="mt-7">
            <Button href={`mailto:${siteConfig.generalContactEmail}`} external variant="secondary">
              Contact 9orb
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
