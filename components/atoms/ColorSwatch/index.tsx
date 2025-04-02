import { Button, Input } from "@headlessui/react";
import "remixicon/fonts/remixicon.css";

interface ColorSwatchProps {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?:
    | "default"
    | "hover"
    | "focus"
    | "selected"
    | "outOfstock"
    | "selectedOutOfStock";
  active: boolean;
  isOutOfStock?: boolean;
  color: string;
  ariaLabel?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  onClick,
  variant = "default",
  color,
  ariaLabel,
  active = false,
  isOutOfStock = false,
}) => {
  const variantClasses = {
    default: `outline outline-offset-1 ${active ? "outline-indigo-600" : "outline-transparent"} hover:outline-indigo-200 focus:outline-indigo-200 focus:outline-4`,
    hover: "outline outline-offset-1 outline-indigo-200",
    focus: "outline outline-offset-1 outline-indigo-200 outline-4",
    selected: `outline outline-offset-1  ${active ? "outline-indigo-600" : "outline-transparent"}`,
    outOfstock: "",
    selectedOutOfStock: "",
  };

  return (
    <Button
      {...(onClick && { onClick })}
      className={`flex relative rounded-full w-[40px] h-[40px] items-center justify-center ${variantClasses[variant]}`}
      style={{ backgroundColor: color }}
    >
      <label
        className={`flex relative rounded-full w-[40px] h-[40px] items-center justify-center`}
        aria-label={ariaLabel ?? `Select color ${color}`}
        htmlFor={color}
      >
        {isOutOfStock && (
          <div className="w-[125%] h-[1px] bg-neutral-600 -rotate-45 absolute" />
        )}
        {active && !isOutOfStock && (
          <i className="ri-check-fill text-white w-15 h-15" />
        )}
        <Input
          type="radio"
          id={color}
          name={name}
          value={color}
          defaultChecked={active}
          className="hidden"
        />
      </label>
    </Button>
  );
};

export default ColorSwatch;
