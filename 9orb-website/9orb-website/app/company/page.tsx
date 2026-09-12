import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrincipleCard } from "@/components/ui/PrincipleCard";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Company — 9orb",
  description:
    "9orb builds security software, blockchain infrastructure, and proprietary digital-asset research systems. Here's what we build and how we think about it.",
  path: "/company",
});

const AREAS = [
  { title: "9orb Protect", description: "Non-custodial security and recovery-readiness software for self-custodied Bitcoin, Ethereum, and Solana wallets." },
  { title: "9orb Infrastructure", description: "Blockchain node and data infrastructure supporting our own products and network operations." },
  { title: "9orb Research", description: "Proprietary digital-asset and quantitative research, informed by our own corporate capital activity." },
];

const OPERATING_PRINCIPLES = [
  { title: "Security-first by default", description: "Every product decision is evaluated against what it means for the user's trust boundary." },
  { title: "Engineering-led", description: "We build toward correctness and clarity — not toward what's fastest to market." },
  { title: "Narrow scope, done well", description: "We support three networks deeply rather than many networks shallowly." },
  { title: "Say what we mean", description: "We describe what our systems actually do, including their limits." },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Building infrastructure for the digital asset economy."
        description="9orb develops security software, blockchain infrastructure, and proprietary digital-asset research. We think of these as one connected discipline — understanding how digital-asset systems actually work, and building software that respects that reality."
      />

      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="Mission"
            title="Self-custody should be usable without being reckless."
            description="Digital-asset self-custody puts real responsibility on the holder — for security and for recovery. 9orb builds the software layer that makes that responsibility manageable, without asking users to give up control to do it."
          />
        </Container>
      </section>

      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <SectionHeader eyebrow="What we build" title="Three connected areas of work." />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
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
          <SectionHeader eyebrow="Operating philosophy" title="How we work." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {OPERATING_PRINCIPLES.map((p, i) => (
              <PrincipleCard key={p.title} index={i + 1} title={p.title} description={p.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <SectionHeader
            eyebrow="Security mindset"
            title="We design assuming we will eventually be a target."
            description="Custody-adjacent systems attract attackers. 9orb's architecture is built around minimizing what an attacker or a compromised 9orb could ever do — not just around preventing compromise in the first place."
          />
        </Container>
      </section>

      <section className="bg-base-950 py-20">
        <Container className="flex flex-col items-center text-center">
          <h2 className="max-w-xl text-balance text-2xl font-semibold text-white sm:text-3xl">
            Questions about 9orb, our products, or working with us.
          </h2>
          <div className="mt-7">
            <Button href="mailto:hello@9orb.com" external variant="secondary">
              Contact 9orb
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
