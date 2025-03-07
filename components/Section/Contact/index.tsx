import { useEffect } from "react";
import Image from "next/image";
import { List } from "../../List";
import Form from "next/form";
import FormFields from "./FormFields";
import { ContactSectionProps } from "./interfaces";
import useFormSubmit from "./useFormSubmit";
import Toast from "./Toast";

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
    console.log({ formStatus });
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
            <div className="flex flex-col gap-10 lg:w-1/2">
              {title && (
                <h2 className="font-semibold text-neutral-900 text-4xl md:text-5xl lg:text-6xl">
                  {title}
                </h2>
              )}
              {description && (
                <div className="font-normal text-neutral-600 text-lg md:text-xl">
                  {description}
                </div>
              )}
              {contactDetails && (
                <List features={contactDetails} dropShadow={dropShadow} />
              )}
            </div>
            <div className="flex flex-col gap-10 lg:w-1/2">
              <div className="flex flex-col gap-10 grow bg-white p-8 rounded-lg border border-solid border-neutral-200 drop-shadow-md ">
                {formSuccess && formStatus ? (
                  <div
                    data-testid="success"
                    className="flex flex-col items-center gap-6"
                  >
                    {formStatus?.icon && (
                      <div className="w-16 h-16 p-4 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                        <Image
                          src={formStatus.icon}
                          alt={formStatus.status}
                          width={0}
                          height={0}
                          className="w-8 h-8"
                        />
                      </div>
                    )}
                    <div className="font-normal text-xl text-center text-neutral-900">
                      {formStatus.message}
                    </div>
                    {label && (
                      <button
                        onClick={resetHandler}
                        type="button"
                        id="test2"
                        className="flex justify-center items-center gap-1.5 bg-white px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200 text-neutral-900"
                      >
                        {label}
                      </button>
                    )}
                  </div>
                ) : (
                  <Form className="flex flex-col gap-4" action={submitHandler}>
                    <FormFields fields={fields} />
                  </Form>
                )}
              </div>
            </div>
          </main>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
