import * as useToastModule from "$/organisms/Toast/useToast";

export const mockUseToast = (
  state: Partial<ReturnType<typeof useToastModule.default>>,
) => {
  const mock = {
    displayToast: jest.fn(),
    open: false,
    openToast: jest.fn(),
    closeToast: jest.fn(),
    showToast: jest.fn(),
    hideToast: jest.fn(),
    message: null,
    badge: null,
    icon: null,
    status: null,
    setToastContent: jest.fn(),
    ...state,
  };
  jest.spyOn(useToastModule, "default").mockReturnValue(mock);
  return mock;
};
