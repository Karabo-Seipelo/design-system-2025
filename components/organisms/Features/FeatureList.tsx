import Icon from "$/atoms/Icon";
import { FeatureListProps } from "./interfaces";
import classNames from "classnames";

const FeatureList: React.FC<FeatureListProps> = ({
  features,
  featureLayout,
}) => {
  const isGridLayout = featureLayout === "grid";
  const isListLayout = featureLayout === "list";

  const layoutClass = classNames({
    "grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3": isGridLayout,
    "flex flex-col gap-10 lg:flex-1": isListLayout,
  });

  const contentLayoutClass = classNames({
    "flex flex-col items-center gap-2": isGridLayout,
    "flex flex-row gap-4 md:gap-5": isListLayout,
  });

  const contentClass = classNames({
    "flex flex-col items-center justify-center gap-2 py-2.5 text-center":
      isGridLayout,
    "flex flex-col items-start justify-center gap-2 py-2.5": isListLayout,
  });

  return (
    <div className={layoutClass}>
      {features.map(({ title, icon, description }, index) => (
        <div className={contentLayoutClass} key={title + " " + index}>
          <div className="w-[50px] h-[50px] rounded-full bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center">
            <Icon name={icon} size="xxlarge" color="primary" />
          </div>
          <div className={contentClass}>
            <h4 className="font-semibold text-lg">{title}</h4>
            <p className="text-base font-normal">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
