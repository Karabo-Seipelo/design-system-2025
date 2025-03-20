import Image from "next/image";

interface Feature {
  title?: string;
  description: string;
  icon: string;
  dropShadow?: boolean;
  tel?: string;
  mailto?: string;
}

const RenderList = (feature: Feature) => {
  if (feature.tel) {
    return (
      <a
        href={`tel:${feature.tel}`}
        className="text-base md:text-lg font-normal"
      >
        {feature.description}
      </a>
    );
  }

  if (feature.mailto) {
    return (
      <a
        href={`mailto:${feature.mailto}`}
        className="text-base md:text-lg font-normal"
      >
        {feature.description}
      </a>
    );
  }

  return (
    <p className="text-base md:text-lg font-normal">{feature.description}</p>
  );
};

const List = ({
  features,
  dropShadow = false,
}: {
  features: Feature[];
  dropShadow?: boolean;
}) => {
  return (
    <ul className="flex flex-col gap-10 w-full md:gap-5">
      {features.map((feature, index) => {
        const { title, icon } = feature;
        return (
          <li
            className="flex flex-row gap-4 md:gap-5"
            key={feature.title + " " + index}
          >
            <div
              className={`h-fit rounded-full p-3 ${dropShadow ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]" : ""}`}
            >
              <Image
                src={icon}
                alt="icon"
                width={0}
                height={0}
                className="min-w-[24px] md:w-full min-h-[24px] lg:h-[24px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2 py-2.5">
              {title && <h4 className="font-semibold text-lg">{title}</h4>}
              <RenderList {...feature} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { List };

export default List;
