import { FeatureContentProps, ORIENTATION, FEATURE_LAYOUT } from "./interfaces";
import FeatureList from "./FeatureList";
import FeatureInage from "./FeatureImage";

const FeatureContent: React.FC<FeatureContentProps> = ({
  imageUrl,
  features,
  orientation = ORIENTATION.RIGHT,
  featureLayout = FEATURE_LAYOUT.LIST,
}) => {
  return (
    <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
      {features && (
        <FeatureList features={features} featureLayout={featureLayout} />
      )}
      {imageUrl && (
        <FeatureInage imageUrl={imageUrl} orientation={orientation} />
      )}
    </main>
  );
};

export default FeatureContent;
