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
  const handleAddCart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Adding to cart:", { data });
    console.log("Selected inventory:", inventory);
  };

  return (
    <form className={classes} onSubmit={handleAddCart}>
      <ProductColors
        name="color"
        colors={colors}
        selected={selected}
        classes="flex flex-col gap-4"
        selectedColor={inventory.color}
        outOfStock={outOfStock}
      />
      <ProductSize
        name="size"
        sizes={sizes}
        selected={selected}
        classes="flex flex-col gap-4"
        inventory={inventory}
        outOfStock={outOfStock}
        unavailableSizes={unavailableSizes}
      />
      <ProductQuantity
        name="quantity"
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
        type="submit"
        disabled={disabled}
        className={`flex w-full justify-center items-center gap-1.5 self-stretch bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800 disabled:bg-neutral-100 disabled:text-neutral-400 text-nowrap h-15 px-6 py-4 text-lg text-white  gap-x-3 rounded ${disabled ? "cursor-not-allowed" : ""}`}
      >
        Add to cart
      </Button>
    </form>
  );
};

export default ProductOptions;
