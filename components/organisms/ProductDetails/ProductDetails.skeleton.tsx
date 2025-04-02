const ProductDetailsSkeleton = () => (
  <div className="flex flex-col gap-10 p-4 lg:flex-row">
    <div className="flex flex-col gap-10 lg:w-[592px]">
      <div className="flex  flex-col gap-6">
        <div className="block w-full min-h-[500px] bg-slate-100 bg-center rounded-lg" />
        <div className="flex flex-1 py-5 overflow-hidden p-1">
          <div className="flex flex-nowrap gap-4 h-[120px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={`${index}-skeletom`}
                className="w-20 h-[130px] bg-slate-100 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-10 grow">
      <div className="flex flex-row gap-4">
        <div className="block h-[2em] w-[5em] bg-slate-100 rounded-lg" />
        <div className="block h-[2em] w-[10em] bg-slate-100 rounded-lg" />
      </div>
      <div className="flex gap-2">
        <span className="block h-[2em] w-[2em] bg-slate-100 rounded-lg" />
        <span className="block h-[1.5em] w-[1.5em] bg-slate-100 rounded-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="inline h-[1em] w-[10em] bg-slate-100 rounded-lg" />
        <span className="inline h-[1em] w-[5em] bg-slate-100 rounded-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="inline h-[1em] w-[10em] bg-slate-100 rounded-lg" />
        <div className="flex gap-2">
          <span className="flex rounded-full w-[40px] h-[40px] bg-slate-100" />
          <span className="flex rounded-full w-[40px] h-[40px] bg-slate-100" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="inline h-[1em] w-[10em] bg-slate-100 rounded-lg" />
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <span
              key={`${index}-skeleton-1`}
              className="w-16 h-14 flex justify-center items-center gap-1.5 px-5 py-3 rounded bg-slate-100"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="inline h-[1em] w-[10em] bg-slate-100 rounded-lg" />
        <div className="flex gap-2">
          <span className="w-[9em] h-8 flex justify-center items-center gap-1.5 px-5 py-3 rounded bg-slate-100" />
        </div>
      </div>
      <div className="flex h-[3em] w-full  bg-slate-100 rounded" />
    </div>
  </div>
);

export default ProductDetailsSkeleton;
