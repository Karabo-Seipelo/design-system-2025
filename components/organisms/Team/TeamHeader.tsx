import { TeamHeaderProps } from "./interfaces";

const TeamHeader: React.FC<TeamHeaderProps> = ({
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
        <p className="font-normal text-lg md:text-xl text-neutral-600">
          {description}
        </p>
      )}
    </header>
  );
};

export default TeamHeader;
