import { ValidationRule } from "$/atoms/TextareaField/interfaces";
import { ValidationStrategy } from "./interfaces";
import { createRegexStrategy } from "./ValidationStrategies";

const getValidationMessage = (
  value: string | number | readonly string[] | undefined,
  rules: ValidationRule[],
): string | null => {
  const strategies = rules
    .map(createRegexStrategy)
    .filter((s): s is ValidationStrategy => s !== null);

  for (const strategy of strategies) {
    if (!strategy.validate(value)) return strategy.message;
  }

  return null;
};

export default getValidationMessage;
