import { ValidationRule } from "$/atoms/TextareaField/interfaces";
import isValidRegex from "../isValidRegex";
import { ValidationStrategy } from "../interfaces";

const createRegexStrategy = (
  rule: ValidationRule,
): ValidationStrategy | null => {
  if (!rule.pattern || !isValidRegex(rule.pattern)) return null;
  return {
    message: rule.message,
    validate: (value) => {
      const stringValye = value !== undefined ? value.toString() : "";
      return new RegExp(rule.pattern).test(stringValye);
    },
  };
};

export default createRegexStrategy;
