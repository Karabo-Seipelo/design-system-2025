import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Button, Input } from "@headlessui/react";

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

interface ControlsProps {
  type: "add" | "remove";
  outOfStock?: boolean;
  classes?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  quantity: number;
  min: number;
  max: number;
}

const Controls: React.FC<ControlsProps> = ({
  type,
  outOfStock = false,
  classes = "",
  onClick,
  quantity,
  min,
  max,
}) => {
  const variantClasses = {
    add: "ri-add-line",
    remove: "ri-subtract-fill",
  };

  const renderTooltip = (type: string) => {
    if (type === "add" && quantity >= max) {
      return <Tooltip content="Insufficient stock" />;
    }
    if (type === "remove" && quantity <= min) {
      return <Tooltip content="Minimum stock required" />;
    }
    return "";
  };

  return (
    <Button
      disabled={outOfStock}
      className={`${classes} disabled:cursor-not-allowed disabled:text-neutral-400`}
      {...(onClick && { onClick })}
    >
      <i className={`${variantClasses[type]}`} />
      {renderTooltip(type)}
    </Button>
  );
};

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
  min = 1,
  max = 10,
  decrement,
  increment,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const handleQuantityChange = (value: number) => {
    if (value < min) {
      setQuantity(min);
      return;
    }

    if (max && value > max) {
      setQuantity(max);
      return;
    }

    setQuantity(value);
  };
  return (
    <div className="flex flex-row w-[125px] justify-center items-center gap-3 bg-neutral-50 p-0.5 rounded-md border border-solid border-neutral-200">
      <Controls
        type="remove"
        outOfStock={outOfStock || quantity <= min}
        classes="relative group"
        onClick={() => handleQuantityChange(quantity - decrement)}
        quantity={quantity}
        min={min}
        max={max}
      />
      <div>
        <Input
          disabled={outOfStock}
          value={quantity}
          name={name}
          type="number"
          className={`w-full bg-transparent text-center`}
        />
      </div>
      <Controls
        type="add"
        outOfStock={outOfStock || quantity >= max}
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
