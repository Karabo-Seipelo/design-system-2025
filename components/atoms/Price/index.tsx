import Badge from "$/atoms/Badge";

interface PriceProps {
  salePrice: number;
  discount_percentage: number | null;
  listPrice: number;
  currency: string;
  locale: string;
  format?: "default" | "sm";
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
  format = "default",
}) => {
  const salePriceClasses = {
    default: "font-medium text-3xl ",
    sm: "font-normal text-base",
  };
  const listPriceClasses = {
    default: "font-medium text-lg",
    sm: "font-normal text-xs",
  };

  const badgeClasses = {
    default: "",
    sm: "hidden",
  };

  return (
    <>
      {discount_percentage ? (
        <>
          <div className="flex gap-2">
            <span className={`${salePriceClasses[format]} text-neutral-600`}>
              {formatCurrency(salePrice, currency, locale)}
            </span>
            <span
              className={`${listPriceClasses[format]} text-neutral-400 line-through`}
            >
              {formatCurrency(listPrice, currency, locale)}
            </span>
          </div>
          <div className={`${badgeClasses[format]}`}>
            <Badge discount={discount_percentage} />
          </div>
        </>
      ) : (
        <div className="flex gap-2">
          <span className={`${salePriceClasses[format]} text-neutral-600`}>
            {formatCurrency(listPrice, currency, locale)}
          </span>
        </div>
      )}
    </>
  );
};

export default Price;
