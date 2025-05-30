import { useRef } from "react";
import { Textarea, Field, Label } from "@headlessui/react";
import classNames from "classnames";
import { TextareaFieldProps } from "./interfaces";
import TextareaCharacterCount from "./TextareaCharacterCount";
import { uniqueId } from "lodash";
import useTextareaField from "./useTextareaField";

const TextareaField = ({
  label,
  variant = "normal",
  maxLength,
  required,
  requiredMessage,
  validationRule,
  ...props
}: TextareaFieldProps) => {
  const idRef = useRef(props.id ?? uniqueId("textarea-"));
  const {
    isCharacterLimitExceeded,
    showRequiredError,
    showErrorMessage,
    errorMessage,
    characterCount,
    handleChange,
    handleBlur,
  } = useTextareaField({
    value: props.value,
    defaultValue: props.defaultValue,
    maxLength,
    required,
    validationRule,
    onInput: props.onInput,
    onBlur: props.onBlur,
  });

  const fieldClasses = classNames("flex flex-col gap-2", props.className);
  const textareaClasses = classNames(
    "bg-neutral-50 h-[128px]",
    "rounded border border-solid border-neutral-200",
    "px-3.5 py-2.5",
    "placeholder:text-neutral-300",
    "disabled:text-neutral-400",
    "overflow-y-auto resize-none",
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:outline-offset-2 focus:outline-indigo-200/50",
    {
      "ring-2 ring-red-300 bg-neutral-50 focus:outline focus:outline-offset-2 focus:outline-red-200/50":
        showRequiredError || isCharacterLimitExceeded || showErrorMessage,
      "outline-none ring-2 ring-indigo-500 outline-offset-2 outline-indigo-200/50":
        variant === "focus",
      "text-neutral-400": variant === "required",
    },
  );

  return (
    <Field data-testid="textareaField" className={fieldClasses}>
      <Label htmlFor={idRef.current} className="font-medium text-sm">
        {label}
      </Label>
      <Textarea
        id={idRef.current}
        className={textareaClasses}
        onInput={handleChange}
        onBlur={handleBlur}
        name={props.name ?? label}
        {...props}
      />
      <div className="flex flex-row items-center justify-between">
        <div>
          {showErrorMessage && !showRequiredError && (
            <span className="font-normal text-sm text-red-600">
              {errorMessage}
            </span>
          )}
          {showRequiredError && !showErrorMessage && (
            <span className="font-normal text-sm text-red-600">
              {requiredMessage}
            </span>
          )}
        </div>
        {maxLength && !showRequiredError && (
          <TextareaCharacterCount
            count={characterCount}
            limit={maxLength}
            exceedCharacterLimit={isCharacterLimitExceeded}
            className="mt-1"
          />
        )}
      </div>
    </Field>
  );
};

export default TextareaField;
