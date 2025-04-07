import "remixicon/fonts/remixicon.css";
import { Button } from "@headlessui/react";
import useMobileMenu from "./useMobileMenu";
import CallToActionButtons, { CallToAction } from "./CallToAction";
import NavLogo from "./NavLogo";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenuDialog from "./MobileNavigation";

export interface SubMenu {
  name: string;
  href: string;
  description?: string;
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

export interface NavProps {
  navItems: NavItem[];
  brand: Brand;
  cart?: boolean;
  callToAction?: CallToAction[];
  classes?: string;
}

const Nav: React.FC<NavProps> = ({
  navItems,
  brand,
  callToAction,
  classes,
  cart = false,
}) => {
  const { mobileMenuOpen, openMobileMenu, closeMobileMenu } = useMobileMenu();
  return (
    <nav>
      <div
        id="Navigation"
        className={`flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8 ${classes}`}
      >
        <div className="flex lg:basis-2/3 lg:justify-start lg:gap-x-[10vw]">
          <NavLogo {...brand} />
          <DesktopNavigation navItems={navItems} />
        </div>
        <div className="flex lg:basis-1/3 lg:justify-end gap-x-4">
          {cart && (
            <div id="ShoppingCart" className="px-4 py-2.5">
              <i
                data-testid="shopping-cart-icon"
                className="ri-shopping-bag-3-line"
              ></i>
            </div>
          )}
          {callToAction && (
            <CallToActionButtons
              buttons={callToAction}
              classes="hidden lg:flex flex-row gap-4"
            />
          )}
          <div id="MobileMenuButton" className="flex lg:hidden">
            <Button
              onClick={openMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <i aria-hidden="true" className="size-6 ri-menu-fill" />
            </Button>
          </div>
        </div>
      </div>
      <MobileMenuDialog
        brand={brand}
        navItems={navItems}
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        callToAction={callToAction}
      />
    </nav>
  );
};

export default Nav;
