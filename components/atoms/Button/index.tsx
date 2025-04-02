import { Button as UIButton } from "@headlessui/react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  size?: "default" | "xl" | "2xl" | "link" | "fullWidth";
  variant?:
    | "primary"
    | "primaryHover"
    | "primaryFocus"
    | "secondary"
    | "secondaryHover"
    | "secondaryFocus"
    | "link"
    | "linkHover"
    | "linkFocus";
  disabled?: boolean;
  classes?: string;
  children?: React.ReactNode;
  autoFocus?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  size = "fullWidth",
  variant = "secondary",
  disabled = false,
  classes = "",
  autoFocus,
  children,
  onClick,
}) => {
  const sizeClasses = {
    fullWidth: "w-full gap-1.5 px-4 py-2.5",
    default: "w-[174px] gap-1.5 px-4 py-2.5",
    xl: "w-[182px] gap-1.5 px-5 py-3",
    "2xl": "w-[216px] gap-2.5 px-6 py-4",
    link: "text-base px-0.5",
  };

  const variantClasses = {
    primary:
      "bg-indigo-700 text-white hover:bg-indigo-800 hover:box-shadow: 0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10) focus:bg-indigo-800 focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)] disabled:bg-neutral-100 disabled:text-neutral-400",
    primaryFocus:
      "bg-indigo-800 text-white shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]",
    primaryHover:
      "bg-indigo-800 text-white box-shadow: 0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)",
    secondary:
      "bg-white text-neutral-900 border-[0.5px] border-solid border-neutral-200 hover:bg-neutral-50 hover:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.10)] focus:bg-neutral-50 focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)] disabled:bg-neutral-100 disabled:text-neutral-400",
    secondaryHover:
      "bg-neutral-50 border-neutral-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.10)]",
    secondaryFocus:
      "bg-neutral-50 border-neutral-200 shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]",
    link: "text-indigo-700 hover:text-indigo-800 hover:text-indigo-800 focus:text-indigo-800 focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)] disabled:text-neutral-400",
    linkHover: "text-indigo-800",
    linkFocus: "text-indigo-800 shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]",
  };

  return (
    <UIButton
      disabled={disabled}
      className={`${classes} ${sizeClasses[size]} ${variantClasses[variant]} flex justify-center items-center grow rounded`}
      {...(autoFocus && { autoFocus: true })}
      {...(onClick && { onClick })}
      {...(type && { type })}
    >
      {children}
    </UIButton>
  );
};

export default Button;
