import { useEffect } from "react";
import { Product } from "./fetchProductsAPI";
import ColorSwatch from "$/atoms/ColorSwatch";
import Price from "$/atoms/Price";
import Image from "next/image";
import useProductCardStore from "./ProductCardStore";

const ProductGridCard: React.FC<Partial<Product>> = ({
  name,
  colors,
  inventory,
  images,
}) => {
  const { list_price, sale_price, discount_percentage, color } = inventory![0];
  const imageUrl = images?.find((img) => img.color === color)?.image_url;
  const { updateSate } = useProductCardStore();

  useEffect(() => {
    updateSate({
      inventory,
      selectedColor: color,
      selectedInventory: inventory![0],
      product: {
        name,
        images,
        colors,
        inventory,
      },
    });
  }, [color, colors, images, inventory, name, updateSate]);

  return (
    <div className="flex flex-col gap-4 group">
      {imageUrl && (
        <div className="relative h-[225px] rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            fill
            alt={`${name} - ${color}`}
            sizes="(max-width: 375px) 100%, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
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
        <div className="flex gap-2">
          {colors?.map((color, index) => (
            <ColorSwatch
              key={index}
              color={color}
              name={color}
              active={false}
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGridCard;
