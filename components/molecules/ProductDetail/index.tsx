import Rating from "$/molecules/Rating";
import { Inventory } from "$/organisms/ProductDetails/fetchProductDetailsAPI";
import Price from "$/atoms/Price";

export interface ProductDetailsProps {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  inventory: Inventory;
}

const ProductDetail: React.FC<ProductDetailsProps> = ({
  name,
  description,
  rating,
  reviews,
  inventory,
}) => {
  const { list_price, sale_price, discount_percentage } = inventory;
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(list_price);
  const salePrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(sale_price);
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-semibold text-3xl text-neutral-600">{name}</h2>
      <div className="flex flex-col gap-2">
        <Price
          salePrice={salePrice}
          price={price}
          discount_percentage={discount_percentage}
        />
        <Rating
          score={rating}
          total={reviews}
          classes="flex flex-row gap-2"
          href="#"
        />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default ProductDetail;
