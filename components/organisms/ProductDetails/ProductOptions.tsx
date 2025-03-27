import React from "react";
import "remixicon/fonts/remixicon.css";
import { Options } from "./useFetchProductDetails";
import ProductQuantity from "./ProductQuantity";
import ProductSize from "./ProductSize";
import ProductColors from "./ProductColors";

interface ProductOptionsProps {
  colors: string[];
  sizes: number[];
  quantity: number;
  selected: (options: Options) => void;
  classes?: string;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  colors,
  sizes,
  quantity,
  selected,
  classes = "",
}) => {
  return (
    <div className={classes}>
      <ProductColors
        colors={colors}
        selected={selected}
        classes="flex flex-col gap-4"
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
