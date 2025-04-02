import { useMemo } from "react";
import "remixicon/fonts/remixicon.css";

interface StarsProps {
  score: number;
}

const Stars: React.FC<StarsProps> = ({ score }) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;
  const generateStars = useMemo(() => new Array(5).fill(0), []);
  return (
    <div className="flex gap-1">
      {generateStars.map((_, index) => {
        const key = `star-${index}-${index < fullStars ? "full" : index === fullStars && hasHalfStar ? "half" : "empty"}`;
        if (index < fullStars) {
          return (
            <i
              key={key}
              className="ri-star-fill text-yellow-400"
              aria-hidden="true"
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <i
              key={key}
              className="ri-star-half-fill text-yellow-400"
              aria-hidden="true"
            />
          );
        } else {
          return (
            <i
              key={key}
              className="ri-star-fill text-slate-300"
              aria-hidden="true"
            />
          );
        }
      })}
    </div>
  );
};

export default Stars;
