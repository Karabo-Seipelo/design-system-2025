import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@headlessui/react";
import { Options } from "./useFetchProductDetails";

interface ProductColorsProps {
  colors: string[];
  selected: (options: Options) => void;
  classes?: string;
}

const ProductColors: React.FC<ProductColorsProps> = ({
  colors,
  selected,
  classes = "",
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleButtonClick = (color: string, index: number) => {
    setActiveIndex(index);
    selected({ color });
  };

  return (
    <>
      {colors.length > 0 && (
        <div id="ColorOptions" className={`${classes}`}>
          <span className="text-sm text-neutral-500">Available Colors</span>
          <div className="flex gap-5">
            {colors.map((color, index) => (
              <Button
                key={uuidv4()}
                className={`flex rounded-full w-[40px] h-[40px] items-center justify-center outline outline-offset-1  ${activeIndex === index ? "outline-indigo-600" : "outline-neutral-200"} `}
                style={{ backgroundColor: color }}
                onClick={() => handleButtonClick(color, index)}
              >
                {activeIndex === index && (
                  <i className="ri-check-fill text-white w-15 h-15" />
                )}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductColors;
