import { TextareaProps } from "@headlessui/react";

export interface TextareaFieldProps extends TextareaProps {
  label: string;
  classes?: string;
  testId?: string;
  characterLimit?: number;
  variant?:
    | "normal"
    | "focus"
    | "disabled"
    | "error"
    | "error-filled"
    | "error-focused";
}

export interface TextareaCharacterCountProps {
  count: number;
  limit: number;
  exceedCharacterLimit: boolean;
  className?: string;
}
