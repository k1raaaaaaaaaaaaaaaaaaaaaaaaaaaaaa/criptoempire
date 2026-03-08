import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "amber" | "red" | "purple";
  className?: string;
}

const variantClasses = {
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  red: "bg-red-500/15 text-red-400 border-red-500/30",
  purple: "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

export default function Badge({
  children,
  variant = "blue",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
