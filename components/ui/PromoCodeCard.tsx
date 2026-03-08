"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface PromoCodeCardProps {
  code: string;
  description?: string;
}

export default function PromoCodeCard({ code, description }: PromoCodeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement("input");
      input.value = code;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-xl border border-dashed border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/5 p-4">
      {description && (
        <p className="text-sm text-[var(--text-secondary)] mb-2">{description}</p>
      )}
      <div className="flex items-center gap-3">
        <code className="flex-1 rounded-lg bg-[var(--bg-primary)] px-4 py-2.5 text-sm font-mono font-bold text-[var(--accent-primary)] tracking-wider">
          {code}
        </code>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg bg-[var(--accent-primary)]/10 px-3 py-2.5 text-sm font-medium text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/20 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copiado
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copiar
            </>
          )}
        </button>
      </div>
    </div>
  );
}
