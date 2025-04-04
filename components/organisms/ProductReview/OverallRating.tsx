import { useMemo } from "react";
import { Button } from "@headlessui/react";
import Rating from "$/molecules/Rating";
import { Count } from "./useFetchReviewsStore";

export interface OverallRatingProps {
  title: string;
  counts: Count[];
  rating: number;
  total: number;
  applyFilter: (rating: number) => void;
  clearFilter: () => void;
  filter: number | null;
  classes?: string;
}

enum RatingType {
  Excellent = 5,
  Good = 4,
  Average = 3,
  BelowAverage = 2,
  Poor = 1,
}

const getRatingLabel = (rating: number): string => {
  switch (rating) {
    case RatingType.Excellent:
      return "Excellent";
    case RatingType.Good:
      return "Good";
    case RatingType.Average:
      return "Average";
    case RatingType.BelowAverage:
      return "Below Average";
    case RatingType.Poor:
      return "Poor";
    default:
      return "";
  }
};

const getRatingColor = (rating: number): string => {
  switch (rating) {
    case RatingType.Excellent:
      return "bg-green-600";
    case RatingType.Good:
      return "bg-green-500";
    case RatingType.Average:
      return "bg-yellow-400";
    case RatingType.BelowAverage:
      return "bg-yellow-500";
    case RatingType.Poor:
      return "bg-red-500";
    default:
      return "";
  }
};

const OverallRating: React.FC<OverallRatingProps> = ({
  title,
  rating,
  total,
  counts,
  filter,
  applyFilter,
  clearFilter,
  classes = "",
}) => {
  const sortedCounts = useMemo(
    () => [...counts].sort((a, b) => b.rating - a.rating),
    [counts],
  );
  return (
    <div className={`flex flex-col gap-6 ${classes}`}>
      <div className="flex flex-col gap-2">
        {title && (
          <h4 className="font-semibold text-xl text-neutral-900">{title}</h4>
        )}
        <Rating classes="flex flex-row gap-2" score={rating} total={total} />
      </div>
      <div className="flex flex-col gap-4 py-4">
        {sortedCounts.map((currentCount: Count) => {
          const percentageOfVotes = Math.round(
            (currentCount.count / total) * 100,
          );
          return (
            <div
              key={currentCount.rating}
              className="flex flex-row justify-between gap-2"
            >
              <div
                className={`w-[38%] flex items-center gap-1.5 cursor-pointer `}
              >
                <Button
                  className={`${filter === currentCount.rating ? "text-indigo-600" : "text-neutral-600"}`}
                  onClick={() => applyFilter(currentCount.rating)}
                >
                  {getRatingLabel(currentCount.rating)}
                </Button>
              </div>
              <div className="flex items-center gap-3 grow">
                <div className="grow h-2 rounded-lg bg-gray-200 overflow-hidden">
                  <div
                    className={`${getRatingColor(currentCount.rating)} h-full rounded-lg`}
                    style={{ width: `${percentageOfVotes}%` }}
                  />
                </div>
              </div>
              <div className="w-[15%] text-right text-neutral-600">{`${percentageOfVotes} %`}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-6 justify-center">
        {filter && (
          <Button
            onClick={clearFilter}
            aria-label="Clear Filter"
            className="flex justify-center items-center gap-1.5 grow px-5 py-3 text-indigo-600"
          >
            Clear Filter
          </Button>
        )}
        <Button
          aria-label="Write a review"
          className="flex font-medium text-base text-neutral-900 justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border-[0.5px] border-solid border-neutral-200 shadow-[0px_1px_2px_0_rgb(0_0_0_/_0.06),_0px_1px_3px_0_rgb(0_0_0_/_0.10)]"
        >
          Write a review
        </Button>
      </div>
    </div>
  );
};

export default OverallRating;
