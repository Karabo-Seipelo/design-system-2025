import React from "react";
import { TabGroup, TabList, TabPanels } from "@headlessui/react";
import SpecificationTab from "./SpecificationTab";
import SpecificationPanel from "./SpecificationPanel";
import { ProductSpecificationsProps } from "./interface";

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  title,
  description,
  specifications,
}) => {
  return (
    <div data-testid="product-specifications" className="flex flex-col gap-16">
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
          className="line-tab flex jestify-center relative overflow-auto mb-2"
        >
          {specifications.map(({ name }, index) => (
            <SpecificationTab key={`${name}-${index}`} name={name} />
          ))}
        </TabList>
        <TabPanels>
          {specifications.map(
            ({ name, title, description, image, list }, index) => (
              <SpecificationPanel
                key={`${title}-${index}`}
                name={name}
                title={title}
                description={description}
                image={image}
                list={list}
              />
            ),
          )}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ProductSpecifications;
