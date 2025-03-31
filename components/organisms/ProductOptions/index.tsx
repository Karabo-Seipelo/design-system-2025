import React from "react";
import "remixicon/fonts/remixicon.css";
import ProductQuantity from "$/molecules/ProductQuantity";
import ProductSize from "$/molecules/ProductSize";
import ProductColors from "$/molecules/ProductColors";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";
import { Inventory } from "$/organisms/ProductDetails/fetchProductDetailsAPI";

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
