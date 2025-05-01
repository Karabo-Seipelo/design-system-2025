import { useEffect, useState } from "react";
import useProductsStore from "./useProductsStore";
import ProductGridHeader from "./ProductGridHeader";
import ProductGridCard from "./ProductGridCard";

const ProductGrid = () => {
  const {
    products,
    fetchProducts,
    loading,
    error: productsError,
  } = useProductsStore();
  const [error, setError] = useState<Error | null>(productsError);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProducts();
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchData();
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col gap-4 p-4">
      <ProductGridHeader title="Latest Arrivals" label="View all" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map(({ product_id, ...product }) => (
          <ProductGridCard key={product_id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
