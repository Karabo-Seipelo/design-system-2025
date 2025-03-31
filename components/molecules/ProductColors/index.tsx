import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@headlessui/react";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";

interface ProductColorsProps {
  colors: string[];
  selected: (state: Partial<ProductDetailsStore>) => void;
  classes?: string;
  selectedColor: string | null;
  outOfStock: (string | number)[];
}

const ProductColors: React.FC<ProductColorsProps> = ({
  colors,
  selected,
  classes = "",
  selectedColor,
  outOfStock,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(() =>
    colors.findIndex((color) => color === selectedColor),
  );
  const handleButtonClick = (color: string, index: number) => {
    setActiveIndex(index);
    selected({ selectedColor: color });
  };

  useEffect(() => {
    const selectedColorIndex = colors.findIndex(
      (color) => color === selectedColor,
    );
    setActiveIndex(selectedColorIndex);
  }, [selectedColor]);

  return (
    <>
      {colors.length > 0 && (
        <div id="ColorOptions" className={`${classes}`}>
          <span className="text-sm text-neutral-500">Available Colors</span>
          <div className="flex gap-5">
            {colors.map((color, index) => {
              const isOutOfStock = outOfStock.includes(color);

              return (
                <Button
                  key={uuidv4()}
                  className={`relative flex rounded-full w-[40px] h-[40px] items-center justify-center outline outline-offset-1  ${activeIndex === index ? "outline-indigo-600" : "outline-neutral-200"} `}
                  style={{ backgroundColor: color }}
                  onClick={() => handleButtonClick(color, index)}
                >
                  {isOutOfStock && (
                    <div className="w-[125%] h-[1px] bg-neutral-600 -rotate-45 absolute" />
                  )}
                  {activeIndex === index && !isOutOfStock && (
                    <i className="ri-check-fill text-white w-15 h-15" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductColors;
