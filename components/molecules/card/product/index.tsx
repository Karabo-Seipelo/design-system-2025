import classNames from "classnames";
import { ProductCardProps } from "./interfaces";
import Image from "next/image";

const variantClasses = {
  primary: classNames("max-w-[594px] h-[580px]"),
  secondary: classNames("max-w-[594px] h-[337px] md:h-[276px]"),
};

const ProductCard: React.FC<ProductCardProps> = ({
  image_url,
  name,
  description,
  layout,
  className,
}) => {
  const imageClasses = classNames(
    "w-full object-cover",
    variantClasses[layout]
  );
  const cardClasses = classNames(
    className,
    "relative",
    "group",
    "overflow-hidden rounded-lg",
    "focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]"
  );
  const linkClasses = classNames(
    "absolute inset-0 transition-all duration-300"
  );

  return (
    <div className={cardClasses}>
      <div className={variantClasses[layout]}>
        <Image
          src={image_url}
          fill={true}
          alt={description}
          className={imageClasses}
        />
      </div>
      <div className={linkClasses}>
        <div className="absolute inset-x-4 bottom-4 flex flex-col">
          <div className="text-sm text-white font-normal">{description}</div>
          <div className="text-lg text-white font-medium">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
