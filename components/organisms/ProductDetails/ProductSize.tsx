import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@headlessui/react";
import { Options } from "./useFetchProductDetails";
import { ProductDetailsStore } from "./useProductStore";

interface ProductSizeProps {
  sizes: number[];
  selected: (state: Partial<ProductDetailsStore>) => void;
  classes?: string;
}

const ProductSize: React.FC<ProductSizeProps> = ({
  sizes,
  selected,
  classes = "",
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleButtonClick = (size: number, index: number) => {
    setActiveIndex(index);
    selected({ selectedSize: size });
  };

  return (
    <>
      {sizes.length > 0 && (
        <div id="Sizes" className={`${classes}`}>
          <span className="text-sm text-neutral-500">Available Sizes</span>
          <div className="flex flex-row gap-4 flex-wrap">
            {sizes?.map((size, index) => (
              <Button
                key={uuidv4()}
                className={`w-16 flex justify-center items-center gap-1.5 px-5 py-3 rounded border border-solid ${activeIndex === index ? "border-indigo-600" : "border-neutral-200"}`}
                onClick={() => handleButtonClick(size, index)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSize;
