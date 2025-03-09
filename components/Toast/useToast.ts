import { useEffect } from "react";
import useToastStore from "./useToastStore";

export type Toast = {
  badge: string;
  message: string;
  icon: string;
};

const useToast = (timeout: number = 4000) => {
  const { showToast, hideToast, message, badge, icon, status } =
    useToastStore();

  useEffect(() => {
    if (message && timeout) {
      const timer = setTimeout(() => {
        hideToast();
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [hideToast, timeout, message]);

  return { showToast, hideToast, message, badge, icon, status };
};

export default useToast;
