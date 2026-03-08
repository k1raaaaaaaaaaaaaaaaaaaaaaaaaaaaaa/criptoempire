import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className="fill-amber-400 text-amber-400"
          size={size}
        />
      ))}
      {hasHalf && (
        <StarHalf
          className="fill-amber-400 text-amber-400"
          size={size}
        />
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="text-[var(--text-muted)]"
          size={size}
        />
      ))}
      <span className="ml-1.5 text-sm font-semibold text-[var(--text-secondary)]">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
