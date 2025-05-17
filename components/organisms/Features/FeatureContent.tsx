import { FeatureContentProps } from "./interfaces";
import FeatureList from "./FeatureList";
import FeatureInage from "./FeatureImage";
import classNames from "classnames";

const FeatureContent: React.FC<FeatureContentProps> = ({
  imageUrl,
  features,
  orientation = "right",
  featureLayout = "list",
}) => {
  const mainClasses = classNames(
    "flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8",
  );
  return (
    <main className={mainClasses}>
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
