import { useEffect } from "react";
import useToastStore from "./useToastStore";

export type Toast = {
  status?: string;
  badge?: string;
  message?: string;
  icon?: string;
  autoDissmiss?: number;
};

const useToast = (timeout: number = 4000) => {
  const {
    open,
    openToast,
    closeToast,
    showToast,
    hideToast,
    message,
    badge,
    icon,
    status,
    setToastContent,
  } = useToastStore();

  const displayToast = ({
    message,
    status,
    badge,
  }: {
    message: string;
    status: string | null;
    badge: string | null;
  }) => {
    if (message && status && badge) {
      showToast(message, status, badge);
      openToast(true);
    }
  };

  useEffect(() => {
    if (message && timeout) {
      const timer = setTimeout(() => {
        closeToast();
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [timeout, message, closeToast]);

  return {
    displayToast,
    open,
    openToast,
    closeToast,
    showToast,
    setToastContent,
    hideToast,
    message,
    badge,
    icon,
    status,
  };
};

export default useToast;
