import React, { useCallback, useState, useEffect, useMemo } from "react";
import useProductStore from "./useProductStore";
import ProductCarousel from "$/molecules/ProductCarousel";
import ProductDetail from "$/molecules/ProductDetail";
import ProductInfo from "$/molecules/ProductInfo";
import ProductOptions from "$/organisms/ProductOptions";
import ProductDetailsSkeleton from "./ProductDetails.skeleton";

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
  } = product || {};

  const optionsReady = useMemo(() => colors && sizes, [colors, sizes]);

  const productDetailsReady = useMemo(
    () => name && description && rating && reviews && locale && currency,
    [name, description, rating, reviews, locale, currency],
  );

  const carouselReady = useMemo(() => images && images.length > 0, [images]);

  const carouselProps = useMemo(
    () => ({
      images: images || [],
      loading,
      color: selectedColor,
      selected: updateProductState,
    }),
    [images, loading, selectedColor, updateProductState],
  );

  const renderComponents = {
    carousel: carouselReady && <ProductCarousel {...carouselProps} />,
    details: productDetailsReady && selectedInventory && (
      <ProductDetail
        name={name}
        description={description}
        rating={rating}
        reviews={reviews}
        inventory={selectedInventory}
        locale={locale}
        currency={currency}
      />
    ),
    options: optionsReady && selectedInventory && (
      <ProductOptions
        colors={colors}
        sizes={sizes}
        selected={updateProductState}
        quantity={quantity}
        classes="flex flex-col gap-4"
        inventory={selectedInventory}
        outOfStock={outOfStock}
        unavailableSizes={unavailableSizes}
      />
    ),
    info: info && <ProductInfo info={info} />,
  };

  if (error) {
    return (
      <div className="text-red-500">
        {error.message || "Something went wrong. Please try again later."}
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
    <div className="flex flex-col gap-10 p-4 lg:flex-row">
      <div className="flex flex-col gap-10 lg:w-[50%]">
        {renderComponents.carousel}
      </div>
      <div className="flex flex-col gap-10 lg:w-[50%]">
        {renderComponents.details}
        {renderComponents.options}
        {renderComponents.info}
      </div>
    </div>
  );
};

export default ProductDetails;
