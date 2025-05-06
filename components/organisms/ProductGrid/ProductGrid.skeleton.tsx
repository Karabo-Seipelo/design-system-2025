const ProductGridSkeleton = () => {
  const uniqueId = Date.now();

  return (
    <section data-testid="loading" className="flex flex-col gap-4 p-4">
      <header className="flex justify-between items-center">
        <div className="w-[210px] h-[36px] bg-slate-100" />
        <div className="w-[50px] h-[22px] bg-slate-100" />
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={`index-${uniqueId}-${index}`}
            className="flex flex-col gap-4"
          >
            <div className="w-[310px] md:w-[344px] lg:w-[284px] h-[225px] rounded-lg bg-slate-100" />
            <div className="flex flex-col gap-2">
              <div className="w-[40px] h-[16px] bg-slate-100" />
              <div className="w-[150px] h-[28px] bg-slate-100" />
              <div className="w-[60px] h-[24px] bg-slate-100" />
              <div className="flex gap-3">
                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={`details-${uniqueId}-${index}`}
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
};

export default ProductGridSkeleton;
