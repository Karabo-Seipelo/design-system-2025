import React, { useMemo } from "react";

export interface RatingProps {
  score: number;
  classes?: string;
  total?: number;
  showScore?: boolean;
}

const Score = ({ score }: { score: number }) => {
  return (
    <div
      className="font-semibold text-base text-neutral-900"
      aria-label={`Rating score: ${score.toFixed(1)}`}
    >
      {score.toFixed(1)}
    </div>
  );
};

const Rating: React.FC<RatingProps> = ({
  score,
  total,
  classes,
  showScore = true,
}) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;
  const generateStars = useMemo(() => new Array(5).fill(0), []);

  return (
    <div className={`${classes}`}>
      {showScore && <Score score={score} />}
      <div className="flex flex-row gap-2">
        {generateStars.map((_, index) => {
          if (index < fullStars) {
            return (
              <i
                key={`star-${index}-${total}`}
                className="ri-star-fill text-yellow-400"
                aria-hidden="true"
              />
            );
          } else if (index === fullStars && hasHalfStar) {
            return (
              <i
                key={`star-${index}-${total}`}
                className="ri-star-half-fill text-yellow-400"
                aria-hidden="true"
              />
            );
          } else {
            return (
              <i
                key={`star-${index}-${total}`}
                className="ri-star-fill text-slate-300"
                aria-hidden="true"
              />
            );
          }
        })}
      </div>
      {total && total > 0 && (
        <div className="font-normal text-sm text-neutral-600">
          Based on {total} reviews
        </div>
      )}
    </div>
  );
};

export default Rating;
