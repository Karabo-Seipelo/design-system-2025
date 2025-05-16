import { FeatureHeaderProps } from "./interfaces";

const FeatureHeader: React.FC<FeatureHeaderProps> = ({
  title,
  subTitle,
  description,
}) => {
  return (
    <header className="flex flex-col items-center justify-center text-center">
      {subTitle && (
        <small className="text-base font-semibold text-indigo-700 pb-4">
          {subTitle}
        </small>
      )}
      {title && (
        <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 pb-4">
          {title}
        </h1>
      )}
      {description && (
        <p className="font-normal text-lg text-neutral-600 md:text-wrap md:text-center md:text-xl">
          {description}
        </p>
      )}
    </header>
  );
};

export default FeatureHeader;
