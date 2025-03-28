import Rating from "$/molecules/Rating";
import { Inventory } from "./fetchProductDetailsAPI";

export interface ProductDetailsProps {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  inventory: Inventory;
}

interface PriceProps {
  salePrice: string;
  price: string;
  discount_percentage: number;
}

const Price: React.FC<PriceProps> = ({
  salePrice,
  price,
  discount_percentage,
}) => {
  return (
    <>
      {discount_percentage ? (
        <>
          <div className="flex gap-2">
            <span className="font-medium text-3xl text-neutral-600">
              {salePrice}
            </span>
            <span className="font-medium text-lg text-neutral-400 line-through">
              {price}
            </span>
          </div>
          <div className="">
            <div className="inline-block bg-amber-50 rounded-full border border-solid border-amber-200 px-2.5 py-1 text-sm text-center text-amber-700">
              {`${discount_percentage}% off`}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-2">
            <span className="font-medium text-3xl text-neutral-600">
              {price}
            </span>
          </div>
        </>
      )}
    </>
  );
};

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
