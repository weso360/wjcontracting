import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-amber text-navy hover:bg-gold",
    secondary: "border border-white/40 bg-white/10 text-white hover:bg-white hover:text-navy",
    dark: "bg-navy text-white hover:bg-charcoal"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  );
}
