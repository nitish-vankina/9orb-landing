import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 text-[18px] font-medium tracking-tight text-white ${className}`}
      aria-label="9orb home"
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-white font-mono text-[11px] font-semibold text-base-950"
        aria-hidden="true"
      >
        9
      </span>
      <span>9orb</span>
    </Link>
  );
}
