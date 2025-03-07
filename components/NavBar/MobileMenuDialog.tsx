import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import MobileNavItems from "./MobileNavItems";
import NavLogo from "./NavLogo";
import { NavItem, Brand } from "./index";
import CallToActionButtons, { CallToAction } from "./CallToAction";

interface MobileMenuDialogProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  brand: Brand;
  callToAction?: CallToAction[];
}

const MobileMenuDialog: React.FC<MobileMenuDialogProps> = ({
  open,
  onClose,
  navItems,
  brand,
  callToAction,
}) => {
  return (
    <Dialog open={open} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-10">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <NavLogo {...brand} />
            <button
              type="button"
              onClick={onClose}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="justify-between flex-1 flex flex-col">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <MobileNavItems key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>
            {callToAction && (
              <CallToActionButtons
                buttons={callToAction}
                classes="lg:hidden flex flex-col gap-4  justify-end"
              />
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileMenuDialog;
