import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Images as ProductImages } from "$/organisms/ProductDetails/fetchProductDetailsAPI";
import { v4 as uuidv4 } from "uuid";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";

interface ProductCarouselProps {
  images: ProductImages[];
  loading: boolean;
  color: string | null;
  selected: (state: Partial<ProductDetailsStore>) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  images,
  loading,
  color,
  selected,
}) => {
  const selectImageBasedOnColor = images.findIndex(
    (item) => item.color === color,
  );
  const validIndex =
    selectImageBasedOnColor !== -1 ? selectImageBasedOnColor : 0;
  const [selectedIndex, setSelectedIndex] = useState(validIndex);

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <TabGroup
      className="flex flex-col gap-6"
      selectedIndex={selectedIndex}
      onChange={(index) => {
        setSelectedIndex(index);
        const selectedImage = images[index];
        selected({ selectedColor: selectedImage.color });
      }}
    >
      <TabPanels>
        {images.map(({ image_url }) => (
          <TabPanel
            key={uuidv4()}
            className="min-h-[500px] w-full md:min-h-[800px]"
          >
            <div
              style={{ backgroundImage: `url(${image_url})` }}
              className="block w-full min-h-[500px] md:min-h-[800px] bg-cover bg-center rounded-lg"
            />
          </TabPanel>
        ))}
      </TabPanels>
      <div className="flex flex-1 py-5 overflow-x-auto p-1">
        <TabList className="flex flex-nowrap gap-4 h-[120px] md:h-[190px]">
          {images.map(({ image_url }) => (
            <Tab
              key={uuidv4()}
              className="w-20 md:w-[188px] lg:w-40 h-[120px] md:h-[190px] cursor-pointer data-[selected]:outline data-[selected]:outline-indigo-600 rounded-lg"
            >
              <div
                style={{ backgroundImage: `url(${image_url})` }}
                className="block w-full h-[120px] md:h-[190px] bg-cover bg-center rounded-lg"
              />
            </Tab>
          ))}
        </TabList>
      </div>
    </TabGroup>
  );
};

export default ProductCarousel;
