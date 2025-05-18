import React, { useState, useCallback } from "react";
import { Textarea, Field, Label } from "@headlessui/react";
import classNames from "classnames";
import { TextareaFieldProps } from "./interfaces";
import TextareaCharacterCount from "./TextareaCharacterCount";
import { uniqueId } from "lodash";

const TextareaField = ({
  label,
  variant = "normal",
  maxLength,
  ...props
}: TextareaFieldProps) => {
  const getInitialCharacterCount = (value: unknown) => {
    if (typeof value === "string" || Array.isArray(value)) {
      return value.length;
    }
    return 0;
  };
  const hasCharacterLimitExceeded = useCallback(
    (value: string) => {
      if (
        (typeof value === "string" || Array.isArray(value)) &&
        maxLength &&
        value.length > maxLength
      ) {
        return true;
      }
      return false;
    },
    [maxLength],
  );
  const [isCharacterLimitExceeded, setIsCharacterLimitExceeded] =
    useState<boolean>(
      hasCharacterLimitExceeded((props.defaultValue ?? "").toString()),
    );
  const [characterCount, setCharacterCount] = useState(
    getInitialCharacterCount(props.defaultValue),
  );
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const charCount = hasCharacterLimitExceeded(event.target.value);
    setCharacterCount(event.target.value.length);
    setIsCharacterLimitExceeded(charCount);
    if (props.onInput) {
      props.onInput(event);
    }
  };
  const textareaClasses = classNames(
    "bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200  h-[128px]",
    "placeholder:text-neutral-300",
    "disabled:text-neutral-400",
    "overflow-y-auto resize-none",
    {
      "ring-2 ring-red-500 outline outline-offset-2 outline-red-200/50":
        variant === "error" || isCharacterLimitExceeded,
      "text-neutral-400": variant === "disabled",
      "ring-2 ring-indigo-500 outline outline-offset-2 outline-indigo-200/50":
        variant === "focus",
      "focus:ring-2 focus:ring-indigo-500 focus:outline focus:outline-offset-2 focus:outline-indigo-200/50":
        variant === "normal",
    },
  );
  const fieldClasses = classNames("flex flex-col gap-2", props.className);
  return (
    <Field data-testid="textareaField" className={fieldClasses}>
      <Label
        htmlFor={props.id ?? `${label}-${uniqueId}`}
        className="font-medium text-sm"
      >
        {label}
      </Label>
      <Textarea
        id={props.id ?? `${label}-${uniqueId}`}
        className={textareaClasses}
        onInput={handleChange}
        {...props}
      />
      {maxLength && (
        <TextareaCharacterCount
          count={characterCount}
          limit={maxLength ?? 0}
          exceedCharacterLimit={isCharacterLimitExceeded}
          className="mt-1"
        />
      )}
    </Field>
  );
};

export default TextareaField;
