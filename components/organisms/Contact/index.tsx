import { useEffect } from "react";
import { ContactSectionProps } from "./interfaces";
import useFormSubmit from "./useFormSubmit";
import Toast from "./Toast";
import ContactSectionHeader from "./ContactSectionHeader";
import ContactFormCard from "./ContactFormCard";

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
  } = useFormSubmit({ url, success, error });

  const resetHandler = () => {
    setFormSuccess((prev) => !prev);
    setFormStatus(null);
  };

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => {
        setFormStatus(null);
        setFormSuccess((prev) => !prev);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [formStatus, setFormStatus, setFormSuccess]);

  return (
    <section>
      {formStatus && !formSuccess && <Toast {...formStatus} />}
      <div className="flex h-full flex-col items-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
        <section className="flex flex-col gap-12 md:gap-16 lg:w-full">
          <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8 lg:w-full">
            <ContactSectionHeader
              title={title}
              description={description}
              contactDetails={contactDetails}
              dropShadow={dropShadow}
            />
            <div className="flex flex-col gap-10 lg:w-1/2">
              <ContactFormCard
                formSuccess={formSuccess}
                formStatus={formStatus}
                label={label}
                resetHandler={resetHandler}
                fields={fields}
                submitHandler={submitHandler}
              />
            </div>
          </main>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
