import { useEffect, useState } from "react";
import useProductsStore from "./useProductsStore";
import ProductGridHeader from "./ProductGridHeader";
import ProductGridCard from "./ProductGridCard";
import ProductGridSkeleton from "./ProductGrid.skeleton";

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
        const collection = "latest";
        await fetchProducts(collection);
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchData();
  }, [fetchProducts]);

  useEffect(() => {
    setError(productsError);
  }, [productsError]);

  if (loading) {
    return <ProductGridSkeleton />;
  }

  if (error) {
    return (
      <section data-testid="error" className="flex flex-col gap-4 p-4">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-testid="product-grid" className="flex flex-col gap-4 p-4">
      <ProductGridHeader title="Latest Arrivals" label="View all" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.length > 0 ? (
          products.map(({ product_id, ...product }) => (
            <ProductGridCard key={product_id} {...product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
