import { Button as UIButton } from "@headlessui/react";
import classNames from "classnames";

type OptionalVariant =
  | "primaryHover"
  | "primaryFocus"
  | "secondaryHover"
  | "secondaryFocus"
  | "link"
  | "linkHover"
  | "linkFocus";

type Variant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "link" | "fullWidth";
  variant?: Variant | OptionalVariant;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  autoFocus?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "secondary",
  disabled = false,
  className = "",
  autoFocus,
  children,
  ...props
}) => {
  const paddingClasses = {
    sm: "px-0.5 py-0",
    md: "px-3.5 py-2.5",
    lg: "px-4 py-2.5",
    xl: "px-5 py-3",
    "2xl": "px-6 py-4",
    link: "px-0.5 py-1",
    fullWidth: "",
  };

  const heightClasses = {
    sm: "h-4",
    md: "h-10",
    lg: "h-11",
    xl: "h-12",
    "2xl": "h-14",
    link: "",
    fullWidth: "",
  };

  const secondarySizeClasses = {
    sm: "px-[5px] py-[3px]",
    md: "px-[13px] py-[9px]",
    lg: "px-[15px] py-[9px]",
    xl: "px-[19px] py-[11px]",
    "2xl": "px-[23px] py-[15px]",
    link: "",
    fullWidth: "",
  };

  const fontSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-base",
    "2xl": "text-lg",
    link: "",
    fullWidth: "",
  };

  const spacingClasses = {
    sm: "gap-x-1",
    md: "gap-x-1.5",
    lg: "gap-x-2",
    xl: "gap-x-2",
    "2xl": "gap-x-3",
    link: "",
    fullWidth: "",
  };

  const variantClasses = {
    primary: classNames(
      "bg-indigo-700",
      "shadow-custom",
      "text-white",
      "hover:bg-indigo-800",
      "focus:bg-indigo-800",
    ),
    primaryFocus: classNames("shadow-custom", "text-white", "bg-indigo-800"),
    primaryHover: classNames("shadow-custom", "text-white", "bg-indigo-800"),
    secondary: classNames(
      "border border-neutral-200",
      "bg-white",
      "shadow-custom",
      "text-neutral-900",
      "hover:bg-neutral-50",
      "focus:bg-neutral-50",
    ),
    secondaryHover: classNames(
      "border border-neutral-200",
      "shadow-custom",
      "text-neutral-900",
      "bg-neutral-50",
    ),
    secondaryFocus: classNames(
      "border border-neutral-200",
      "shadow-custom",
      "text-neutral-900",
      "bg-neutral-50",
    ),
    link: "text-indigo-700 hover:text-indigo-800 hover:text-indigo-800 focus:text-indigo-800 focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)] disabled:text-neutral-400",
    linkHover: "",
    linkFocus: "",
  };

  const variantDisabledClasses = {
    primary: classNames(
      "disabled:bg-neutral-100",
      "disabled:text-neutral-400",
      "disabled:cursor-not-allowed",
      "disabled:shadow-none",
    ),
    secondary: classNames(
      "disabled:bg-neutral-100",
      "disabled:text-neutral-400",
      "disabled:cursor-not-allowed",
      "disabled:shadow-none",
    ),
    primaryHover: "",
    primaryFocus: "",
    secondaryHover: "",
    secondaryFocus: "",
    link: "",
    linkHover: "",
    linkFocus: "",
  };

  const commonClasses = classNames(
    "inline-flex items-center justify-center rounded font-medium outline-none border-none cursor-pointer",
    "focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]",
    "transition-colors",
    "text-nowrap",
  );

  return (
    <UIButton
      disabled={disabled}
      className={classNames(
        commonClasses,
        heightClasses[size],
        variant === "secondary"
          ? secondarySizeClasses[size]
          : paddingClasses[size],
        variantDisabledClasses[variant],
        variantClasses[variant],
        fontSizeClasses[size],
        paddingClasses[size],
        spacingClasses[size],
        className || "",
      )}
      {...(autoFocus && { autoFocus: true })}
      {...props}
    >
      {children}
    </UIButton>
  );
};

export default Button;
