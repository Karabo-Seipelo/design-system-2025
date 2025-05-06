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
    return (
      <section className="flex flex-col gap-4 p-4">
        <header className="flex justify-between items-center">
          <div className="w-[210px] h-[36px] bg-slate-100" />
          <div className="w-[50px] h-[22px] bg-slate-100" />
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="w-[310px] md:w-[344px] lg:w-[284px] h-[225px] rounded-lg bg-slate-100" />
              <div className="flex flex-col gap-2">
                <div className="w-[40px] h-[16px] bg-slate-100" />
                <div className="w-[150px] h-[28px] bg-slate-100" />
                <div className="w-[60px] h-[24px] bg-slate-100" />
                <div className="flex gap-3">
                  {Array.from({ length: 3 }, (_, index) => (
                    <div
                      key={index}
                      className="w-[40px] h-[40px] rounded-full bg-slate-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex flex-col gap-4 p-4">
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
