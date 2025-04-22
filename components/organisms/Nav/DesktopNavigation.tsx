import "remixicon/fonts/remixicon.css";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { NavItem } from "./interface";
import { memo } from "react";

interface DesktopNavigationProps {
  navItems: NavItem[];
}

const DesktopSubMenu: React.FC<{ item: NavItem }> = ({ item }) => {
  return (
    <Popover className="relative">
      <PopoverButton className="text-sm/6 font-semibold text-gray-900">
        {item.name}
        <i className="ri-arrow-down-s-line"></i>
      </PopoverButton>
      <PopoverPanel
        transition
        className="absolute top-full z-10 mt-3 w-screen max-w-md overflow-hidden bg-white"
      >
        <div className="p-4">
          {item.items?.map((subItem) => (
            <a
              key={subItem.name}
              href={subItem.href}
              className="block text-sm/6 font-semibold text-gray-900 p-2"
            >
              {subItem.name}
            </a>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
};

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navItems }) => {
  return (
    <div id="desktopMenu" className="hidden lg:flex lg:gap-x-12">
      {navItems.map((item) => {
        if (item.items) {
          return <DesktopSubMenu key={item.name} item={item} />;
        }
        return (
          <a
            key={item.name}
            href={item.href}
            className="text-sm/6 font-semibold text-gray-900"
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

export default memo(DesktopNavigation);
