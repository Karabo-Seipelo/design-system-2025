import classNames from "classnames";

interface ProductCardProps {
  collectionId: string;
  imageUrl: string;
  name: string;
  description: string;
  layout: "portrait" | "landscape";
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  description,
  layout,
}) => {
  const cardClassName = classNames(
    "flex flex-col px-4 pb-4 rounded-lg justify-end object-cover bg-no-repeat",
    {
      "h-[580px] w-full md:w-[388px] lg:w-[549px]": layout === "portrait",
      "h-[337px] w-full lg:h-[290px] lg:w-[594px]": layout === "landscape",
    },
  );
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={cardClassName} style={cardStyle}>
      <div className="flex flex-col">
        <div className="text-sm text-white font-normal">{description}</div>
        <div className="text-lg text-white font-medium">{name}</div>
      </div>
    </div>
  );
};

export default ProductCard;
