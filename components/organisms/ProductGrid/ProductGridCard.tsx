import { Product } from "./fetchProductsAPI";
import ColorSwatch from "$/atoms/ColorSwatch";
import Price from "$/atoms/Price";

const ProductGridCard: React.FC<Partial<Product>> = ({
  name,
  colors,
  inventory,
}) => {
  console.log("ProductGridCard", name, colors, inventory);
  const { list_price, sale_price, discount_percentage, color } = inventory![0];
  return (
    <div>
      <div>image</div>
      <div className="flex flex-col gap-2">
        <h6 className="font-normal text-xs text-neutral-900 capitalize">
          {color}
        </h6>
        <h3 className="font-medium text-lg text-neutral-900">{name}</h3>
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
