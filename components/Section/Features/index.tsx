import Image from "next/image";
import Container from "../../atoms/Container";
import Main from "../../atoms/Main";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureSectionProps {
  imageUrl?: string;
  title: string;
  subTitle: string;
  description: string;
  features?: Feature[];
  feautureLayout?: "list" | "grid";
  orientation?: "left" | "right";
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
  <div className="grid grid-cols-4 gap-8 list-none p-0 md:grid-cols-6 lg:grid-cols-12">
    {features.map((feature, index) => (
      <div
        className="col-span-4 flex flex-col items-center gap-5 md:col-span-3 lg:col-span-4"
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
  feautureLayout = "list",
}: FeatureSectionProps) => {
  return (
    <Container classes="p-[16px]">
      <Main classes="bg-white shdaow-xl rounded-sm py-[48px] px-[12px] flex flex-col gap-12">
        <header className="w-full flex flex-col gap-3">
          {subTitle && (
            <small className="font-semibold text-indigo-700 text-base text-center leading-[24px] md:text-xl">
              {subTitle}
            </small>
          )}
          <div className="w-full flex flex-col gap-5">
            {title && (
              <h1 className="font-semibold text-center text-neutral-900 text-3xl md:text-5xl md:leading-[48px]">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg text-center leading-[28px] text-gray-500">
                {description}
              </p>
            )}
          </div>
        </header>
        <section className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
          {features &&
            (feautureLayout === "grid" ? (
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
        </section>
      </Main>
    </Container>
  );
};

export default FeatureSection;
