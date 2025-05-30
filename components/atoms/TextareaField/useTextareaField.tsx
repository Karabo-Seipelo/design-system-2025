import { useCallback, useState, useEffect } from "react";
import { getValidationMessage, getInitialCharacterCount } from "@utils/index";
import { ValidationRule } from "./interfaces";

export interface UseTextareaFieldArgs {
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  maxLength?: number;
  required?: boolean;
  validationRule?: ValidationRule[];
  onInput?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const useTextareaField = ({
  value = undefined,
  defaultValue = undefined,
  maxLength,
  required,
  validationRule,
  onInput,
  onBlur,
}: UseTextareaFieldArgs) => {
  const hasCharacterLimitExceeded = useCallback(
    (val: string) => {
      if (
        (typeof val === "string" || Array.isArray(val)) &&
        maxLength &&
        val.length > maxLength
      ) {
        return true;
      }
      return false;
    },
    [maxLength],
  );

  const [isCharacterLimitExceeded, setIsCharacterLimitExceeded] =
    useState<boolean>(
      hasCharacterLimitExceeded((defaultValue ?? "").toString()),
    );
  const [showRequiredError, setShowRequiredError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [characterCount, setCharacterCount] = useState(
    getInitialCharacterCount(value ?? defaultValue),
  );

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const limitExceeded = hasCharacterLimitExceeded(event.target.value);
    setCharacterCount(event.target.value.length);
    setIsCharacterLimitExceeded(limitExceeded);
    setShowRequiredError(false);

    const message = getValidationMessage(
      event.target.value,
      validationRule ?? [],
    );
    setShowErrorMessage(!!message);
    setErrorMessage(message);

    onInput?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (required && !event.target.value.trim()) {
      setShowRequiredError(true);
    }
    onBlur?.(event);
  };

  useEffect(() => {
    if (value !== undefined) {
      setCharacterCount(getInitialCharacterCount(value));
      setIsCharacterLimitExceeded(
        hasCharacterLimitExceeded((value ?? "").toString()),
      );
    }

    if (defaultValue !== undefined) {
      const localDefaultValue = defaultValue ?? "";
      const message = getValidationMessage(
        localDefaultValue,
        validationRule ?? [],
      );
      setShowErrorMessage(!!message);
      setErrorMessage(message);
      setShowRequiredError(!!required && !defaultValue?.toString().trim());
    }
  }, [
    value,
    hasCharacterLimitExceeded,
    defaultValue,
    validationRule,
    required,
  ]);

  return {
    isCharacterLimitExceeded,
    showRequiredError,
    showErrorMessage,
    errorMessage,
    characterCount,
    handleChange,
    handleBlur,
  };
};

export default useTextareaField;
