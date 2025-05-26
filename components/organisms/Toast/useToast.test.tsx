import { renderHook, act } from "@testing-library/react";
import useToast from "./useToast";

describe("Toast notifications", () => {
  describe("when displaying a toast", () => {
    it("should open the toast with the correct content", () => {
      const { result } = renderHook(() => useToast());

      act(() => {
        result.current.displayToast({
          message: "Test message",
          status: "SUCCESS",
          badge: "Test badge",
        });
      });

      expect(result.current.open).toBe(true);
      expect(result.current.message).toBe("Test message");
      expect(result.current.status).toBe("SUCCESS");
      expect(result.current.badge).toBe("Test badge");
    });
  });

  describe("when a toast is displayed", () => {
    it("should close toast after timeout", () => {
      jest.useFakeTimers();

      const { result } = renderHook(() => useToast(1000));

      act(() => {
        result.current.displayToast({
          message: "Test message",
          status: "SUCCESS",
          badge: "Test badge",
        });
      });

      expect(result.current.open).toBe(true);

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(result.current.open).toBe(false);
    });
  });

  describe("when the toast is manually closed", () => {
    it("should set open to false", () => {
      const { result } = renderHook(() => useToast());

      act(() => {
        result.current.closeToast();
      });

      expect(result.current.open).toBe(false);
    });
  });
});
