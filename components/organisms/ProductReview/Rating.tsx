import React, { useMemo } from "react";

export interface RatingProps {
  score: number;
  classes?: string;
  total: number;
}

const Rating: React.FC<RatingProps> = ({ score, total, classes }) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;
  const generateStars = useMemo(() => new Array(5).fill(0), []);

  return (
    <div className={`${classes}`}>
      <div
        className="items-center"
        aria-label={`Rating score: ${score.toFixed(1)}`}
      >
        {score.toFixed(1)}
      </div>
      <div className="flex flex-row gap-2">
        {generateStars.map((_, index) => {
          if (index < fullStars) {
            return (
              <i
                key={index}
                className="ri-star-fill text-yellow-400"
                aria-hidden="true"
              />
            );
          } else if (index === fullStars && hasHalfStar) {
            return (
              <i
                key={index}
                className="ri-star-half-fill text-yellow-400"
                aria-hidden="true"
              />
            );
          } else {
            return (
              <i
                key={index}
                className="ri-star-fill text-slate-300"
                aria-hidden="true"
              />
            );
          }
        })}
      </div>
      {total > 0 && <div className="text-sm">Based on {total} reviews</div>}
    </div>
  );
};

export default Rating;
