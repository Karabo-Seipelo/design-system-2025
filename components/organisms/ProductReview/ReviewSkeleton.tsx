const ReviewSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <header className="flex flex-row w-full gap-4 justify-between">
        <div className="w-[17%] md:w-[11%]">
          <div className="w-[48px] h-[48px] overflow-hidden rounded-full">
            <span className="text-neutral-900 font-semibold bg-slate-100 w-full h-full flex items-center justify-center"></span>
          </div>
        </div>
        <div className="w-[83%] md:w-[89%] flex flex-col gap-1">
          <div className="flex flex-row justify-between">
            <div className="h-2 w-40 flex flex-row gap-2">
              <div className="h-4 w-10 bg-slate-100 rounded" />
              <div className="h-4 w-20 bg-slate-100 rounded" />
            </div>
            <div className="h-4 w-20 bg-slate-100 rounded" />
          </div>
          <div className="flex flex-row gap-2">
            <i className="ri-star-fill text-slate-200" aria-hidden="true" />
            <i className="ri-star-fill text-slate-200" aria-hidden="true" />
            <i className="ri-star-fill text-slate-200" aria-hidden="true" />
            <i className="ri-star-fill text-slate-200" aria-hidden="true" />
            <i className="ri-star-fill text-slate-200" aria-hidden="true" />
          </div>
        </div>
      </header>
      <div className="w-full flex flex-row gap-2">
        <div className="w-20 h-3 bg-slate-100 rounded" />
        <div className="w-4 h-3 bg-slate-100 rounded" />
        <div className="w-10 h-3 bg-slate-100 rounded" />
        <div className="w-20 h-3 bg-slate-100 rounded" />
      </div>
    </div>
  );
};

export default ReviewSkeleton;
