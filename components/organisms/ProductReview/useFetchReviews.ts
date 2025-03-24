import { useEffect } from "react";
import useFetchReviewsStore from "./useFetchReviewsStore";

const useFetchReviews = (productId: string, page = 1, perPage = 12) => {
  const { fetchReviews, reviews, error, loading } = useFetchReviewsStore();

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        await fetchReviews(productId, page, perPage);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviewsData();
  }, [fetchReviews, page, perPage, productId]);

  return { reviews, loading, error };
};

export default useFetchReviews;
