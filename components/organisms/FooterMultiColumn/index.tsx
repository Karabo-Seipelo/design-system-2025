import { FooterMultiColumnProps } from "./interfaces";
import SubscribeNewsletter from "$/molecules/Form/SubscribeNewsletter";
import FooterColumns from "./FooterColumns";
import FooterContact from "./FooterContact";
import FooterTrademark from "./FooterTrademark";

const FooterMultiColumn: React.FC<FooterMultiColumnProps> = ({
  form,
  columns,
  socialAndTerms,
  trademark,
}) => {
  const containerClassName = "flex flex-col gap-12 px-[16px]";
  return (
    <div className={containerClassName}>
      {form && <SubscribeNewsletter {...form} />}
      <div className="flex flex-col gap-12 lg:flex-row">
        {trademark && <FooterTrademark {...trademark} className="lg:w-[20%]" />}
        {columns && <FooterColumns columns={columns} className="lg:w-[80%]" />}
      </div>
      {socialAndTerms && (
        <FooterContact
          {...socialAndTerms}
          className="border-t border-solid border-neutral-200 pt-8"
        />
      )}
    </div>
  );
};

export default FooterMultiColumn;
