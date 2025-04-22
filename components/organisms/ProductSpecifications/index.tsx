import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Icon from "$/atoms/Icon";

interface SpecificationList {
  icon: string;
  text: string;
}

interface Image {
  src: string;
  alt: string;
}

interface Specifications {
  name: string;
  title: string;
  description: string;
  image: Image;
  list: SpecificationList[];
}

interface ProductSpecificationsProps {
  title: string;
  description: string;
  specifications: Specifications[];
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  title,
  description,
  specifications,
}) => {
  return (
    <div className="flex flex-col px-4 py-12 gap-16">
      <div className="flex flex-col gap-6">
        <h2
          data-testId="title"
          className="text-3xl text-neutral-900 font-semibold md:text-5xl"
        >
          {title}
        </h2>
        <div
          className="font-normal text-lg text-neutral-600"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <TabGroup className="flex flex-col gap-8">
        <TabList
          as="div"
          className="flex jestify-center overflow-auto border-b-2 border-solid border-neutral-300 "
        >
          {specifications.map(({ name }, index) => (
            <Tab
              key={index}
              className="first:pl-0 p-4 font-medium text-base text-neutral-600 border-b-2 border-spacing-[100px] border-solid border-transparent data-[selected]:border-indigo-700 data-[selected]:text-indigo-700 focus-visible:outline-none focus-visible:border-indigo-300 focus-visible:text-indigo-300 hover:border-indigo-300 hover:text-indigo-300"
            >
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {specifications.map(({ title, description, image, list }, index) => (
            <TabPanel
              className="grid grid-cols-4 md:grid-cols-6 lg:grid-col-12 gap-8"
              key={index}
            >
              <div className="col-span-4 md:col-span-6 lg:col-span-3">
                <img
                  className="object-cover rounded"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
              <div className="col-span-4 md:col-span-6 lg:col-span-8 gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-2xl text-neutral-900">
                    {title}
                  </h3>
                  <div
                    className="font-normal text-base text-neutral-600"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>

                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {list.map(({ icon, text }, index) => (
                    <li key={index} className="flex gap-4">
                      <Icon icon={icon} size="xxlarge" color="primary" />
                      <div className="font-normal text-base text-neutral-600 flex flex-col items-start justify-center gap-2 py-2.5">
                        {text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ProductSpecifications;
