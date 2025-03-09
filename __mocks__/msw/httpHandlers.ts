import { HttpResponse } from "msw";

export const submitFormNewsletterSuccess = () => {
  return HttpResponse.json(
    {
      message: "Subscription successful! Please check your email to confirm.",
    },
    {
      status: 200,
    },
  );
};

export const submitFormNewsletterError = () => {
  return HttpResponse.json(
    {
      message: "Email format is invalid.",
    },
    {
      status: 500,
    },
  );
};
