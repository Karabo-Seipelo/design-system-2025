import { useState } from "react";
import axios from "axios";
import { ToastProps } from "./Toast";

interface UseFormSubmitProps {
  url: string;
  success: ToastProps;
  error: ToastProps;
}

interface Status extends ToastProps {
  icon?: string;
}

const useFormSubmit = ({
  url,
  success,
  error: errorMsg,
}: UseFormSubmitProps) => {
  const [formStatus, setFormStatus] = useState<Status | null>(null);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const submitHandler = async (formData: FormData) => {
    try {
      const email = formData.get("email");
      const name = formData.get("name");
      const message = formData.get("message");
      const response = await axios.post(url, {
        email,
        name,
        message,
      });

      const status = response.status === 200 ? success : errorMsg;

      if (response.status === 200) {
        setFormSuccess(true);
      } else {
        setFormSuccess(false);
      }

      console.log({ status });

      setFormStatus(status);
    } catch (error) {
      setFormStatus(errorMsg);
      console.error(error);
    }
  };

  return {
    submitHandler,
    formStatus,
    formSuccess,
    setFormStatus,
    setFormSuccess,
  };
};

export default useFormSubmit;
