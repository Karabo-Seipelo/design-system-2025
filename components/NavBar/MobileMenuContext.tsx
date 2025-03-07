import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

interface MobileMenuContextProps {
  mobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextProps | undefined>(
  undefined,
);

export const MobileMenuProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const value = useMemo(
    () => ({ mobileMenuOpen, openMobileMenu, closeMobileMenu }),
    [mobileMenuOpen],
  );

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }
  return context;
};
