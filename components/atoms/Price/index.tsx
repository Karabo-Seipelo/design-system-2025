import Badge from "$/atoms/Badge";

interface PriceProps {
  salePrice: number;
  discount_percentage: number | null;
  listPrice: number;
  currency: string;
  locale: string;
}

const formatCurrency = (value: number, currency: string, locale: string) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
};

const Price: React.FC<PriceProps> = ({
  salePrice,
  discount_percentage,
  locale = "en-US",
  currency = "USD",
  listPrice,
}) => {
  return (
    <>
      {discount_percentage ? (
        <>
          <div className="flex gap-2">
            <span className="font-medium text-3xl text-neutral-600">
              {formatCurrency(salePrice, currency, locale)}
            </span>
            <span className="font-medium text-lg text-neutral-400 line-through">
              {formatCurrency(listPrice, currency, locale)}
            </span>
          </div>
          <div>
            <Badge discount={discount_percentage} />
          </div>
        </>
      ) : (
        <div className="flex gap-2">
          <span className="font-medium text-3xl text-neutral-600">
            {formatCurrency(listPrice, currency, locale)}
          </span>
        </div>
      )}
    </>
  );
};

export default Price;
