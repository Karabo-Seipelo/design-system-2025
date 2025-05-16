import Image from "next/image";
import { FeatureImageProps } from "./interfaces";

const FeatureInage: React.FC<FeatureImageProps> = ({
  imageUrl,
  orientation,
}) => {
  return (
    <div
      className={`flex w-full lg:flex-1 ${orientation === "left" ? "order-first" : "order-last"}`}
    >
      <Image
        src={imageUrl}
        alt="testing"
        height={180}
        width={180}
        className="flex min-h-[180px] w-full justify-center rounded-lg object-cover shadow-lg md:h-[394px] lg:h-auto
                                    lg:self-stretch 2xl:h-[450px]"
      />
    </div>
  );
};

export default FeatureInage;
