import React, { useEffect } from "react";
import useProductStore from "./useProductStore";
import ProductCarousel from "$/molecules/ProductCarousel";
import ProductDetail from "$/molecules/ProductDetail";
import ProductInfo from "$/molecules/ProductInfo";
import ProductOptions from "$/organisms/ProductOptions";
import { Button } from "@headlessui/react";
import ProductDetailsSkeleton from "./ProductDetails.skeleton";

export interface ProductDetailsProps {
  productId: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  const {
    product,
    loading,
    error,
    selectedQuantity: quantity,
    inventory,
    updateState: selected,
    fetchProductDetails,
    selectedInventory,
    selectedColor,
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

  useEffect(() => {
    console.log("Selected Inventory:", selectedInventory);
  }, [selectedInventory]);

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
                selected={selected}
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
                />
              )}
            {product?.colors && product?.sizes && selectedInventory && (
              <ProductOptions
                colors={product.colors}
                sizes={product.sizes}
                selected={selected}
                quantity={quantity}
                classes="flex flex-col gap-4"
                inventory={selectedInventory}
              />
            )}
            <Button className="flex w-full justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-5 py-3 rounded text-white">
              Add to cart
            </Button>
            {product?.info && <ProductInfo info={product.info} />}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
