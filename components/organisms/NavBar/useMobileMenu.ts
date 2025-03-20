import { useState } from "react";

const useMobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  return { mobileMenuOpen, openMobileMenu, closeMobileMenu };
};

export default useMobileMenu;
