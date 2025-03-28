import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@headlessui/react";
import { ProductDetailsStore } from "./useProductStore";

interface ProductColorsProps {
  colors: string[];
  selected: (state: Partial<ProductDetailsStore>) => void;
  classes?: string;
  selectedColor: string | null;
}

const ProductColors: React.FC<ProductColorsProps> = ({
  colors,
  selected,
  classes = "",
  selectedColor,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleButtonClick = (color: string, index: number) => {
    setActiveIndex(index);
    selected({ selectedColor: color });
  };
  const selectedColorIndex = colors.findIndex(
    (color) => color === selectedColor,
  );

  useEffect(() => {
    const selectedColorIndex = colors.findIndex(
      (color) => color === selectedColor,
    );
    setActiveIndex(selectedColorIndex);
  }, [colors, selectedColor]);

  console.log({ selectedColorIndex, activeIndex });

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
