import { Info } from "$/organisms/ProductDetails/fetchProductDetailsAPI";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import "remixicon/fonts/remixicon.css";

interface ProductInfoProps {
  info: Info[];
}
const ProductInfo: React.FC<ProductInfoProps> = ({ info }) => {
  return (
    <div>
      {info?.map(({ title, description }) => {
        const key = `${title}-${description[0].substring(0, 10)}`;
        return (
          <Disclosure
            key={`${key}`}
            as="div"
            defaultOpen={false}
            className="flex flex-col gap-4 border-solid border-b border-neutral-200 py-6 last:border-transparent"
          >
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full justify-between">
                  <span className="text-lg text-neutral-900">{title}</span>
                  {open ? (
                    <i className="ri-indeterminate-circle-line text-neutral-400" />
                  ) : (
                    <i className="ri-add-circle-line text-neutral-400" />
                  )}
                </DisclosureButton>
                <DisclosurePanel className="flex flex-col gap-4 px-5">
                  <ul className="list-disc text-neutral-600">
                    {description.map((desc) => (
                      <li
                        key={`${desc}-${desc.substring(0, 5)}`}
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                    ))}
                  </ul>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default ProductInfo;
