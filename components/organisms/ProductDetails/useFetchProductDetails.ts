import { useEffect, useState } from "react";
import useFetchProductDetailsStore from "./useFetchProductDetailsStore";

const useFetchProductDetail = (productId: string) => {
  const {
    product,
    loading,
    error: storeError,
    fetchProductDetails,
  } = useFetchProductDetailsStore();
  const [error, setError] = useState(storeError);

  useEffect(() => {
    let isMounted = true;
    const fetchProductData = async () => {
      setError(null);
      try {
        await fetchProductDetails(productId);
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      }
    };

    const debounceFetch = setTimeout(fetchProductData, 300);

    return () => {
      isMounted = false;
      clearTimeout(debounceFetch);
    };
  }, [fetchProductDetails, productId]);

  return { product, loading, error, fetchProductDetails };
};

export default useFetchProductDetail;
