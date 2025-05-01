import { Product } from "./fetchProductsAPI";
import ColorSwatch from "$/atoms/ColorSwatch";

const ProductGridCard: React.FC<Partial<Product>> = ({ name, colors }) => {
  console.log("ProductGridCard", name, colors);
  return (
    <div>
      <div>image</div>
      <div>
        <h6>color</h6>
        <h3>{name}</h3>
        <p>price</p>
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
