import { FooterMultiColumnProps } from "./interfaces";
import SubscribeNewsletter from "$/molecules/Form/SubscribeNewsletter";
import FooterColumns from "./FooterColumns";
import FooterContact from "./FooterContact";
import FooterTrademark from "./FooterTrademark";
import useSubmitNewsletter from "@hooks/forms/useSubmitNewsletter";
import classNames from "classnames";

const FooterMultiColumn: React.FC<FooterMultiColumnProps> = ({
  form,
  columns,
  socialAndTerms,
  trademark,
}) => {
  const containerClassName = classNames(
    "flex flex-col gap-12 mh:gap-16",
    "mx-auto w-full max-[1216px]",
  );
  const { onSubmit, ...rest } = form;
  const { submitHandler } = useSubmitNewsletter({
    onSubmit,
    toast: rest.toast,
    inputName: rest.input.name,
  });

  return (
    <footer data-testid="footer-multicolumn" className={containerClassName}>
      {form && <SubscribeNewsletter {...rest} onSubmit={submitHandler} />}
      <div className="flex flex-col gap-12 lg:flex-row">
        {trademark && <FooterTrademark {...trademark} className="lg:w-[50%]" />}
        {columns && <FooterColumns columns={columns} className="lg:w-[50%]" />}
      </div>
      {socialAndTerms && (
        <FooterContact
          {...socialAndTerms}
          className="border-t border-solid border-neutral-200 pt-8"
        />
      )}
    </footer>
  );
};

export default FooterMultiColumn;
