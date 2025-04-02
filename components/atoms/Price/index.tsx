import Badge from "$/atoms/Badge";

interface PriceProps {
  salePrice: string;
  price: string;
  discount_percentage: number | null;
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
          <div>
            <Badge discount={discount_percentage} />
          </div>
        </>
      ) : (
        <div className="flex gap-2">
          <span className="font-medium text-3xl text-neutral-600">{price}</span>
        </div>
      )}
    </>
  );
};

export default Price;
