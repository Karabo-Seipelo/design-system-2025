import { useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import useProductsStore from "./useProductsStore";

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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <header>
        <h2>Latest Arrivals</h2>
        <Button>View all</Button>
      </header>
      <div>
        <div>
          <div>image</div>
          <div>
            <h6>color</h6>
            <h3>Product Name</h3>
            <p>price</p>
            <div>color swatches</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
