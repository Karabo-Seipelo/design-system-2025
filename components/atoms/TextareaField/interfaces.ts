import { TextareaProps } from "@headlessui/react";

export interface ValidationRule {
  pattern: string;
  message: string;
}

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
    | "required"
    | "error-filled"
    | "error-focused";
  validationRule?: ValidationRule[];
  requiredMessage?: string;
}

export interface TextareaCharacterCountProps {
  count: number;
  limit: number;
  exceedCharacterLimit: boolean;
  className?: string;
}
