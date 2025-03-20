import { PopoverGroup } from "@headlessui/react";
import DesktopNavItems from "./DesktopNavItems";
import { NavItem } from "./index";

interface DesktopNavigationProps {
  navItems: NavItem[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navItems }) => (
  <PopoverGroup className="hidden lg:flex lg:gap-x-12">
    {navItems.map((item) => (
      <DesktopNavItems key={item.name} item={item} />
    ))}
  </PopoverGroup>
);

export default DesktopNavigation;
