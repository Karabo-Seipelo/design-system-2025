import React from "react";
import "remixicon/fonts/remixicon.css";
import ProductQuantity from "$/molecules/ProductQuantity";
import ProductSize from "$/molecules/ProductSize";
import ProductColors from "$/molecules/ProductColors";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";
import { Button } from "@headlessui/react";
import { Inventory } from "$/organisms/ProductDetails/fetchProductDetailsAPI";

interface ProductOptionsProps {
  colors: string[];
  sizes: number[];
  quantity: number;
  selected: (state: Partial<ProductDetailsStore>) => void;
  classes?: string;
  inventory: Inventory;
  outOfStock: (string | number)[];
  unavailableSizes: Record<string, (string | number)[]>;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  colors,
  sizes,
  quantity,
  selected,
  classes = "",
  inventory,
  outOfStock,
  unavailableSizes,
}) => {
  const disabled = outOfStock.includes(inventory.color);
  return (
    <div className={classes}>
      <ProductColors
        colors={colors}
        selected={selected}
        classes="flex flex-col gap-4"
        selectedColor={inventory.color}
        outOfStock={outOfStock}
      />
      <ProductSize
        sizes={sizes}
        selected={selected}
        classes="flex flex-col gap-4"
        inventory={inventory}
        outOfStock={outOfStock}
        unavailableSizes={unavailableSizes}
      />
      <ProductQuantity
        classes="flex flex-col gap-4"
        initialQuantity={quantity}
        selected={selected}
        stock={inventory.stock}
        outOfStock={disabled}
      />

      {disabled && (
        <div className="text-neutral-900 invisible md:visible">
          Sorry, this item is out of stock
        </div>
      )}
      <Button
        disabled={disabled}
        className="flex w-full justify-center items-center gap-1.5 self-stretch bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800 disabled:bg-neutral-100 disabled:text-neutral-400 px-5 py-3 rounded text-white"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductOptions;
