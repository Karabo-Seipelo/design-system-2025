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
    "py-12 md:py-16 lg:py-24",
    "px-4 xl:px-0",
    "mx-auto w-full max-[1216px]",
  ); //"flex flex-col gap-12 px-[16px]";
  const { onSubmit, ...rest } = form;
  const { submitHandler } = useSubmitNewsletter({
    onSubmit,
    toast: rest.toast,
    inputName: rest.input.name,
  });

  return (
    <footer className={containerClassName}>
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
