export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum OptionalVariant {
  PRIMARY_HOVER = "primaryHover",
  PRIMARY_FOCUS = "primaryFocus",
  SECONDARY_HOVER = "secondaryHover",
  SECONDARY_FOCUS = "secondaryFocus",
  LINK = "link",
  LINK_HOVER = "linkHover",
  LINK_FOCUS = "linkFocus",
}

export type Variant = ButtonVariant;

export enum ButtonTypeEnum {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "link" | "fullWidth";
  variant?: Variant | OptionalVariant;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  autoFocus?: boolean;
  type?: ButtonTypeEnum;
}
