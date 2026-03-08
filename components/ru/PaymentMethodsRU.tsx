import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface PaymentMethodsRUProps {
  methods: string[];
  className?: string;
}

const allMethods = ["SBP", "Tinkoff", "Сбербанк", "QIWI", "P2P"];

export default function PaymentMethodsRU({ methods, className }: PaymentMethodsRUProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {allMethods.map((method) => {
        const supported = methods.some(
          (m) => m.toLowerCase() === method.toLowerCase() || m.includes(method)
        );
        return (
          <span
            key={method}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium",
              supported
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : "bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border)] opacity-50"
            )}
          >
            {supported ? (
              <Check className="h-3 w-3" />
            ) : (
              <X className="h-3 w-3" />
            )}
            {method}
          </span>
        );
      })}
    </div>
  );
}
