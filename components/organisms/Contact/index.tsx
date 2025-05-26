import { ContactSectionProps } from "./interfaces";
import useFormSubmit from "./useFormSubmit";
import ContactSectionHeader from "./ContactSectionHeader";
import ContactForm from "./ContactForm";
import ContactFormStatus from "./ContactFormStatus";

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
}) => {
  const {
    submitHandler,
    formStatus,
    formSuccess,
    setFormStatus,
    setFormSuccess,
  } = useFormSubmit({
    url,
    success,
    error,
  });

  const resetHandler = () => {
    setFormSuccess((prev) => !prev);
    setFormStatus(null);
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
            <div className="flex flex-col gap-10 grow bg-white p-8 rounded-lg border border-solid border-neutral-200 drop-shadow-md min-h-[360px]">
              {formSuccess ? (
                <ContactFormStatus
                  formStatus={formStatus}
                  label={label}
                  onReset={resetHandler}
                />
              ) : (
                <ContactForm fields={fields} onSubmit={submitHandler} />
              )}
            </div>
          </main>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
