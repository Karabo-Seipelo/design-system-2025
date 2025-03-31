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
          <div className="">
            <div className="inline-block bg-amber-50 rounded-full border border-solid border-amber-200 px-2.5 py-1 text-sm text-center text-amber-700">
              {`${discount_percentage}% off`}
            </div>
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
