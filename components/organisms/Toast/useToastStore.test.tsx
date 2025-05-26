import { renderHook, act } from "@testing-library/react";
import useToastStore from "./useToastStore";

describe("useToastStore", () => {
  describe("initial state", () => {
    it("Given the store is initialized, Then it should have default values", () => {
      const { result } = renderHook(() => useToastStore());
      expect(result.current.open).toBe(false);
      expect(result.current.message).toBeNull();
      expect(result.current.status).toBeNull();
      expect(result.current.badge).toBeNull();
      expect(result.current.icon).toBeNull();
    });
  });

  describe("opening the toast", () => {
    it("Given the store, When showToast and openToast are called, Then the toast should open with correct content", () => {
      const { result } = renderHook(() => useToastStore());

      act(() => {
        result.current.showToast("Test message", "SUCCESS", "Test badge");
        result.current.openToast(true);
      });

      expect(result.current.open).toBe(true);
      expect(result.current.message).toBe("Test message");
      expect(result.current.status).toBe("SUCCESS");
      expect(result.current.badge).toBe("Test badge");
    });

    it("Given the toast is open, When closeToast is called, Then the toast should close", () => {
      const { result } = renderHook(() => useToastStore());

      act(() => {
        result.current.closeToast();
      });

      expect(result.current.open).toBe(false);
    });

    it("Given the toast has content, When hideToast is called, Then the toast content should be hidden", () => {
      const { result } = renderHook(() => useToastStore());

      act(() => {
        result.current.hideToast();
      });

      expect(result.current.message).toBeNull();
      expect(result.current.status).toBeNull();
      expect(result.current.badge).toBeNull();
      expect(result.current.icon).toBeNull();
    });

    it("Given the store, When setToastContent is called, Then the toast content should be updated", () => {
      const { result } = renderHook(() => useToastStore());

      act(() => {
        result.current.setToastContent("New message", "ERROR", "New badge");
      });

      expect(result.current.message).toBe("New message");
      expect(result.current.status).toBe("ERROR");
      expect(result.current.badge).toBe("New badge");
    });
  });
});
