import React from "react";
import "remixicon/fonts/remixicon.css";
import { Button, Input } from "@headlessui/react";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";
import QuantitySelector from "../QuantitySelector";

interface ProductQuantityProps {
  name: string;
  initialQuantity: number;
  selected: (state: Partial<ProductDetailsStore>) => void;
  stock: number;
  classes?: string;
  outOfStock: boolean;
}

interface TooltipProps {
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content }) => {
  return (
    <div
      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:inline-block bg-gray-800 text-white text-xs text-nowrap rounded-md px-2 py-1 shadow-lg"
      role="tooltip"
    >
      {content}
      <div className="absolute inset-x-0 -bottom-1 h-2 w-2 bg-inherit mx-auto z-10 rotate-45 " />
    </div>
  );
};

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  name,
  initialQuantity,
  selected,
  classes = "",
  stock,
  outOfStock = false,
}) => {
  const [quantity, setQuantity] = React.useState<number>(initialQuantity);
  const handleQuantityChange = (value: number) => {
    if (value >= 0) {
      setQuantity(value);
      selected({ selectedQuantity: value });
    }
  };

  return (
    <fieldset id="Quantity" className={`${classes} flex flex-col gap-4`}>
      <div>
        <legend className="flex flex-row text-sm text-neutral-500">
          Quantity
        </legend>
      </div>
      <QuantitySelector
        name={name}
        initialQuantity={initialQuantity}
        outOfStock={outOfStock}
        min={initialQuantity}
        max={stock}
        increment={1}
        decrement={1}
      />
    </fieldset>
  );
};

export default ProductQuantity;
