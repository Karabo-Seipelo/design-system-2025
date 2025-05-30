import { FormEvent } from "react";
import { renderHook, act } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockShowToast = jest.fn();
const mockUseToast = jest.fn(() => ({ displayToast: mockShowToast }));
jest.mock("$/organisms/Toast/useToast", () => mockUseToast);

import useSubmitNewsletter from "./useSubmitNewsletter";

describe("useSubmitNewsletter", () => {
  const mockOnSubmit = jest.fn();
  const preventDefault = jest.fn();
  const event = {
    preventDefault,
    currentTarget: global.FormData,
  } as unknown as FormEvent<HTMLFormElement>;
  const mockToast = {
    success: { message: "Success!", status: "success", badge: "✔" },
    error: { message: "Error!", status: "error", badge: "✖" },
  };

  const setup = () => {
    const { result } = renderHook(() =>
      useSubmitNewsletter({
        onSubmit: mockOnSubmit,
        toast: mockToast,
        inputName: "email",
      }),
    );
    return result.current.submitHandler;
  };

  beforeAll(() => {
    global.FormData = jest.fn(() => ({
      get: jest.fn().mockImplementation((key: string) => {
        if (key === "email") {
          return "test@example.com";
        }
      }),
    })) as unknown as typeof FormData;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("when the user submits the form", () => {
    it("prevent the default browser submission", async () => {
      const submitHandler = setup();

      await act(async () => {
        await submitHandler(event);
      });

      expect(preventDefault).toHaveBeenCalled();
    });

    it("submits the user's email address", async () => {
      const submitHandler = setup();

      await act(async () => {
        await submitHandler(event);
      });

      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith("test@example.com");
    });

    it("shows an error toast if submission fails", async () => {
      mockOnSubmit.mockRejectedValueOnce(new Error("Submission failed"));
      const submitHandler = setup();

      await act(async () => {
        await submitHandler(event);
      });

      expect(mockShowToast).toHaveBeenCalledWith({
        message: "Error!",
        status: "error",
        badge: "✖",
      });
    });
  });
});
