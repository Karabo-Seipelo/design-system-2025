import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export interface SubMenu {
  name: string;
  description: string;
  href: string;
  icon: any;
}

export interface NavItem {
  name: string;
  href?: string;
  items?: SubMenu[];
}

const MobileNavItems: React.FC<{ item: NavItem }> = ({ item }) => {
  if (item?.items) {
    return (
      <Disclosure as="div" className="-mx-3" key={item.name}>
        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
          {item.name}
          <ChevronDownIcon
            aria-hidden="true"
            className="size-5 flex-none group-data-open:rotate-180"
          />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 space-y-2">
          {item.items.map((subItem) => (
            <DisclosureButton
              key={subItem.name}
              as="a"
              href={subItem.href}
              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
            >
              {subItem.name}
            </DisclosureButton>
          ))}
        </DisclosurePanel>
      </Disclosure>
    );
  }

  return (
    <a
      href={item.href}
      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
    >
      {item.name}
    </a>
  );
};

export default MobileNavItems;
