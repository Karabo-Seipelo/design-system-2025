import { render, screen, fireEvent } from "@testing-library/react";
import Toast from "./index";
import useToast from "./useToast";

jest.mock("./useToast");

const useToastMock = useToast as jest.MockedFunction<typeof useToast>;

describe("Toast", () => {
  const basicToastProps = {
    displayToast: jest.fn(),
    open: true,
    openToast: jest.fn(),
    closeToast: jest.fn(),
    showToast: jest.fn(),
    setToastContent: jest.fn(),
    hideToast: jest.fn(),
    message: "Operation successful",
    badge: "Success",
    icon: null,
    status: "SUCCESS",
  };
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders SUCCESS toast with correct classes and content", () => {
    useToastMock.mockReturnValue(basicToastProps);

    render(
      <Toast status="SUCCESS" badge="Success" message="Operation successful" />,
    );

    const toast = screen.getByTestId("toast");
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveClass("bg-green-50");
    expect(screen.getByText("Success")).toHaveClass("text-green-700");
  });

  it("renders ERROR toast with correct classes and content", () => {
    useToastMock.mockReturnValue({
      ...basicToastProps,
      open: true,
      closeToast: jest.fn(),
      status: "ERROR",
      message: "Something went wrong",
      badge: "Error",
    });

    render(
      <Toast status="ERROR" badge="Error" message="Something went wrong" />,
    );

    const toast = screen.getByTestId("toast");
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveClass("bg-red-50");
    expect(screen.getByText("Error")).toHaveClass("text-red-800");
  });

  it("calls closeToast when Dialog onClose is triggered", () => {
    const closeToast = jest.fn();
    useToastMock.mockReturnValue({
      ...basicToastProps,
      open: true,
      closeToast,
      status: "SUCCESS",
      message: "Closed",
      badge: "Closed",
    });

    render(<Toast status="SUCCESS" badge="Closed" message="Closed" />);
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
    expect(closeToast).toHaveBeenCalled();
  });

  it("does not render toast when open is false", () => {
    useToastMock.mockReturnValue({
      ...basicToastProps,
      open: false,
      closeToast: jest.fn(),
      status: "SUCCESS",
      message: "Hidden",
      badge: "Hidden",
    });

    render(<Toast status="SUCCESS" badge="Hidden" message="Hidden" />);
    expect(screen.queryByTestId("toast")).not.toBeInTheDocument();
  });

  it("passes autoDissmiss prop to useToast", () => {
    useToastMock.mockReturnValue({
      ...basicToastProps,
      open: true,
      closeToast: jest.fn(),
      status: "SUCCESS",
      message: "Auto",
      badge: "Auto",
    });

    render(
      <Toast
        autoDissmiss={3000}
        status="SUCCESS"
        badge="Auto"
        message="Auto"
      />,
    );
    expect(useToastMock).toHaveBeenCalledWith(3000);
  });
});
