import Image from "next/image";
import { FeatureImageProps } from "./interfaces";
import classNames from "classnames";

const FeatureInage: React.FC<FeatureImageProps> = ({
  imageUrl,
  orientation,
}) => {
  const imageContainerClasses = classNames("flex w-full lg:flex-1", {
    "order-first": orientation === "left",
    "order-last": orientation === "right",
  });
  const imageClasses = classNames(
    "flex",
    "min-h-[180px] w-full md:h-[394px] lg:h-auto 2xl:h-[450px]",
    "justify-center object-cover",
    "rounded-lg shadow-lg ",
    "lg:self-stretch",
  );

  return (
    <div className={imageContainerClasses}>
      <Image
        src={imageUrl}
        alt="testing"
        height={180}
        width={180}
        className={imageClasses}
      />
    </div>
  );
};

export default FeatureInage;
