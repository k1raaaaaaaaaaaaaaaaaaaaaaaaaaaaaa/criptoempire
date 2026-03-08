"use client";

import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";

export default function WarningBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-amber-500/10 border-b border-amber-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-amber-400">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span>
            Ситуация с доступом бирж в России меняется. Информация актуальна на март 2026.
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-amber-400/60 hover:text-amber-400 transition-colors shrink-0"
          aria-label="Закрыть"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
