import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      aria-label="Open mobile menu"
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon aria-hidden="true" className="size-6" />
    </button>
  );
};

export default MobileMenuButton;
