import { useCallback, useState, useEffect } from "react";
import { getValidationMessage, getInitialCharacterCount } from "@utils/index";

const useTextareaField = ({
  value,
  defaultValue,
  maxLength,
  required,
  requiredMessage,
  validationRule,
  onInput,
  onBlur,
}: any) => {
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
  }, [value, hasCharacterLimitExceeded]);

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
