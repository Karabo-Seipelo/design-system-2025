import Reviewer from "./Reviewer";
import NoReviews from "./NoReviews";
import { Rating, Pagination } from "./fetchReviewFromAPI";
import { Button } from "@headlessui/react";
import ReviewSkeleton from "./ReviewSkeleton";

interface ReviewsProps {
  data: Rating[];
  pagination: Pagination;
  handler: () => void;
  currentCount: number;
  classes?: string;
  loading: boolean;
}

const Reviews: React.FC<ReviewsProps> = ({
  data,
  pagination,
  handler,
  currentCount,
  classes = "",
  loading,
}) => {
  const currentlyDisplayed = pagination.total - currentCount;

  if (data.length === 0 && !loading) {
    return <NoReviews classes={classes} />;
  }

  if (loading) {
    return (
      <div className={`flex flex-col py-6 gap-6 lg:pt-0 mg:gap-8 ${classes}`}>
        {Array.from({ length: 10 }).map((_, index) => {
          const uniqueId = Date.now();
          return <ReviewSkeleton key={`skeleton-${uniqueId}-${index}`} />;
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-col py-6 gap-6 lg:pt-0 md:gap-8 ${classes}`}>
      {data.map((review) => (
        <Reviewer key={review.user.user_id} review={review} />
      ))}
      {pagination.has_more && (
        <Button
          onClick={handler}
          aria-label="Write a review"
          className="flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border-[0.5px] border-solid border-neutral-200 shadow-[0px_1px_2px_0_rgb(0_0_0_/_0.06),_0px_1px_3px_0_rgb(0_0_0_/_0.10)]"
        >
          Show {currentlyDisplayed} more reviews
        </Button>
      )}
    </div>
  );
};

export default Reviews;
