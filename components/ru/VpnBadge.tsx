"use client";

import { cn } from "@/lib/utils";

interface VpnBadgeProps {
  status: "yes" | "partial" | "vpn" | "blocked";
  className?: string;
}

const statusConfig = {
  yes: { icon: "🟢", label: "Без VPN", classes: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
  partial: { icon: "🟡", label: "Частично", classes: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  vpn: { icon: "🟡", label: "Нужен VPN", classes: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  blocked: { icon: "🔴", label: "Заблокирован", classes: "bg-red-500/15 text-red-400 border-red-500/30" },
};

export default function VpnBadge({ status, className }: VpnBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        config.classes,
        className
      )}
    >
      <span>{config.icon}</span>
      {config.label}
    </span>
  );
}
