import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AffiliateButtonProps {
  href: string;
  label?: string;
  variant?: "primary" | "secondary" | "green";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function AffiliateButton({
  href,
  label = "Abrir Cuenta",
  variant = "primary",
  size = "md",
  className,
}: AffiliateButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variantClasses = {
    primary: "text-white hover:shadow-lg hover:shadow-blue-500/20",
    secondary:
      "border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10",
    green: "text-white hover:shadow-lg hover:shadow-emerald-500/20",
  };

  const variantStyles = {
    primary: { background: "var(--gradient-cta)" },
    secondary: {},
    green: { background: "var(--gradient-green)" },
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      style={variantStyles[variant]}
    >
      {label}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}
