import React from "react";
import Stars from "$/atoms/Stars";
import Button from "$/atoms/Button";
import { OptionalVariant } from "$/atoms/Button/interfaces";

export interface RatingProps {
  score: number;
  classes?: string;
  total?: number;
  href?: string;
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
  href,
}) => {
  return (
    <div className={`${classes}`}>
      {showScore && <Score score={score} />}
      <div className="flex gap-1">
        <Stars score={score} />
      </div>
      <div className="flex gap-1">
        {total && total > 0 ? (
          <Button size="link" variant={OptionalVariant.LINK}>
            {href ? `See all ${total} reviews` : `Based on ${total} reviews`}
          </Button>
        ) : (
          <Button size="link" variant={OptionalVariant.LINK}>
            {" "}
            No reviews yet. <span>Be the first</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Rating;
