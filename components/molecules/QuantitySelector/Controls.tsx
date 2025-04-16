import "remixicon/fonts/remixicon.css";
import { Button } from "@headlessui/react";

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
    return null;
  };

  return (
    <Button
      data-testid={type}
      disabled={outOfStock}
      className={`${classes} disabled:cursor-not-allowed disabled:text-neutral-400`}
      {...(onClick && { onClick })}
    >
      <i className={`${variantClasses[type]}`} />
      {renderTooltip(type)}
    </Button>
  );
};

export default Controls;
