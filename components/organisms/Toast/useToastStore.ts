import { create } from "zustand";

export enum ToastStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  INFO = "INFO",
}

interface ToastState {
  open: boolean;
  badge: string | null;
  icon: string | null;
  message: string | null;
  status: string | null;
  openToast: (open: boolean) => void;
  closeToast: () => void;
  showToast: (
    message: string,
    status: string | null,
    badge: string | null
  ) => void;
  hideToast: () => void;
  setToastContent: (
    message: string,
    status: string | null,
    badge: string | null
  ) => void;
}

const useToastStore = create<ToastState>((set) => ({
  open: false,
  message: null,
  status: null,
  badge: null,
  icon: null,
  openToast: (open) => set({ open }),
  closeToast: () => set({ open: false }),
  showToast: (message, status, badge) => set({ message, status, badge }),
  hideToast: () =>
    set({ message: null, status: null, badge: null, icon: null }),
  setToastContent: (message, status, badge) => set({ message, status, badge }),
}));

export default useToastStore;
