import React from "react";
import "remixicon/fonts/remixicon.css";
import { Button } from "@headlessui/react";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";
import { Input } from "@headlessui/react";

interface ProductQuantityProps {
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
    <div id="Quantity" className={`${classes} flex flex-col gap-2`}>
      <span className="text-sm text-neutral-500">Quantity</span>
      <div className="flex flex-row w-[125px] justify-center items-center gap-3 bg-neutral-50 p-0.5 rounded-md border border-solid border-neutral-200">
        <Button
          disabled={outOfStock}
          onClick={() => handleQuantityChange(quantity - 1)}
        >
          <i
            className={`ri-subtract-fill ${outOfStock ? "text-neutral-300" : ""}`}
          />
        </Button>
        <div>
          <Input
            type="number"
            value={quantity}
            className={`w-full bg-transparent text-center ${outOfStock ? "text-neutral-300" : ""}`}
            min={`${initialQuantity}`}
            max={`${stock}`}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
          />
        </div>
        <Button
          disabled={quantity >= stock || outOfStock}
          className="relative group disabled:cursor-not-allowed"
          onClick={() => handleQuantityChange(quantity + 1)}
        >
          <i
            className={`ri-add-line ${quantity >= stock ? "text-neutral-300" : ""}`}
          />
          {quantity >= stock && <Tooltip content="Insufficient stock" />}
        </Button>
      </div>
    </div>
  );
};

export default ProductQuantity;
