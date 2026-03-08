interface ScoreBarProps {
  label: string;
  score: number;
  maxScore?: number;
}

export default function ScoreBar({ label, score, maxScore = 10 }: ScoreBarProps) {
  const percentage = (score / maxScore) * 100;

  const getColor = () => {
    if (score >= 8) return "bg-emerald-500";
    if (score >= 6) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-[var(--text-secondary)] w-28 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-2 rounded-full bg-[var(--bg-primary)] overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${getColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-[var(--text-primary)] w-8 text-right">
        {score}
      </span>
    </div>
  );
}
