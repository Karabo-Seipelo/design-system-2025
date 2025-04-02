import React from "react";
import "remixicon/fonts/remixicon.css";
import QuantitySelector from "../QuantitySelector";

interface ProductQuantityProps {
  name: string;
  initialQuantity: number;
  stock: number;
  classes?: string;
  outOfStock: boolean;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  name,
  initialQuantity,
  classes = "",
  stock,
  outOfStock = false,
}) => {
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
        min={1}
        max={stock}
        increment={1}
        decrement={1}
      />
    </fieldset>
  );
};

export default ProductQuantity;
