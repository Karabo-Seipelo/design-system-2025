import { HeaderFAQProps } from "./interfaces";

const HeaderFAQ: React.FC<HeaderFAQProps> = ({ title, subTitle }) => {
  return (
    <header className="flex flex-col gap-5 justify-center">
      {title && (
        <h1 className="font-semibold text-3xl md:text-5xl text-center text-neutral-900">
          {title}
        </h1>
      )}
      {subTitle && (
        <small className="font-normal text-lg md:text-xl text-center text-neutral-600">
          {subTitle}
        </small>
      )}
    </header>
  );
};

export default HeaderFAQ;
