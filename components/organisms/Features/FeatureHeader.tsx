import { FeatureHeaderProps } from "./interfaces";
import classNames from "classnames";

const FeatureHeader: React.FC<FeatureHeaderProps> = ({
  title,
  subTitle,
  description,
}) => {
  const headerClasses = classNames(
    "flex flex-col items-center justify-center text-center",
  );
  const subTitleClasses = classNames(
    "text-base font-semibold text-indigo-700 pb-4",
  );
  const titleClasses = classNames(
    "text-3xl md:text-5xl font-semibold text-neutral-900 pb-4",
  );
  const descriptionClasses = classNames(
    "font-normal text-lg text-neutral-600 md:text-wrap md:text-center md:text-xl",
    {
      hidden: !description,
    },
  );

  return (
    <header className={headerClasses}>
      {subTitle && <small className={subTitleClasses}>{subTitle}</small>}
      {title && <h1 className={titleClasses}>{title}</h1>}
      {description && <p className={descriptionClasses}>{description}</p>}
    </header>
  );
};

export default FeatureHeader;
