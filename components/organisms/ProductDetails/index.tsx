import React, { useEffect } from "react";
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
  } = useProductStore();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        await fetchProductDetails(productId);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };

    fetchProductData();
  }, [fetchProductDetails, productId]);

  return (
    <>
      {loading ? (
        <ProductDetailsSkeleton />
      ) : (
        <div className="flex flex-col gap-10 p-4 lg:flex-row">
          <div className="flex flex-col gap-10 lg:w-[592px]">
            {product?.images && (
              <ProductCarousel
                images={product?.images}
                loading={loading}
                color={selectedColor}
                selected={updateProductState}
              />
            )}
          </div>
          <div className="flex flex-col gap-10">
            {product?.name &&
              product?.description &&
              product?.rating &&
              product.reviews &&
              selectedInventory && (
                <ProductDetail
                  name={product?.name}
                  description={product.description}
                  rating={product.rating}
                  reviews={product.reviews}
                  inventory={selectedInventory}
                  locale={locale}
                  currency={currency}
                />
              )}
            {product?.colors && product?.sizes && selectedInventory && (
              <ProductOptions
                colors={product.colors}
                sizes={product.sizes}
                selected={updateProductState}
                quantity={quantity}
                classes="flex flex-col gap-4"
                inventory={selectedInventory}
                outOfStock={outOfStock}
                unavailableSizes={unavailableSizes}
              />
            )}
            {product?.info && <ProductInfo info={product.info} />}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
