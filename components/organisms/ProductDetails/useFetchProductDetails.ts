import { useEffect, useState } from "react";
import useFetchProductDetailsStore from "./useFetchProductDetailsStore";

export interface Options {
  color?: string;
  size?: number;
  quantity?: number;
}

const useFetchProductDetail = (productId: string) => {
  const {
    product,
    loading,
    selectedQuantity: quantity,
    error: storeError,
    fetchProductDetails,
    selectedColor,
    selectedSize,
    selectOptions,
  } = useFetchProductDetailsStore();
  const [error, setError] = useState(storeError);
  const [selectedOptions, setSelectedOptions] = useState<{
    color?: string;
    size?: number | string;
    quantity?: number;
  }>({
    color: selectedColor,
    size: selectedSize,
    quantity: 1,
  });

  const selected = (options: Options) => {
    if (options) {
      setSelectedOptions((prev) => ({ ...prev, ...options }));
    }
  };

  console.log({ selectedOptions });
  /*
  useEffect(() => {
    selectOptions(selectedOptions);
    console.log({ selectedOptions });
  }, [selectOptions, selectedOptions]);
  */

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

  return {
    product,
    loading,
    quantity,
    error,
    fetchProductDetails,
    selected,
  };
};

export default useFetchProductDetail;
