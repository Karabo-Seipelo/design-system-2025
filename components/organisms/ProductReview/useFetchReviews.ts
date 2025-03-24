import { useEffect, useState } from "react";
import useFetchReviewsStore from "./useFetchReviewsStore";

const useFetchReviews = (productId: string, page = 1, perPage = 12) => {
  const {
    fetchReviews,
    reviews,
    error: storeError,
    loading: storeLoading,
  } = useFetchReviewsStore();
  const [loading, setLoading] = useState(storeLoading);
  const [error, setError] = useState(storeError);

  useEffect(() => {
    let isMounted = true;

    const fetchReviewsData = async () => {
      setLoading(true);
      setError(null);
      try {
        await fetchReviews(productId, page, perPage);
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    const debounceFetch = setTimeout(fetchReviewsData, 300);

    return () => {
      isMounted = false;
      clearTimeout(debounceFetch);
    };
  }, [fetchReviews, page, perPage, productId]);

  return { reviews, loading, error };
};

export default useFetchReviews;
