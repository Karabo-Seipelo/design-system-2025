import * as useFormSubmitModule from "$/organisms/Contact/useFormSubmit";

export const mockUseFormSubmit = (
  state: Partial<ReturnType<typeof useFormSubmitModule.default>>,
) => {
  const mock = {
    submitHandler: jest.fn(),
    formStatus: null,
    formSuccess: false,
    setFormStatus: jest.fn(),
    setFormSuccess: jest.fn(),
    ...state,
  };
  jest.spyOn(useFormSubmitModule, "default").mockReturnValue(mock);
  return mock;
};
