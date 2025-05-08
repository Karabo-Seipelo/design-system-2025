import { FooterMultiColumnProps } from "./interfaces";
import SubscribeNewsletter from "$/molecules/Form/SubscribeNewsletter";
import FooterColumns from "./FooterColumns";
import FooterContact from "./FooterContact";
import FooterTrademark from "./FooterTrademark";
import useToast from "$/organisms/Toast/useToast";
import axios from "axios";

const FooterMultiColumn: React.FC<FooterMultiColumnProps> = ({
  form,
  columns,
  socialAndTerms,
  trademark,
}) => {
  const { showToast } = useToast();
  const containerClassName = "flex flex-col gap-12 px-[16px]";
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get(form.input.name);
      const response = await axios.post(form.formUrl, { email });
      const { message, status, badge } =
        response.status === 200 ? form.toast.success : form.toast.error;
      showToast(message, status, badge);
    } catch (error) {
      console.error(error);
      const { message, status, badge } = form.toast.error;
      showToast(message, status, badge);
    }
  };

  return (
    <div className={containerClassName}>
      {form && <SubscribeNewsletter {...form} onSubmit={submitHandler} />}
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
