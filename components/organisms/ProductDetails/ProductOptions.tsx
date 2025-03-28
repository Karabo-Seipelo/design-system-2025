import React from "react";
import "remixicon/fonts/remixicon.css";
import ProductQuantity from "./ProductQuantity";
import ProductSize from "./ProductSize";
import ProductColors from "./ProductColors";
import { ProductDetailsStore } from "./useProductStore";
import { Inventory } from "./fetchProductDetailsAPI";

interface ProductOptionsProps {
  colors: string[];
  sizes: number[];
  quantity: number;
  selected: (state: Partial<ProductDetailsStore>) => void;
  classes?: string;
  inventory: Inventory;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  colors,
  sizes,
  quantity,
  selected,
  classes = "",
  inventory,
}) => {
  return (
    <div className={classes}>
      <ProductColors
        colors={colors}
        selected={selected}
        classes="flex flex-col gap-4"
        selectedColor={inventory.color}
      />
      <ProductSize
        sizes={sizes}
        selected={selected}
        classes="flex flex-col gap-4"
      />
      <ProductQuantity
        classes="flex flex-col gap-4"
        initialQuantity={quantity}
        selected={selected}
        stock={quantity}
      />
    </div>
  );
};

export default ProductOptions;
