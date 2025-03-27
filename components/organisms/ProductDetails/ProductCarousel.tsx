import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Images as ProductImages } from "./fetchProductDetailsAPI";
import { v4 as uuidv4 } from "uuid";

interface ProductCarouselProps {
  images: ProductImages[];
  loading: boolean;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  images,
  loading,
}) => {
  if (loading) {
    return <p>loading</p>;
  }

  return (
    <TabGroup className="flex  flex-col gap-6">
      <TabPanels>
        {images.map(({ image_url }) => (
          <TabPanel key={uuidv4()} className="min-h-[500px] w-full">
            <div
              style={{ backgroundImage: `url(${image_url})` }}
              className="block w-full min-h-[500px] bg-cover bg-center rounded-lg"
            />
          </TabPanel>
        ))}
      </TabPanels>
      <div className="flex flex-1 py-5 overflow-y-auto p-1">
        <TabList className="flex flex-nowrap gap-4 h-[120px]">
          {images.map(({ image_url }) => (
            <Tab
              key={uuidv4()}
              className="w-20 h-[130px] data-[selected]:outline data-[selected]:outline-indigo-600 rounded-lg"
            >
              <div
                style={{ backgroundImage: `url(${image_url})` }}
                className="block w-full min-h-[130px] bg-cover bg-center rounded-lg"
              />
            </Tab>
          ))}
        </TabList>
      </div>
    </TabGroup>
  );
};

export default ProductCarousel;
