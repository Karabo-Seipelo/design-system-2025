import NavLogo from "./NavLogo";
import useMobileMenu from "./useMobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuDialog from "./MobileMenuDialog";
import DesktopNavigation from "./DesktopNavigation";
import CallToActionButtons, { CallToAction } from "./CallToAction";

export interface SubMenu {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export interface NavItem {
  name: string;
  href?: string;
  items?: SubMenu[];
}

export interface Brand {
  name: string;
  imageUrl: string;
  href?: string;
}

export interface NavBarProps {
  navItems: NavItem[];
  callToAction?: CallToAction[];
  brand: Brand;
  classes?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  navItems,
  brand,
  callToAction,
  classes = "",
}) => {
  const { mobileMenuOpen, openMobileMenu, closeMobileMenu } = useMobileMenu();

  return (
    <header className={classes}>
      <nav
        aria-label="Global"
        className={`mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ${classes}`}
      >
        <div className="flex lg:flex-3">
          <NavLogo {...brand} />
        </div>
        <div className="flex lg:hidden">
          <MobileMenuButton onClick={openMobileMenu} />
        </div>
        <DesktopNavigation navItems={navItems} />
        {callToAction && (
          <CallToActionButtons
            buttons={callToAction}
            classes="hidden lg:flex flex-row gap-4"
          />
        )}
      </nav>
      <MobileMenuDialog
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        brand={brand}
        callToAction={callToAction}
      />
    </header>
  );
};

export default NavBar;
