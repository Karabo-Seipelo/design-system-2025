import Rating from "$/molecules/Rating";
import { Inventory } from "$/organisms/ProductDetails/fetchProductDetailsAPI";
import Price from "$/atoms/Price";

export interface ProductDetailsProps {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  inventory: Inventory;
  locale: string;
  currency: string;
}

const ProductDetail: React.FC<ProductDetailsProps> = ({
  name,
  description,
  rating,
  reviews,
  inventory,
  locale,
  currency,
}) => {
  const { list_price, sale_price, discount_percentage } = inventory;
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-semibold text-3xl text-neutral-600 md:text-5xl">
        {name}
      </h2>
      <div className="flex flex-col gap-2">
        <Price
          salePrice={sale_price}
          listPrice={list_price}
          locale={locale}
          currency={currency}
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
