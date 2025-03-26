import useFetchProductDetails from "./useFetchProductDetails";
import ProductCarousel from "./ProductCarousel";
import ProductDetail from "./ProductDetail";
import ProductOptions from "./ProductOptions";

export interface ProductDetailsProps {
  productId: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  const { product, loading, error } = useFetchProductDetails(productId);

  return (
    <div className="flex flex-col gap-10 p-4">
      {product?.images && (
        <ProductCarousel images={product?.images} loading={loading} />
      )}
      {product?.name && (
        <ProductDetail name={product?.name} description={product.description} />
      )}
      <ProductOptions />
    </div>
  );
};

export default ProductDetails;
