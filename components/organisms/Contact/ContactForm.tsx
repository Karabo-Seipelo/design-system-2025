import FormFields from "./FormFields";
import { ContactFormProps } from "./interfaces";

const ContactForm: React.FC<ContactFormProps> = ({ fields, onSubmit }) => (
  <form
    data-testid="contact-form"
    onSubmit={onSubmit}
    className="flex flex-col gap-10 grow"
  >
    <FormFields fields={fields} />
  </form>
);

export default ContactForm;
