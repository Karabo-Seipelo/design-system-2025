import { create } from "zustand";

interface DialogState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useDialogStore;
