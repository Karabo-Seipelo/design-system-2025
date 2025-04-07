import React, { useCallback, useState, useEffect, useMemo } from "react";
import useProductStore from "./useProductStore";
import ProductCarousel from "$/molecules/ProductCarousel";
import ProductDetail from "$/molecules/ProductDetail";
import ProductInfo from "$/molecules/ProductInfo";
import ProductOptions from "$/organisms/ProductOptions";
import ProductDetailsSkeleton from "./ProductDetails.skeleton";
import { Inventory } from "./fetchProductDetailsAPI";

export interface ProductDetailsProps {
  productId: string;
  locale: string;
  currency: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productId,
  locale,
  currency,
}) => {
  const {
    product,
    loading,
    selectedQuantity: quantity,
    updateState: updateProductState,
    fetchProductDetails,
    selectedInventory,
    selectedColor,
    unavailableSizes,
    outOfStock,
    error: productError,
  } = useProductStore();
  const [error, setError] = useState<Error | null>(productError);
  const memoizedFetchProductDetails = useCallback(async () => {
    try {
      await fetchProductDetails(productId);
      setError(null);
    } catch (err) {
      setError(err as Error);
    }
  }, [fetchProductDetails, productId]);

  useEffect(() => {
    try {
      memoizedFetchProductDetails();
    } catch (err) {
      setError(err as Error);
    }
  }, [memoizedFetchProductDetails]);

  const {
    images = [],
    name = "",
    description = "",
    rating = 0,
    reviews = 0,
    colors = [],
    sizes = [],
    info = null,
  } = product ?? {};

  const productDetailsReady = useMemo(
    () => name && description && rating && reviews && locale && currency,
    [name, description, rating, reviews, locale, currency]
  );

  const details = useMemo(
    () => ({
      name,
      description,
      rating,
      reviews,
      inventory: selectedInventory as Inventory,
      locale,
      currency,
    }),
    [currency, description, locale, name, rating, reviews, selectedInventory]
  );

  const carouselReady = useMemo(() => images && images.length > 0, [images]);

  const carouselProps = useMemo(
    () => ({
      images: images ?? [],
      loading,
      color: selectedColor,
      selected: updateProductState,
    }),
    [images, loading, selectedColor, updateProductState]
  );

  const optionsReady = useMemo(() => colors && sizes, [colors, sizes]);

  const optionsProps = useMemo(
    () => ({
      colors: colors ?? [],
      sizes: sizes ?? [],
      selected: updateProductState,
      quantity,
      classes: "flex flex-col gap-4",
      inventory: selectedInventory as Inventory,
      outOfStock,
      unavailableSizes,
    }),
    [
      colors,
      outOfStock,
      quantity,
      selectedInventory,
      sizes,
      unavailableSizes,
      updateProductState,
    ]
  );

  const renderComponents = {
    carousel: carouselReady && <ProductCarousel {...carouselProps} />,
    details: productDetailsReady && selectedInventory && (
      <ProductDetail {...details} />
    ),
    options: optionsReady && selectedInventory && (
      <ProductOptions {...optionsProps} />
    ),
    info: info && <ProductInfo info={info} />,
  };

  if (error) {
    return (
      <div className="text-red-500">
        {error.message ?? "Something went wrong. Please try again later."}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col gap-10 p-4 lg:flex-row">
        <ProductDetailsSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-12 md:py-16 lg:p-224 grid grid-cols-4 gap-x-4 gap-y-12 md:grid-cols-6 md:gap-x-8 lg:grid-cols-12">
      <div className="col-span-4 md:col-span-6">
        {renderComponents.carousel}
      </div>
      <div className="col-span-4 md:col-span-6">
        {renderComponents.details}
        {renderComponents.options}
        {renderComponents.info}
      </div>
    </div>
  );
};

export default ProductDetails;
