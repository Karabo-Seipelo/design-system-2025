import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Button } from "@headlessui/react";
import { NavItem, Brand } from ".";
import { CallToAction } from "./CallToAction";
import NavLogo from "./NavLogo";
import CallToActionButtons from "./CallToAction";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  brand: Brand;
  callToAction?: CallToAction[];
}

const MobileSubMenu: React.FC<{ item: NavItem }> = ({ item }) => {
  return (
    <Disclosure as="div">
      <DisclosureButton className="text-sm/6 font-semibold text-gray-900">
        {item.name}
        <i className="ri-arrow-down-s-line"></i>
      </DisclosureButton>
      <DisclosurePanel className="p-4">
        {item.items?.map((subItem) => (
          <a
            key={subItem.name}
            href={subItem.href}
            className="block text-sm/6 font-semibold text-gray-900 p-2"
          >
            {subItem.name}
          </a>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
};

const MobileMenuDialog: React.FC<MobileNavigationProps> = ({
  open,
  onClose,
  navItems,
  brand,
  callToAction,
}) => {
  return (
    <Dialog open={open} onClose={onClose} id="MobileMenu" className="lg:hidden">
      <div className="fixed inset-0 z-10">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white h-screen">
          <div className="flex min-h-20 items-center justify-between p-6 lg:px-8">
            <NavLogo {...brand} />
            <div className="flex gap-x-4">
              <div id="ShoppingCartMobile" className="px-4 py-2.5">
                <i className="ri-shopping-bag-3-line"></i>
              </div>
              <Button
                onClick={onClose}
                className="inline-flex items-center size-11 justify-center rounded-md p-2.5 text-gray-700"
              >
                <i className="ri-close-line" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between min-h-[85%]">
            <div className="flex flex-col gap-4 px-6 ">
              {navItems.map((item) => {
                if (item.hasOwnProperty("items")) {
                  return <MobileSubMenu key={item.name} item={item} />;
                }
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
            {callToAction && (
              <CallToActionButtons
                buttons={callToAction}
                classes="lg:hidden flex flex-col gap-4 p-6"
              />
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileMenuDialog;
