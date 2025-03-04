import { useState } from "react";

const useModal = (open: boolean) => {
  const [isOpen, setIsOpen] = useState(open);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};

export default useModal;
