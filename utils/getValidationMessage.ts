import { ValidationRule } from "$/atoms/TextareaField/interfaces";
import isValidRegex from "./isValidRegex";

const getValidationMessage = (
  value: string,
  rules: ValidationRule[],
): string | null => {
  if (!rules.length || rules.some((rule) => !rule.pattern)) return null;
  if (!rules.every((rule) => isValidRegex(rule.pattern))) return null;
  for (const rule of rules) {
    const regex = new RegExp(rule.pattern);
    if (!regex.test(value)) return rule.message;
  }
  return null;
};
export default getValidationMessage;
