import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input, Button } from "@headlessui/react";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";
import { Inventory } from "$/organisms/ProductDetails/fetchProductDetailsAPI";
import Size from "$/atoms/Sizes";

interface ProductSizeProps {
  name: string;
  sizes: number[] | string[];
  selected: (state: Partial<ProductDetailsStore>) => void;
  classes?: string;
  inventory: Inventory;
  outOfStock: (string | number)[];
  unavailableSizes: Record<string, (string | number)[]>;
}

const ProductSize: React.FC<ProductSizeProps> = ({
  name,
  sizes,
  selected,
  classes = "",
  inventory,
  outOfStock,
  unavailableSizes,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleButtonClick = (size: number | string | null, index: number) => {
    setActiveIndex(index);
    selected({ selectedSize: size });
  };

  return (
    <>
      {sizes.length > 0 && (
        <fieldset id="Sizes" className={`${classes} flex flex-col gap-4`}>
          <div>
            <legend className="text-sm text-neutral-500">
              Available Sizes
            </legend>
          </div>
          <div className="flex flex-row gap-4 flex-wrap">
            {sizes?.map((size, index) => {
              const isOutOfStock =
                unavailableSizes[inventory.color]?.includes(size) ||
                outOfStock.includes(size);

              return (
                <Size
                  key={uuidv4()}
                  name={name}
                  size={size}
                  onClick={() => handleButtonClick(size, index)}
                  ariaLabel={`Select size ${size}`}
                  active={activeIndex === index}
                  isOutOfStock={isOutOfStock}
                />
              );
            })}
          </div>
        </fieldset>
      )}
    </>
  );
};

export default ProductSize;
