import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-bright shadow-[0_0_0_1px_rgba(76,123,255,0.4)]",
  secondary:
    "bg-base-800 text-ink-100 border border-base-600 hover:border-ink-400 hover:bg-base-700",
  ghost: "text-ink-200 hover:text-white hover:bg-base-800/60",
};

const sizeClasses: Record<Size, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-[15px]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external,
  className = "",
  onClick,
  type,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 whitespace-nowrap ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
