import { FooterMultiColumnProps } from "./interfaces";
import SubscribeNewsletter from "$/molecules/Form/SubscribeNewsletter";
import FooterColumns from "./FooterColumns";
import FooterContact from "./FooterContact";

const FooterMultiColumn: React.FC<FooterMultiColumnProps> = ({
  form,
  columns,
  socialAndTerms,
}) => {
  return (
    <div className="flex flex-col gap-12 px-[16px]">
      <SubscribeNewsletter {...form} />
      <FooterColumns columns={columns} />
      <FooterContact {...socialAndTerms} />
    </div>
  );
};

export default FooterMultiColumn;
