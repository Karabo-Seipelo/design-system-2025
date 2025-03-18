import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export interface SubMenu {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface NavItem {
  name: string;
  href: string;
  items?: SubMenu[];
}

const DesktopNavItems: React.FC<{ item: NavItem }> = ({ item }) => {
  if (item.items) {
    return (
      <Popover className="relative" key={item.name}>
        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
          {item.name}
          <ChevronDownIcon
            aria-hidden="true"
            className="size-5 flex-none text-gray-400"
          />
        </PopoverButton>
        <PopoverPanel
          transition
          className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
        >
          <div className="p-4">
            {item.items.map((subItem) => (
              <div
                key={subItem.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <subItem.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div className="flex-auto">
                  <Link
                    href={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{subItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </PopoverPanel>
      </Popover>
    );
  }

  return (
    <Link href={item.href} className="text-sm/6 font-semibold text-gray-900">
      {item.name}
    </Link>
  );
};

export default DesktopNavItems;
