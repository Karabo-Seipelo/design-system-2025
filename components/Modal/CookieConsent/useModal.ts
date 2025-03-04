import { useState, useCallback } from "react";

const useModal = (open: boolean) => {
  const [isOpen, setIsOpen] = useState(open);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return { isOpen, openModal, closeModal };
};

export default useModal;
