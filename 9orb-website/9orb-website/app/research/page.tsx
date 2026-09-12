import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Disclosure } from "@/components/ui/Disclosure";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Research — 9orb",
  description:
    "9orb conducts proprietary digital-asset and quantitative research, and may deploy its own corporate capital. This activity is not offered as an investment product or service.",
  path: "/research",
});

const AREAS = [
  {
    title: "Market structure",
    description:
      "How digital-asset markets are organized, where liquidity actually sits, and how that structure changes over time.",
  },
  {
    title: "Blockchain data",
    description:
      "Direct research on-chain — transaction patterns, contract behavior, and network-level activity across our supported chains.",
  },
  {
    title: "Quantitative systems",
    description:
      "Internal tooling and models used to analyze digital-asset markets and inform 9orb's own research questions.",
  },
  {
    title: "Network research",
    description:
      "Studying the operational and security characteristics of the networks 9orb's products and infrastructure depend on.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research through participation."
        description="9orb conducts proprietary research into digital-asset markets and networks, and may deploy its own corporate capital as part of that work. This page describes 9orb's internal research activity — it is not an offer or solicitation of any kind."
      />

      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="Philosophy"
            title="We study the systems our products depend on."
            description="Our research systems help us understand the same networks, market structure, and risks that 9orb Protect and 9orb Infrastructure operate within. Research findings inform product and infrastructure decisions; they are not published as trading advice."
          />
        </Container>
      </section>

      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <SectionHeader eyebrow="Areas of work" title="What our research covers." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((a) => (
              <div key={a.title} className="rounded-lg border border-base-800 bg-base-900/30 p-6">
                <h3 className="text-sm font-medium text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="Principal capital"
            title="Proprietary research and 9orb's own capital."
            description="9orb conducts proprietary digital-asset research and, from time to time, deploys its own corporate capital based on that research. This is internal, corporate activity — separate from 9orb Protect and not a customer-facing product."
          />
        </Container>
      </section>

      <section className="border-b border-base-800 bg-base-900/20 py-20">
        <Container>
          <SectionHeader eyebrow="Publications" title="Selected research." />
          <div className="mt-10 rounded-lg border border-dashed border-base-700 bg-base-900/20 p-10 text-center">
            <p className="text-sm text-ink-400">
              Research notes and publications will appear here as they become available.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Disclosure>
            9orb may conduct proprietary trading and principal investment activities using its own
            capital. 9orb does not offer participation in these activities through this website,
            and nothing on this page is an offer, solicitation, or investment advice. 9orb is not
            a broker, exchange, asset manager, or investment adviser.
          </Disclosure>
        </Container>
      </section>
    </>
  );
}
