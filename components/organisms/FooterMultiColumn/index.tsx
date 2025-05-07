import SubscribeNewsletter, {
  SubscribeNewsletterProps,
} from "$/molecules/Form/SubscribeNewsletter";

interface FooterMultiColumnProps {
  form: SubscribeNewsletterProps;
}

const FooterMultiColumn: React.FC<FooterMultiColumnProps> = ({ form }) => {
  return (
    <div className="flex flex-col gap-12">
      <SubscribeNewsletter {...form} />
    </div>
  );
};

export default FooterMultiColumn;
