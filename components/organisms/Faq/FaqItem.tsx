import { FaqItemProps } from "./interfaces";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Icon from "$/atoms/Icon";

const FaqItem: React.FC<FaqItemProps> = ({
  title,
  description,
  showDivider,
}) => (
  <Disclosure
    as="div"
    defaultOpen={true}
    className="flex flex-col gap-4 rounded-xl"
  >
    {({ open }) => (
      <>
        <DisclosureButton className="group flex w-full justify-between">
          <span className="font-medium text-lg text-neutral-900 text-left">
            {title}
          </span>
          {open ? (
            <Icon name="add-circle" size="xxlarge" color="gray" />
          ) : (
            <Icon name="indeterminate-circle" size="xxlarge" color="gray" />
          )}
        </DisclosureButton>
        <DisclosurePanel className="font-normal text-base text-neutral-600 text-left">
          {description}
        </DisclosurePanel>
        {showDivider && <div className="h-px bg-neutral-300" />}
      </>
    )}
  </Disclosure>
);

export default FaqItem;
