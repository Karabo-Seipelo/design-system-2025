import { useEffect, useState } from "react";
import useFetchReviewsStore from "./useFetchReviewsStore";

interface useFetchReviewsProps {
  productId: string;
  page?: number;
  perPage?: number;
  filter?: number | null;
}

const useFetchReviews = ({
  productId,
  page = 1,
  perPage = 12,
  filter = null,
}: useFetchReviewsProps) => {
  const {
    fetchReviews,
    reviews,
    error: storeError,
    loading,
  } = useFetchReviewsStore();
  //const [loading, setLoading] = useState(storeLoading);
  const [error, setError] = useState(storeError);

  useEffect(() => {
    let isMounted = true;

    const fetchReviewsData = async () => {
      setError(null);
      try {
        await fetchReviews(productId, page, perPage, filter);
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      }
    };
    const debounceFetch = setTimeout(fetchReviewsData, 300);

    return () => {
      isMounted = false;
      clearTimeout(debounceFetch);
    };
  }, [fetchReviews, filter, page, perPage, productId]);

  return { reviews, loading, error, fetchReviews };
};

export default useFetchReviews;
