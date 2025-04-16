import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Input } from "@headlessui/react";
import Controls from "./Controls";

interface QuantitySelectorProps {
  name: string;
  outOfStock: boolean;
  min: number;
  max: number;
  initialQuantity?: number;
  increment: number;
  decrement: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  name,
  initialQuantity = 1,
  outOfStock,
  min,
  max,
  decrement,
  increment,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const handleQuantityChange = (value: number) => {
    if (value >= min && value <= max) {
      setQuantity(value);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      handleQuantityChange(value);
    }
  };

  return (
    <div
      data-testid="quantity-selector"
      className="flex flex-row w-[125px] justify-center items-center gap-3 bg-neutral-50 p-0.5 rounded-md border border-solid border-neutral-200"
    >
      <Controls
        type="remove"
        outOfStock={outOfStock}
        classes="relative group"
        onClick={() => handleQuantityChange(quantity - decrement)}
        quantity={quantity}
        min={min}
        max={max}
      />
      <div>
        <Input
          data-testid="quantity-selector-input"
          disabled={outOfStock}
          value={quantity}
          name={name}
          type="number"
          className={`w-full bg-transparent text-center`}
          onChange={handleInputChange}
        />
      </div>
      <Controls
        type="add"
        outOfStock={outOfStock}
        classes="relative group"
        onClick={() => handleQuantityChange(quantity + increment)}
        quantity={quantity}
        min={min}
        max={max}
      />
    </div>
  );
};

export default QuantitySelector;
