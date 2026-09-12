import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { NetworkBadges } from "@/components/ui/NetworkBadges";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQItem } from "@/components/ui/FAQItem";
import { ReadinessMockup } from "@/components/diagrams/ReadinessMockup";
import { ThreatFindingMockup } from "@/components/diagrams/ThreatFindingMockup";
import { WalletListMockup } from "@/components/diagrams/WalletListMockup";
import { RecoveryPathsMockup } from "@/components/diagrams/RecoveryPathsMockup";
import { SovereignBoundaryDiagram } from "@/components/diagrams/SovereignBoundaryDiagram";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "9orb Protect — Security for self-custody",
  description:
    "9orb Protect is a non-custodial security and recovery-readiness platform for Bitcoin, Ethereum, and Solana. Monitor wallet threats, verify recovery readiness, and fix high-confidence risks without giving up control of your assets.",
  path: "/protect",
});

const SUB_NAV = [
  { href: "#overview", label: "Overview" },
  { href: "#monitoring", label: "Monitoring" },
  { href: "#recovery", label: "Recovery" },
  { href: "#security", label: "Security" },
  { href: "/protect/pricing", label: "Pricing" },
];

const HOW_IT_WORKS = [
  { title: "Connect read access", description: "Link the wallets you already use. 9orb Protect only ever needs visibility, never signing authority." },
  { title: "Establish a baseline", description: "We evaluate your current backup, guardian, and drill state to produce an initial readiness score." },
  { title: "Monitor continuously", description: "Threat monitoring and readiness scoring run in the background across your connected wallets." },
  { title: "Act on your terms", description: "When something needs attention, you review the finding and sign any remediation yourself." },
];

const MONITORING_CHAINS = [
  { chain: "Ethereum", points: ["Malicious contract interactions", "Dangerous or unlimited token approvals", "Known drainer infrastructure"] },
  { chain: "Solana", points: ["Malicious programs and accounts", "Dangerous delegate or authority grants", "Suspicious account ownership changes"] },
  { chain: "Bitcoin", points: ["High-confidence malicious-address intelligence", "Anomalous activity on monitored addresses"] },
];

const WALLET_SUPPORT = [
  "Hardware wallets (e.g. Ledger, Trezor-class devices)",
  "Self-custody software wallets",
  "Multisig and smart-contract wallets (chain-dependent)",
];

const FAQS = [
  { q: "Does 9orb ever hold my private keys or seed phrase?", a: "No. Private keys and seed material never leave your device. 9orb Protect is built to function entirely without custody of your secrets." },
  { q: "Can 9orb move my assets?", a: "No. 9orb Protect can propose remediation for a detected threat, but every on-chain action requires your own wallet signature. Nothing moves without your authorization." },
  { q: "What happens to my recovery plan if 9orb shuts down?", a: "The Sovereign Recovery Kit is designed to remain useful independent of 9orb's continued operation — it is not a dependency you're locked into." },
  { q: "Do I have to use guardians?", a: "No. Guardians are optional. Choosing not to use them does not penalize your recovery readiness score." },
  { q: "Which chains are supported?", a: "Bitcoin, Ethereum, and Solana today. We favor depth on a small set of networks over broad, shallow multi-chain coverage." },
  { q: "Will 9orb detect every possible threat?", a: "No monitoring system can promise complete coverage. 9orb Protect is tuned for high-confidence findings, prioritizing useful signal over alert volume." },
];

export default function ProtectPage() {
  return (
    <>
      <PageHero
        eyebrow="9orb Protect"
        title="Security for self-custody."
        description="Monitor wallet threats, continuously verify your recovery readiness, and fix high-confidence risks — without giving up control of your assets."
        actions={
          <>
            <Button href={siteConfig.launchUrl} external size="lg">Launch Protect</Button>
            <Button href="#overview" variant="secondary" size="lg">How It Works</Button>
          </>
        }
      />

      {/* Sub navigation */}
      <div className="sticky top-16 z-40 border-b border-base-800 bg-base-950/90 backdrop-blur">
        <Container>
          <nav className="flex gap-1 overflow-x-auto py-2" aria-label="Protect sections">
            {SUB_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-md px-3 py-2 text-sm text-ink-300 transition-colors hover:bg-base-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      {/* Overview / How it works */}
      <section id="overview" className="scroll-mt-32 border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="How it works"
            title="A security layer on top of the wallets you already use."
            description="9orb Protect connects to your existing wallets rather than replacing them. It never requests signing authority."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.title} className="rounded-lg border border-base-800 bg-base-900/30 p-5">
                <span className="font-mono text-xs text-ink-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-sm font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <WalletListMockup />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-medium text-white">Supported wallets</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
                {WALLET_SUPPORT.map((w) => (
                  <li key={w} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                    {w}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <NetworkBadges />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Monitoring */}
      <section id="monitoring" className="scroll-mt-32 border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Monitoring"
                title="High-confidence threat detection, tuned per network."
                description="Each supported chain has distinct attack patterns. 9orb Protect's detection logic is built per network rather than applied as one generic ruleset."
              />
              <div className="mt-8 space-y-6">
                {MONITORING_CHAINS.map((c) => (
                  <div key={c.chain}>
                    <h3 className="text-sm font-medium text-white">{c.chain}</h3>
                    <ul className="mt-2 space-y-1.5">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-ink-400">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-ink-500">
                Detection is scoped to high-confidence findings. No monitoring system can promise
                detection of every possible attack.
              </p>
            </div>
            <ThreatFindingMockup />
          </div>
        </Container>
      </section>

      {/* Remediation */}
      <section className="border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="Remediation"
            title="Safe, user-signed fixes — never automatic."
            description="When 9orb Protect identifies a high-confidence risk, it explains the finding and proposes a fix. You review it and sign it yourself; 9orb never acts on your behalf."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Detect" description="A high-confidence finding is identified against a connected wallet." />
            <FeatureCard title="Explain" description="The finding is described in plain terms — what it is and why it matters." />
            <FeatureCard title="Prepare" description="A safe remediation transaction is prepared for your review." />
            <FeatureCard title="You sign" description="Nothing executes without your wallet's signature. 9orb cannot act for you." />
          </div>
        </Container>
      </section>

      {/* Recovery */}
      <section id="recovery" className="scroll-mt-32 border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Recovery"
                title="Recovery readiness, verified continuously."
                description="A policy-aware score reflecting your backup, guardian, and drill health — not a probability of successful recovery."
              />
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-ink-300">
                <li>
                  <span className="font-medium text-white">Backup verification — </span>
                  confidence-graded from self-attested through structured to cryptographically verified for hardware wallets.
                </li>
                <li>
                  <span className="font-medium text-white">Recovery drills — </span>
                  low-stakes exercises that test whether your recovery path actually works.
                </li>
                <li>
                  <span className="font-medium text-white">Optional guardians — </span>
                  a quorum-based recovery mechanism you can enable — never required, and never penalized if skipped.
                </li>
                <li>
                  <span className="font-medium text-white">Sovereign Recovery Kit — </span>
                  recovery material generated for your setup, designed to remain useful independent of 9orb.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <ReadinessMockup />
              <RecoveryPathsMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* Security model */}
      <section id="security" className="scroll-mt-32 border-b border-base-800 py-24">
        <Container>
          <SectionHeader
            eyebrow="Security model"
            title="Non-custodial by architecture, not by promise."
            description="9orb Protect is built so that a 9orb compromise or shutdown cannot give an attacker control of your assets, and cannot destroy your ability to recover them."
            align="center"
          />
          <div className="mt-14">
            <SovereignBoundaryDiagram />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            <Badge tone="good">No seed custody</Badge>
            <Badge tone="good">No private-key custody</Badge>
            <Badge tone="good">No employee override</Badge>
            <Badge tone="good">No automatic fund movement</Badge>
          </div>
          <div className="mt-10 text-center">
            <Button href="/security" variant="secondary">Read the full security model</Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-base-800 bg-base-900/20 py-24">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Common questions." />
          <div className="mx-auto mt-12 max-w-2xl">
            {FAQS.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-grid bg-base-950 py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Set up recovery readiness before you need it.
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={siteConfig.launchUrl} external size="lg">Launch Protect</Button>
            <Button href="/protect/pricing" variant="secondary" size="lg">View pricing</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
