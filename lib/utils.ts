import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPercent(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

export function formatFeeColor(fee: number): string {
  if (fee <= 0.0005) return "text-emerald-400";
  if (fee <= 0.001) return "text-amber-400";
  return "text-red-400";
}
