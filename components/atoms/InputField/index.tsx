import { uniqueId } from "lodash";
import classNames from "classnames";
import { Input, InputProps } from "@headlessui/react";

const LABEL_CLASSES = "font-medium text-sm text-neutral-700";
const HINT_CLASSES = "font-normal text-sm text-neutral-500";
const ERROR_HINT_CLASSES = "text-red-600 text-sm font-normal";

export interface InputFieldProps extends InputProps {
  variant?: "normal" | "focus" | "disabled" | "error";
  label?: string;
  name: string;
  hintMessage?: string;
  error?: boolean;
  errorMessage?: string;
}

/**
 *
 * @param {string} label - Text label for the input field
 * @param {boolean} error - Whether the input is in an error state
 * @param {string} errorMessage - Error message to display
 * @param {string} hintMessage - Hint message to display
 * @param {string} variant - Visual style variant
 * @returns
 */
const InputField: React.FC<InputFieldProps> = ({
  label,
  variant = "normal",
  error = false,
  errorMessage,
  hintMessage,
  id,
  className,
  ...args
}) => {
  const inputId = id ?? uniqueId("input-");
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;
  const inputClasses = classNames(
    "border border-solid bg-neutral-50 px-3.5 py-2.5 rounded text-sm",
    {
      "border-neutral-200": !error,
      "border-red-500": error,
      "ring-2 ring-indigo-500 outline outline-offset-2 outline-indigo-200/50":
        variant === "focus",
      "ring-2 ring-red-500 outline outline-offset-2 outline-red-200/50":
        variant === "error",
      "disabled:disabled:border-neutral-100 disabled:text-neutral-400":
        variant === "disabled",
      "focus:ring-2 focus:ring-indigo-500 focus:outline focus:outline-offset-2 focus:outline-indigo-200/50":
        variant === "normal",
    },
  );
  const describedBy = (() => {
    if (error) {
      return errorId;
    }
    if (hintMessage) {
      return hintId;
    }
    return undefined;
  })();

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={inputId} className={`${LABEL_CLASSES}`}>
          {label}
        </label>
      )}
      <Input
        id={inputId}
        className={`${inputClasses}`}
        aria-label={label}
        aria-invalid={error}
        aria-describedby={describedBy}
        aria-required={args.required}
        {...args}
      />
      {error ? (
        <span id={errorId} className={`${ERROR_HINT_CLASSES}`}>
          {errorMessage ?? "Invalid input"}
        </span>
      ) : (
        hintMessage && (
          <span id={hintId} className={`${HINT_CLASSES}`}>
            {hintMessage}
          </span>
        )
      )}
    </div>
  );
};

export default InputField;
