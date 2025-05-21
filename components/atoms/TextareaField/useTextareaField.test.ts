import { renderHook, act } from "@testing-library/react";
import useTextareaField from "./useTextareaField";

describe("useTextareaField", () => {
  const mockOnInput = jest.fn();
  const mockOnBlur = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize state correctly", () => {
    const { result } = renderHook(() =>
      useTextareaField({
        value: "test",
        defaultValue: "default",
        maxLength: 10,
        required: false,
        validationRule: [],
        onInput: mockOnInput,
        onBlur: mockOnBlur,
      }),
    );

    console.log(result.current);
    expect(result.current.isCharacterLimitExceeded).toBe(false);
    expect(result.current.showRequiredError).toBe(false);
    expect(result.current.showErrorMessage).toBe(false);
    expect(result.current.errorMessage).toBe(null);
    expect(result.current.characterCount).toBe(4);
  });

  it("should handle change event correctly", async () => {
    const { result } = renderHook(() =>
      useTextareaField({
        maxLength: 10,
        required: true,
        validationRule: [],
        onInput: mockOnInput,
        onBlur: mockOnBlur,
      }),
    );

    console.log(result.current.characterCount);

    await act(() => {
      result.current.handleChange({
        target: { value: "test" },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    expect(result.current.characterCount).toBe(4);
    expect(result.current.isCharacterLimitExceeded).toBe(false);
  });

  it("should handle blur event correctly", () => {
    const { result } = renderHook(() =>
      useTextareaField({
        value: "",
        defaultValue: "",
        maxLength: 10,
        required: true,
        validationRule: [],
        onInput: mockOnInput,
        onBlur: mockOnBlur,
      }),
    );

    act(() => {
      result.current.handleBlur({
        target: { value: "" },
      } as React.FocusEvent<HTMLTextAreaElement>);
    });

    expect(mockOnBlur).toHaveBeenCalled();
  });
});
