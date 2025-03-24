import { Button } from "@headlessui/react";
import Rating from "./Rating";

export interface OverallRatingProps {
  score: number;
  total: number;
}

const OverallRating: React.FC<OverallRatingProps> = ({ score, total }) => {
  return (
    <div className="flex flex-col gap-4">
      <Rating classes="flex flex-row gap-4" score={score} total={total} />
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Excellent</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Good</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200 w-[43%]"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Average</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200 w-[43%]"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Below Average</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200 w-[43%]"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Poor</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200 w-[43%]"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
      </div>

      <Button className="flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border=[0.5px] border-solid border-neutral-200 shadow-[0px_1px_2px_0_rgb(0_0_0_/_0.06),_0px_1px_3px_0_rgb(0_0_0_/_0.10)]">
        Write a review
      </Button>
    </div>
  );
};

export default OverallRating;
