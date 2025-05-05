import { Button, Input } from "@headlessui/react";
import classNames from "classnames";
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
  size?: "default" | "sm" | "lg";
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  onClick,
  variant = "default",
  color,
  ariaLabel,
  active,
  isOutOfStock = false,
  size = "default",
}) => {
  const variantClasses = {
    default: `outline outline-offset-2 ${active ? "outline-indigo-600" : "outline-transparent"} hover:outline-offset-0 hover:outline-indigo-200 focus:outline-indigo-200 focus:outline-offset-0 focus:outline-2`,
    hover: "outline outline-offset-1 outline-indigo-200",
    focus: "outline outline-offset-1 outline-indigo-200 outline-2",
    selected: `outline outline-offset-1  ${active ? "outline-indigo-600" : "outline-transparent"}`,
    outOfstock: "",
    selectedOutOfStock: "",
  };

  const sizeClasses = {
    default: "w-[40px] h-[40px]",
    sm: "w-[20px] h-[20px]",
    lg: "w-[50px] h-[50px]",
  };

  const commonClasses = classNames(
    "flex relative rounded-full items-center justify-center",
  );
  const normalizeColor = (color: string) => {
    if (color.toLowerCase() === "white") return "#ffffff";
    if (color.startsWith("#") && color.length === 4) {
      return `#${color
        .slice(1)
        .split("")
        .map((c) => c + c)
        .join("")}`;
    }
    return color.toLowerCase();
  };

  const borderColor =
    normalizeColor(color) === "#ffffff" ? "outline-slate-600 outline-2" : "";
  const checkColor =
    normalizeColor(color) === "#ffffff" ? "text-black" : "text-white";

  return (
    <Button
      {...(onClick && { onClick })}
      className={`${commonClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${borderColor}`}
      style={{ backgroundColor: color }}
      data-testid="color-swatch"
    >
      <label
        className={`${commonClasses}`}
        aria-label={ariaLabel ?? `Select color ${color}`}
        htmlFor={color}
      >
        {isOutOfStock && (
          <div
            data-testid="out-of-stock-line"
            className="w-[125%] h-[1px] bg-neutral-600 -rotate-45 absolute"
          />
        )}
        {active && !isOutOfStock && (
          <i className={`ri-check-fill w-15 h-15 ${checkColor}`} />
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
