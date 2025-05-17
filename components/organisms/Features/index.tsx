import { FeatureSectionProps } from "./interfaces";
import FeatureContent from "./FeatureContent";
import FeatureHeader from "./FeatureHeader";

const FeatureSection: React.FC<FeatureSectionProps> = ({
  imageUrl,
  subTitle,
  title,
  description,
  features,
  orientation = "right",
  featureLayout = "list",
}) => {
  return (
    <div className="flex h-full flex-col items-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
      <section className="flex flex-col gap-12 md:gap-16">
        <FeatureHeader
          title={title}
          subTitle={subTitle}
          description={description}
        />
        <FeatureContent
          features={features}
          imageUrl={imageUrl}
          featureLayout={featureLayout}
          orientation={orientation}
        />
      </section>
    </div>
  );
};

export default FeatureSection;
