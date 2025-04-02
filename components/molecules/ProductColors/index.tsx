import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import { v4 as uuidv4 } from "uuid";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";
import ColorSwatch from "$/atoms/ColorSwatch";

interface ProductColorsProps {
  name: string;
  colors: string[];
  selected: (state: Partial<ProductDetailsStore>) => void;
  classes?: string;
  selectedColor: string | null;
  outOfStock: (string | number)[];
}

const ProductColors: React.FC<ProductColorsProps> = ({
  name,
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
  }, [colors, selectedColor]);

  return (
    <>
      {colors.length > 0 && (
        <fieldset
          id="ColorOptions"
          className={`${classes} flex flex-col gap-4`}
        >
          <div>
            <legend className="text-sm text-neutral-500">
              Available Colors
            </legend>
          </div>
          <div className="flex gap-5">
            {colors.map((color, index) => {
              const isOutOfStock = outOfStock.includes(color);
              return (
                <ColorSwatch
                  key={uuidv4()}
                  name={name}
                  color={color}
                  active={activeIndex === index}
                  isOutOfStock={isOutOfStock}
                  onClick={() => handleButtonClick(color, index)}
                />
              );
            })}
          </div>
        </fieldset>
      )}
    </>
  );
};

export default ProductColors;
