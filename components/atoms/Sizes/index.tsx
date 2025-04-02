import { Button, Input } from "@headlessui/react";

interface SizeProps {
  name: string;
  size: string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "default" | "hover" | "focus" | "selected";
  ariaLabel?: string;
  active: boolean;
  isOutOfStock: boolean;
}

const Size: React.FC<SizeProps> = ({
  name,
  size,
  onClick,
  variant = "default",
  ariaLabel,
  active = false,
  isOutOfStock = false,
}) => {
  const variantClasses = {
    default: `bg-white ${active ? "border-indigo-600" : "border-neutral-200"} hover:bg-neutral-50 hover:border-neutral-200 focus:bg-neutral-50 focus:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed`,
    hover: "bg-neutral-50 border-neutral-200",
    focus: "bg-neutral-50 border-neutral-200",
    selected: "bg-white border-indigo-600",
  };
  return (
    <Button
      {...(onClick && { onClick })}
      className={`flex justify-center items-center w-16 px-5 py-3 rounded border border-solid uppercase ${variantClasses[variant]}`}
      disabled={isOutOfStock}
    >
      <label
        aria-label={ariaLabel ? ariaLabel : `Select size ${size}`}
        htmlFor={String(size)}
      >
        <Input
          type="radio"
          id={String(size)}
          name={name}
          value={String(size)}
          defaultChecked={active}
          className="hidden"
        />
        {size}
      </label>
    </Button>
  );
};

export default Size;
