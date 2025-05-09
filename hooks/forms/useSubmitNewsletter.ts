import { FormEvent } from "react";
import { Toast } from "$/organisms/FooterMultiColumn/interfaces";
import useToast from "$/organisms/Toast/useToast";

interface UseSubmitNewsletterProps {
  onSubmit: (email: string) => Promise<void>;
  toast: Toast;
  inputName: string;
}

const useSubmitNewsletter = ({
  onSubmit,
  toast,
  inputName,
}: UseSubmitNewsletterProps) => {
  const { showToast } = useToast();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get(inputName) as string;
      await onSubmit(email);
      const { message, status, badge } = toast.success;
      showToast(message, status, badge);
    } catch (error) {
      const { message, status, badge } = toast.error;
      showToast(message, status, badge);
      console.error("Error submitting newsletter:", error);
    }
  };

  return { submitHandler };
};

export default useSubmitNewsletter;
