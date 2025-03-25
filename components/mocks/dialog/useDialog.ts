import useDialogStore from "./useDialogStore";

const useDialog = () => {
  const { isOpen, open, close } = useDialogStore();

  return { isOpen, open, close };
};

export default useDialog;
