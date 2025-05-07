import { FooterMultiColumnProps } from "./interfaces";
import SubscribeNewsletter from "$/molecules/Form/SubscribeNewsletter";
import FooterColumns from "./FooterColumns";
import FooterContact from "./FooterContact";

const FooterMultiColumn: React.FC<FooterMultiColumnProps> = ({
  form,
  columns,
  socialAndTerms,
}) => {
  const containerClassName = "flex flex-col gap-12 px-[16px]";
  return (
    <div className={containerClassName}>
      {form && <SubscribeNewsletter {...form} />}
      {columns && <FooterColumns columns={columns} />}
      {socialAndTerms && <FooterContact {...socialAndTerms} />}
    </div>
  );
};

export default FooterMultiColumn;
