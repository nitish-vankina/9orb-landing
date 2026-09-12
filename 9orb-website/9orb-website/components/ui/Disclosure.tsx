import { ReactNode } from "react";

/**
 * Legal / positioning disclosure block. Used to make explicit, unavoidable
 * statements — e.g. that proprietary capital activity is not offered as
 * an investment product.
 */
export function Disclosure({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-base-700 bg-base-900/60 px-5 py-4 text-sm leading-relaxed text-ink-300">
      {children}
    </div>
  );
}
