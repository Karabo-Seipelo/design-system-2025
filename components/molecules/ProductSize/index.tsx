import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@headlessui/react";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";
import { Inventory } from "$/organisms/ProductDetails/fetchProductDetailsAPI";

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
                outOfStock.includes(inventory.color) ||
                (Object.keys(unavailableSizes).includes(inventory.color) &&
                  unavailableSizes[inventory.color]?.includes(size));

              return (
                <label
                  key={uuidv4()}
                  className={`w-16 flex justify-center items-center gap-1.5 px-5 py-3 rounded border border-solid uppercase hover:bg-neutral-50 focus:bg-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-400 ${activeIndex === index && !isOutOfStock ? "border-indigo-600" : "border-neutral-200"}`}
                  onClick={() => handleButtonClick(size, index)}
                  htmlFor={String(size)}
                  role="button"
                  aria-label={`Select size ${size}`}
                >
                  {size && (
                    <Input
                      type="radio"
                      id={String(size)}
                      name={name}
                      value={String(size)}
                      defaultChecked={activeIndex === index}
                      className="hidden"
                    />
                  )}
                  {size}
                </label>
              );
            })}
          </div>
        </fieldset>
      )}
    </>
  );
};

export default ProductSize;
