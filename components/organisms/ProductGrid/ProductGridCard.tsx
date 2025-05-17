import { useState } from "react";
import ColorSwatch from "$/atoms/ColorSwatch";
import Price from "$/atoms/Price";
import Image from "next/image";
import { Inventory, Images } from "./fetchProductsAPI";

export interface ProductGridCardProps {
  name: string;
  colors: string[];
  inventory: Inventory[];
  images: Images[];
}

const ProductGridCard: React.FC<Partial<ProductGridCardProps>> = ({
  name,
  colors = [],
  inventory,
  images = [],
}) => {
  const uniqueId = Date.now();
  const { list_price, sale_price, discount_percentage, color } = inventory![0];
  const image = images.find((img) => img.color === color);
  const [selectedColor, setSelectedColor] = useState<string | null>(color);
  const [selectedImage, setSelectedImage] = useState<
    | {
        color: string;
        image_url: string;
      }
    | undefined
  >(image);

  return (
    <div className="flex flex-col gap-4 group">
      {selectedImage && (
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src={selectedImage.image_url}
            fill
            alt={`${name} - ${color}`}
            sizes="(max-width: 375px) 100%, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h6 className="font-normal text-xs text-neutral-600 capitalize">
          {color}
        </h6>
        <h3 className="font-medium text-lg text-neutral-900 group-hover:text-indigo-700">
          {name}
        </h3>
        <Price
          salePrice={sale_price}
          listPrice={list_price}
          discount_percentage={discount_percentage}
          locale="en-US"
          currency="USD"
          format="sm"
        />
        <div data-testid="color-swatches" className="flex gap-3">
          {colors.map((color, index) => (
            <ColorSwatch
              onClick={() => {
                setSelectedColor(color);
                const newImage = images.find((img) => img.color === color);
                setSelectedImage(newImage);
              }}
              key={`${uniqueId}-${index}-${color}`}
              color={color}
              name={color}
              active={selectedColor === color}
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGridCard;
