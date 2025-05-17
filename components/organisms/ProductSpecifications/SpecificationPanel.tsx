import { TabPanel } from "@headlessui/react";
import Icon from "$/atoms/Icon";
import { Specifications } from "./interface";
import Image from "next/image";

const SpecificationPanel: React.FC<Specifications> = ({
  title,
  description,
  image,
  list,
}) => (
  <TabPanel className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
    <div className="lg:col-span-4">
      <div className="relative w-full min-h-[180px] md:min-h-[400px] lg:min-h-[200px] overflow-hidden rounded-lg">
        <Image src={image.src} alt={image.alt} fill />
      </div>
    </div>
    <div className="flex flex-col lg:col-span-8 gap-12">
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-2xl text-neutral-900">{title}</h3>
        <div
          className="font-normal text-base text-neutral-600"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {list.map(({ icon, text }, index) => (
          <li key={`${icon}-${index}-${title}`} className="flex gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-3 shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
              <Icon name={icon} size="xxlarge" color="primary" />
            </div>
            <div className="font-normal text-base text-neutral-600 flex flex-col items-start justify-center gap-2 py-2.5">
              {text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </TabPanel>
);

export default SpecificationPanel;
