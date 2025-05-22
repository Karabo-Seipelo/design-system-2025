import { ContactSectionProps } from "./interfaces";
import useFormSubmit from "./useFormSubmit";
import ContactSectionHeader from "./ContactSectionHeader";
import ContactForm from "./ContactForm";
import ContactFormCard from "./ContactFormCard";
import { on } from "events";
import { set } from "lodash";

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  contactDetails,
  form: {
    fields,
    url,
    notification: { success, error },
  },
  dropShadow = true,
  resendForm: { label },
  onSubmit,
}) => {
  const {
    submitHandler,
    formStatus,
    formSuccess,
    setFormStatus,
    setFormSuccess,
  } = useFormSubmit({ url, success, error });

  const resetHandler = () => {
    setFormSuccess((prev) => !prev);
    setFormStatus(null);
  };

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(event);
  };

  return (
    <section>
      <div className="flex h-full flex-col items-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
        <section className="flex flex-col gap-12 md:gap-16 lg:w-full">
          <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8 lg:w-full">
            <ContactSectionHeader
              title={title}
              description={description}
              contactDetails={contactDetails}
              dropShadow={dropShadow}
            />
            <ContactForm fields={fields} onSubmit={formSubmitHandler} />
          </main>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
