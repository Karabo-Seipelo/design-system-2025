import { renderHook, act } from "@testing-library/react";
import axios, { AxiosError, AxiosHeaders } from "axios";
import useFormSubmit from "./useFormSubmit";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useFormSubmit", () => {
  const mockUrl = "https://example.com/api/submit";
  const mockSuccessToast = {
    message: "Form submitted successfully!",
    status: "SUCCESS",
    badge: "Success",
  };
  const mockErrorToast = {
    message: "Failed to submit the form.",
    status: "ERROR",
    badge: "Error",
  };

  it("should initialize with default states", () => {
    const { result } = renderHook(() =>
      useFormSubmit({
        url: mockUrl,
        success: mockSuccessToast,
        error: mockErrorToast,
      }),
    );

    expect(result.current.formStatus).toBeNull();
    expect(result.current.formSuccess).toBe(false);
  });

  it("should handle successful form submission", async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 200 });

    const { result } = renderHook(() =>
      useFormSubmit({
        url: mockUrl,
        success: mockSuccessToast,
        error: mockErrorToast,
      }),
    );

    const mockFormData = {
      get: jest.fn((key: string) => {
        switch (key) {
          case "email":
            return "test@example.com";
          case "name":
            return "John Doe";
          case "message":
            return "Hello!";
          default:
            return null;
        }
      }),
    };

    global.FormData = jest.fn(() => mockFormData as unknown as FormData);

    const mockForm = document.createElement("form");
    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: mockForm,
    } as unknown as React.FormEvent<HTMLFormElement>;

    await act(async () => {
      await result.current.submitHandler(mockEvent);
    });

    expect(mockedAxios.post).toHaveBeenCalledWith(mockUrl, {
      email: "test@example.com",
      name: "John Doe",
      message: "Hello!",
    });
    expect(result.current.formStatus).toEqual(mockSuccessToast);
    expect(result.current.formSuccess).toBe(true);
  });

  it("should handle failed form submission", async () => {
    const axosError = {
      isAxiosError: true,
      name: "AxiosError",
      message: "Network Error",
      config: {
        headers: new AxiosHeaders(),
        method: "POST",
        url: mockUrl,
      },
      toJSON: jest.fn(),
    } as AxiosError;

    mockedAxios.post.mockRejectedValueOnce(axosError);

    const { result } = renderHook(() =>
      useFormSubmit({
        url: mockUrl,
        success: mockSuccessToast,
        error: mockErrorToast,
      }),
    );

    const mockFormData = {
      get: jest.fn((key: string) => {
        switch (key) {
          case "email":
            return "test@example.com";
          case "name":
            return "John Doe";
          case "message":
            return "Hello!";
          default:
            return null;
        }
      }),
    };

    global.FormData = jest.fn(() => mockFormData as unknown as FormData);

    const mockForm = document.createElement("form");

    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: mockForm,
    } as unknown as React.FormEvent<HTMLFormElement>;

    await act(async () => {
      await result.current.submitHandler(mockEvent);
    });

    expect(mockedAxios.post).toHaveBeenCalledWith(mockUrl, {
      email: "test@example.com",
      name: "John Doe",
      message: "Hello!",
    });
    expect(result.current.formStatus).toEqual(mockErrorToast);
    expect(result.current.formSuccess).toBe(false);
  });

  it("should handle invalid form element", async () => {
    const { result } = renderHook(() =>
      useFormSubmit({
        url: mockUrl,
        success: mockSuccessToast,
        error: mockErrorToast,
      }),
    );

    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: null,
    } as unknown as React.FormEvent<HTMLFormElement>;

    await act(async () => {
      await result.current.submitHandler(mockEvent);
    });

    expect(result.current.formStatus).toBeNull();
    expect(result.current.formSuccess).toBe(false);
  });
});
