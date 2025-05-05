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
              <div className="w-[332px] h-[225px] rounded-lg bg-slate-100" />
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
