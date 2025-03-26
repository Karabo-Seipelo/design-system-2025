import "remixicon/fonts/remixicon.css";
import { Button } from "@headlessui/react";

const ProductOptions = () => {
  return (
    <div className="flex flex-col gap-4">
      <div id="ColorOptions" className="flex flex-col gap-4">
        <span className="text-sm text-neutral-500">Available Colors</span>
        <div className="flex gap-2">
          <div className="flex rounded-full bg-red-700 w-[40px] h-[40px] items-center justify-center">
            <i className="ri-check-fill text-white w-15 h-15" />
          </div>
          <div className="flex rounded-full bg-pink-700 w-[40px] h-[40px] items-center justify-center">
            <i className="ri-check-fill text-white w-15 h-15" />
          </div>
        </div>
      </div>
      <div id="Sizes" className="flex flex-col gap-4">
        <span className="text-sm text-neutral-500">Available Sizes</span>
        <div className="flex flex-row gap-4 flex-wrap">
          <Button className="w-16 flex justify-center items-center gap-1.5 px-5 py-3 rounded border border-solid border-neutral-200">
            XS
          </Button>
          <Button className="w-16 flex justify-center items-center gap-1.5 px-5 py-3 rounded border border-solid border-neutral-200">
            S
          </Button>
          <Button className="w-16 flex justify-center items-center gap-1.5 px-5 py-3 rounded border border-solid border-neutral-200">
            M
          </Button>
          <Button className="w-16 flex justify-center items-center gap-1.5 px-5 py-3 rounded border border-solid border-neutral-200">
            L
          </Button>
          <Button className="w-16 flex justify-center items-center gap-1.5 px-5 py-3 rounded border border-solid border-neutral-200">
            XL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
