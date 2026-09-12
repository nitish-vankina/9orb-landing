import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { NetworkBadges } from "@/components/ui/NetworkBadges";
import { PrincipleCard } from "@/components/ui/PrincipleCard";
import { Disclosure } from "@/components/ui/Disclosure";
import { ProtectAppBleed } from "@/components/diagrams/ProtectAppBleed";
import { ReadinessMockup } from "@/components/diagrams/ReadinessMockup";
import { ThreatFindingMockup } from "@/components/diagrams/ThreatFindingMockup";
import { SovereignBoundaryDiagram } from "@/components/diagrams/SovereignBoundaryDiagram";
import { InfrastructurePipelineDiagram } from "@/components/diagrams/InfrastructurePipelineDiagram";
import { siteConfig } from "@/lib/config";

const PLATFORM_AREAS = [
  {
    name: "Protect",
    tag: "Customer-facing product",
    description:
      "Security and recovery infrastructure for self-custodied digital assets. Connects to wallets you already use.",
    cta: "Explore Protect",
    href: "/protect",
    emphasized: true,
  },
  {
    name: "Infrastructure",
    tag: "Internal & network systems",
    description:
      "Blockchain nodes and systems supporting reliable network access and data for 9orb's products.",
    cta: "Infrastructure",
    href: "/infrastructure",
    emphasized: false,
  },
  {
    name: "Research",
    tag: "Principal capital & research",
    description:
      "Proprietary digital-asset and quantitative research conducted using 9orb's own capital.",
    cta: "Research",
    href: "/research",
    emphasized: false,
  },
];

const PROTECT_CAPABILITIES = [
  { title: "Real-time threat monitoring", description: "Continuous, high-confidence monitoring of wallet activity across supported chains." },
  { title: "Recovery readiness", description: "A policy-aware score reflecting backup, guardian, and drill health over time." },
  { title: "Backup verification", description: "Confidence-graded verification, from self-attested to cryptographically checked." },
  { title: "Recovery drills", description: "Exercises your recovery path before you're forced to rely on it under pressure." },
  { title: "Optional guardians", description: "An optional quorum-based recovery mechanism — never required to get started." },
  { title: "Sovereign Recovery Kit", description: "Recovery material designed to remain useful even if 9orb is unavailable." },
];

const SECURITY_PRINCIPLES = [
  { title: "Non-custodial", description: "9orb does not hold customer keys or assets, at any point." },
  { title: "User authorization", description: "Blockchain actions require your wallet's signature — nothing moves without it." },
  { title: "Client-side secrets", description: "Sensitive recovery operations and material stay on your device." },
  { title: "No employee override", description: "Internal staff cannot bypass recovery policies or access your keys." },
  { title: "High-confidence detection", description: "We prioritize useful signal over noisy, low-confidence alert volume." },
  { title: "Independent recovery", description: "Recovery architecture is designed to avoid permanent dependency on 9orb." },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Building infrastructure for the digital asset economy."
        description="9orb works across digital-asset security, blockchain infrastructure, and proprietary research. Our first product, 9orb Protect, is a non-custodial security and recovery-readiness layer for Bitcoin, Ethereum, and Solana."
        meta={
          <Link href="/protect" className="inline-flex items-center gap-1.5 hover:text-white">
            <span className="font-medium text-white">New</span> 9orb Protect
            <span aria-hidden="true">→</span>
          </Link>
        }
        actions={
          <>
            <Button href="/protect" size="lg">Explore 9orb Protect</Button>
            <Button href="/company" variant="secondary" size="lg">Learn about 9orb</Button>
          </>
        }
        visual={<ProtectAppBleed />}
      />

      {/* Platform overview */}
      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="Platform"
            title="Three areas of work, one security posture."
            description="9orb is organized around a customer-facing security product, the infrastructure that supports it, and the research that informs it."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {PLATFORM_AREAS.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className={`group flex flex-col justify-between rounded-xl border p-7 transition-colors duration-150 ${
                  area.emphasized
                    ? "border-ink-100/50 bg-base-800 hover:border-white"
                    : "border-base-800 bg-base-900/30 hover:border-base-600"
                }`}
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-widest text-ink-500">
                    {area.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{area.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{area.description}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  {area.cta}
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Protect feature section */}
      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="9orb Protect"
                title="Self-custody without flying blind."
                description="Keep the wallets you already use. 9orb Protect adds a monitoring and recovery-readiness layer on top — it never takes control of your assets."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {PROTECT_CAPABILITIES.map((c) => (
                  <div key={c.title}>
                    <h3 className="text-sm font-medium text-white">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-400">{c.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-2.5">
                <Badge>Your keys stay with you</Badge>
                <Badge>9orb cannot move your assets</Badge>
                <Badge>No seed custody</Badge>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/protect">Explore Protect</Button>
                <NetworkBadges />
              </div>
            </div>
            <ReadinessMockup />
          </div>
        </Container>
      </section>

      {/* Threat monitoring */}
      <section className="border-b border-base-800 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ThreatFindingMockup />
            <div>
              <SectionHeader
                eyebrow="Threat monitoring"
                title="Detect high-confidence threats without burying you in noise."
                description="9orb Protect focuses on findings worth acting on, tuned per network rather than applied as a generic ruleset."
              />
              <ul className="mt-8 space-y-5 text-sm leading-relaxed text-ink-300">
                <li>
                  <span className="font-medium text-white">Ethereum — </span>
                  malicious contracts, dangerous token approvals, and known drainer infrastructure.
                </li>
                <li>
                  <span className="font-medium text-white">Solana — </span>
                  malicious programs and accounts, and dangerous delegate or authority grants.
                </li>
                <li>
                  <span className="font-medium text-white">Bitcoin — </span>
                  high-confidence malicious-address and activity intelligence.
                </li>
              </ul>
              <p className="mt-6 text-sm text-ink-500">
                No monitoring system detects every attack. 9orb Protect is built to minimize false
                positives and surface what matters, not to promise complete coverage.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Recovery */}
      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <SectionHeader
            eyebrow="Recovery"
            title="Know whether your recovery plan works before you need it."
            description="Most self-custody failures aren't thefts — they're recovery plans that quietly stopped working. 9orb Protect verifies yours continuously."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <PrincipleCard index={1} title="Recovery readiness" description="A continuously updated view of whether your recovery path would actually work today." />
            <PrincipleCard index={2} title="Evidence freshness" description="Verification decays over time — stale evidence is treated differently from recent evidence." />
            <PrincipleCard index={3} title="Recovery drills" description="Low-stakes exercises that test your recovery path without putting assets at risk." />
            <PrincipleCard index={4} title="Sovereign Recovery Kit" description="Policy-aware, guardian-optional recovery material generated for your specific setup." />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-500">
            Readiness is scored, not guaranteed — it reflects verified backup, guardian, and drill
            health, not a probability of successful recovery. Choosing not to use guardians does
            not penalize your score.
          </p>
        </Container>
      </section>

      {/* Sovereign architecture / trust */}
      <section className="border-b border-base-800 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Trust boundary"
                title="Designed so you don't have to trust us with your keys."
                description="Secrets never leave your device. 9orb's systems operate entirely on public data, encrypted metadata, and actions you've already signed."
              />
              <ul className="mt-8 space-y-3 text-sm leading-relaxed text-ink-300">
                <li>· Secrets remain client-side, at all times</li>
                <li>· No seed phrase storage, no private-key custody</li>
                <li>· No employee recovery override, no automatic fund movement</li>
                <li>· You authorize every blockchain transaction yourself</li>
                <li>· The recovery kit is designed to remain useful even if 9orb disappears</li>
              </ul>
              <div className="mt-8">
                <Button href="/security" variant="secondary">Read the security model</Button>
              </div>
            </div>
            <SovereignBoundaryDiagram />
          </div>
        </Container>
      </section>

      {/* Infrastructure */}
      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="9orb Infrastructure"
                title="Serious systems, underneath a serious product."
                description="9orb operates blockchain node and data infrastructure across Bitcoin, Ethereum, and Solana to support reliable network access for our own products."
              />
              <p className="mt-6 text-sm leading-relaxed text-ink-400">
                This infrastructure isn&apos;t sold as a standalone staking or hosting service today —
                it exists to keep 9orb Protect&apos;s monitoring accurate and timely.
              </p>
              <div className="mt-8">
                <Button href="/infrastructure" variant="secondary">Infrastructure</Button>
              </div>
            </div>
            <InfrastructurePipelineDiagram />
          </div>
        </Container>
      </section>

      {/* Research / principal capital */}
      <section className="border-b border-base-800 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-ink-500">Research</span>
            <h2 className="mt-3 text-3xl font-semibold text-white">Research through participation.</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              9orb conducts proprietary research into digital-asset markets and network behavior,
              and may deploy its own corporate capital as part of that work. Our research systems
              help us understand the same networks, market structure, and risks our products
              operate within.
            </p>
            <div className="mt-7">
              <Button href="/research" variant="secondary">Research</Button>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <Disclosure>
              9orb&apos;s proprietary capital activities are conducted for its own account and are
              not offered as an investment product or service.
            </Disclosure>
          </div>
        </Container>
      </section>

      {/* Supported networks */}
      <section className="border-b border-base-800 bg-base-900/20 py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-lg">
              <h2 className="text-2xl font-semibold text-white">Three networks. Deep support.</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                9orb Protect intentionally focuses on Bitcoin, Ethereum, and Solana rather than
                offering superficial coverage across many chains.
              </p>
            </div>
            <NetworkBadges />
          </div>
        </Container>
      </section>

      {/* Security principles */}
      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader eyebrow="Principles" title="How we think about security." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {SECURITY_PRINCIPLES.map((p, i) => (
              <PrincipleCard key={p.title} index={i + 1} title={p.title} description={p.description} />
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-base-950 py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Protect your assets without giving up control.
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={siteConfig.launchUrl} external size="lg">Launch Protect</Button>
            <Button href="/protect" variant="secondary" size="lg">Learn how it works</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
