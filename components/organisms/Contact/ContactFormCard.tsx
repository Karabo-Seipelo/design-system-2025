import ContactFormSuccess from "./ContactFormStatus";
import ContactForm from "./ContactForm";
import { ContactFormCardProps } from "./interfaces";

const ContactFormCard: React.FC<ContactFormCardProps> = ({
  formSuccess,
  formStatus,
  label,
  resetHandler,
  fields,
  submitHandler,
}) => (
  <div className="flex flex-col gap-10 grow bg-white p-8 rounded-lg border border-solid border-neutral-200 drop-shadow-md">
    {formSuccess && formStatus ? (
      <ContactFormSuccess
        formStatus={formStatus}
        label={label}
        onReset={resetHandler}
      />
    ) : (
      <ContactForm
        fields={fields}
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(e);
        }}
      />
    )}
  </div>
);

export default ContactFormCard;
