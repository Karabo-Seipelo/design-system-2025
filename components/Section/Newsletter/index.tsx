import useToast from "../../Toast/useToast";
import Image from "next/image";
import Form from "next/form";
import axios from "axios";
import { List } from "../../List";

export type Feature = {
  title?: string;
  description: string;
  icon: string;
};

export type Notification = {
  badge: string;
  message: string;
  status: string;
};

export type FormProps = {
  formUrl: string;
  instruction: string;
  label: string;
  placeholder: string;
  toast: {
    success: Notification;
    error: Notification;
  };
};

export type NewsletterSectionProps = {
  title: string;
  features: Feature[];
  imageUrl: string;
  form: FormProps;
};

export type NewsLetterFormProps = {
  submitHandler: (formData: FormData) => Promise<void>;
  instruction: string;
  label: string;
  placeholder: string;
};

const NewsLetterForm = ({
  submitHandler,
  instruction,
  label,
  placeholder,
}: NewsLetterFormProps) => {
  return (
    <Form className="flex flex-col gap-4 w-full" action={submitHandler}>
      <div className="flex flex-col md:flex-row gap-4 md:flex-wrap">
        <input
          data-testid="email-input"
          name="email"
          type="email"
          placeholder={placeholder}
          className="basis-full md:basis-1/2 bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200 lg:order-1"
          required
          aria-label="Email"
        />
        <span className="font-normal text-base text-neutral-600 md:order-3 md:basis-full">
          {instruction}
        </span>
        <button
          data-testid="email-submit"
          type="submit"
          className="bg-indigo-700 px-3.5 py-2.5 rounded basis-full text-white md:basis-1/6 md:order-2"
          aria-label={label}
        >
          {label}
        </button>
      </div>
    </Form>
  );
};

const NewsletterSection = ({
  title,
  features,
  imageUrl,
  form,
}: NewsletterSectionProps) => {
  const { formUrl, toast } = form;
  const { showToast } = useToast();

  const submitHandler = async (formData: FormData) => {
    try {
      const email = formData.get("email");
      const response = await axios.post(formUrl, { email });
      const { message, status, badge } =
        response.status === 200 ? toast.success : toast.error;
      showToast(message, status, badge);
    } catch (error) {
      console.error(error);
      const { message, status, badge } = toast.error;
      showToast(message, status, badge);
    }
  };

  return (
    <div className="w-full rounded bg-white relative">
      <div className="flex h-full px-3 py-12 md:px-4 md:py-16 lg:px-24 lg:py-24 lg:h-full">
        <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8 lg:h-full">
          <div className="flex flex-col items-center gap-8 lg:gap-2 lg:items-end lg:basis-1/2">
            {title && (
              <h2 className="font-semibold text-3xl text-neutral-900 md:text-5xl">
                {title}
              </h2>
            )}
            {features && <List features={features} />}
            <NewsLetterForm submitHandler={submitHandler} {...form} />
          </div>
          <div className="flex w-full lg:basis-1/2 lg:h-full">
            {imageUrl && (
              <div className="flex w-full lg:flex-1">
                <Image
                  src={imageUrl}
                  alt="testing"
                  height={0}
                  width={0}
                  className="flex min-h-[180px] w-full justify-center rounded-lg object-cover md:h-[394px] lg:h-auto
                                    lg:self-stretch 2xl:h-[450px]"
                />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewsletterSection;
