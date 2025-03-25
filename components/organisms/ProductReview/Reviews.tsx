import Reviewer from "./Reviewer";
import NoReviews from "./NoReviews";
import { Rating as RatingType } from "./fetchReviewFromAPI";

interface ReviewsProps {
  data: RatingType[];
}

const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  if (data.length === 0) {
    return <NoReviews />;
  }
  return (
    <div className="flex flex-col items-center py-6 gap-6 lg:pt-0 lg:gap-8">
      {data.map((review) => (
        <Reviewer key={review.user.user_id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
