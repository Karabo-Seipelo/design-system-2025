import { Tab } from "@headlessui/react";

const SpecificationTab: React.FC<{ name: string }> = ({ name }) => (
  <Tab className="first:pl-0 p-4 relative z-10 font-medium text-base text-neutral-600 border-b-2 border-spacing-[100px] border-solid border-transparent data-[selected]:border-indigo-700 data-[selected]:text-indigo-700 focus-visible:outline-none focus-visible:border-indigo-300 focus-visible:text-indigo-300 hover:border-indigo-300 hover:text-indigo-300">
    {name}
  </Tab>
);

export default SpecificationTab;
