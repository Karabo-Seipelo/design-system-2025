import React from "react";
import "remixicon/fonts/remixicon.css";
import { Button } from "@headlessui/react";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";

interface ProductQuantityProps {
  initialQuantity: number;
  selected: (state: Partial<ProductDetailsStore>) => void;
  classes?: string;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  initialQuantity,
  selected,
  classes = "",
}) => {
  const [quantity, setQuantity] = React.useState<number>(initialQuantity);

  const handleQuantityChange = (value: number) => {
    if (value >= 0) {
      setQuantity(value);
      selected({ selectedQuantity: value });
    }
  };

  return (
    <div id="Quantity" className={`${classes}`}>
      <span className="text-sm text-neutral-500">Quantity</span>
      <div className="flex flex-row gap-4"></div>
      <div className="flex flex-row w-[125px] justify-center items-center gap-3 bg-neutral-50 p-0.5 rounded-md border border-solid border-neutral-200">
        <Button onClick={() => handleQuantityChange(quantity - 1)}>
          <i className="ri-subtract-fill" />
        </Button>
        <div>
          <input
            value={quantity}
            className="w-full bg-transparent text-center"
            min={1}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
          />
        </div>
        <Button onClick={() => handleQuantityChange(quantity + 1)}>
          <i className="ri-add-line" />
        </Button>
      </div>
    </div>
  );
};

export default ProductQuantity;
