import Subscribe, { SubscribeProps } from "$/molecules/Form/Subscribe";

export interface SubscribeNewsletterProps extends SubscribeProps {
  title: string;
  description: string;
}

const SubscribeNewsletter: React.FC<SubscribeNewsletterProps> = ({
  title,
  description,
  onSubmit,
  input,
  button,
}) => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="flex  flex-col gap-2 lg:basis-2/3">
        <h2 className="font-semibold text-xl text-neutral-900">{title}</h2>
        <div
          className="font-normal text-base text-neutral-600"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <Subscribe
        onSubmit={onSubmit}
        input={input}
        button={button}
        className="lg:basis-1/3"
      />
    </div>
  );
};

export default SubscribeNewsletter;
