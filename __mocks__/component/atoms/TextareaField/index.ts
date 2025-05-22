import * as useTextareaFieldModule from "$/atoms/TextareaField/useTextareaField";

export const mockUseTextareaField = (
  state: Partial<ReturnType<typeof useTextareaFieldModule.default>>,
) => {
  const mock = {
    isCharacterLimitExceeded: false,
    showRequiredError: false,
    showErrorMessage: false,
    errorMessage: null,
    characterCount: 0,
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    ...state,
  };
  jest.spyOn(useTextareaFieldModule, "default").mockReturnValue(mock);
  return mock;
};
