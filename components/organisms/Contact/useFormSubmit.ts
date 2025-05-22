import React, { useState } from "react";
import axios from "axios";
import { UseFormSubmitProps, UseFormSubmitReturn, Status } from "./interfaces";

const useFormSubmit = ({
  url,
  success,
  error: errorMsg,
}: UseFormSubmitProps): UseFormSubmitReturn => {
  const [formStatus, setFormStatus] = useState<Status | null>(null);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!form || !(form instanceof HTMLFormElement)) {
      console.error(
        "submitHandler: event.currentTarget is not a valid form element.",
      );
      return;
    }
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
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
