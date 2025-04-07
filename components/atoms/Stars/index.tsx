import React, { useMemo } from "react";
import "remixicon/fonts/remixicon.css";

interface StarsProps {
  score: number;
}

const Stars: React.FC<StarsProps> = ({ score }) => {
  const totalStars = 5;
  const uniqueKey = Date.now();
  const stars = useMemo(() => {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;
    return Array.from({ length: totalStars }, (_, index) => {
      if (index < fullStars) return "ri-star-fill text-yellow-400";
      if (index === fullStars && hasHalfStar)
        return "ri-star-half-fill text-yellow-400";
      return "ri-star-fill text-slate-300";
    });
  }, [score]);

  return (
    <div
      className="flex gap-1"
      aria-label={`Rating: ${score} out of ${totalStars}`}
      data-testid="star-rating"
    >
      {stars.map((starClass, index) => (
        <i key={`star-${index}-${uniqueKey}`} className={starClass} />
      ))}
    </div>
  );
};

export default Stars;
