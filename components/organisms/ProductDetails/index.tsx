import useFetchProductDetails from "./useFetchProductDetails";
import ProductCarousel from "./ProductCarousel";
import ProductDetail from "./ProductDetail";
import ProductOptions from "./ProductOptions";
import ProductInfo from "./ProductInfo";
import { Button } from "@headlessui/react";

export interface ProductDetailsProps {
  productId: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  const { product, loading, error } = useFetchProductDetails(productId);

  return (
    <div className="flex flex-col gap-10 p-4 lg:flex-row">
      <div className="flex flex-col gap-10">
        {product?.images && (
          <ProductCarousel images={product?.images} loading={loading} />
        )}
      </div>
      <div className="flex flex-col gap-10">
        {product?.name && (
          <ProductDetail
            name={product?.name}
            description={product.description}
          />
        )}
        <ProductOptions />
        <Button className="flex w-full justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-5 py-3 rounded text-white">
          Add to cart
        </Button>
        {product?.info && <ProductInfo info={product.info} />}
      </div>
    </div>
  );
};

export default ProductDetails;
