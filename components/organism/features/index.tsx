import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureSectionProps {
  imageUrl?: string;
  title: string;
  subTitle: string;
  description: string;
  features?: Feature[];
  featureLayout?: string; //"list" | "grid";
  orientation?: string; //"left" | "right";
}

const List = ({ features }: { features: Feature[] }) => {
  return (
    <ul className="flex flex-col gap-10 lg:flex-1">
      {features.map((feature, index) => (
        <li
          className="flex flex-row gap-4 md:gap-5"
          key={feature.title + " " + index}
        >
          <div className="h-fit rounded-full bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={0}
              height={0}
              className="min-w-[24px] md:w-full min-h-[24px] lg:h-[24px]"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-2 py-2.5">
            <h4 className="font-semibold text-lg">{feature.title}</h4>
            <p className="text-base font-normal">{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Grid = ({ features }: { features: Feature[] }) => (
  <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
    {features.map((feature, index) => (
      <div
        className="flex flex-col items-center gap-2"
        key={feature.title + " " + index}
      >
        <div className="h-fit rounded-full bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
          <Image
            src={feature.icon}
            alt={feature.title}
            width={0}
            height={0}
            className="min-w-[24px] md:w-full min-h-[24px] lg:h-[24px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-2.5 text-center">
          <h4 className="font-semibold text-lg">{feature.title}</h4>
          <p className="text-base font-normal">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const FeatureSection = ({
  imageUrl,
  subTitle,
  title,
  description,
  features,
  orientation = "right",
  featureLayout = "list",
}: FeatureSectionProps) => {
  return (
    <div className="flex h-full flex-col items-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
      <section className="flex flex-col gap-12 md:gap-16">
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
        <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
          {features &&
            (featureLayout === "grid" ? (
              <Grid features={features} />
            ) : (
              <List features={features} />
            ))}
          {imageUrl && (
            <div
              className={`flex w-full lg:flex-1 ${orientation === "left" ? "order-first" : "order-last"}`}
            >
              <Image
                src={imageUrl}
                alt="testing"
                height={0}
                width={0}
                className="flex min-h-[180px] w-full justify-center rounded-lg object-cover shadow-lg md:h-[394px] lg:h-auto
									lg:self-stretch 2xl:h-[450px]"
              />
            </div>
          )}
        </main>
      </section>
    </div>
  );
};
export default FeatureSection;
