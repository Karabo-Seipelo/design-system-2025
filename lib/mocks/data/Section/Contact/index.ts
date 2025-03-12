import { ContactSectionProps } from "../../../../../components/Section/Contact/interfaces";

const baseArgs = {
  title: "Talk to our team",
  description:
    "We've committed to delivering the support you require to make your experience as smooth as possible.",
  contactDetails: [
    {
      description: "123 Maple Street, Springfield IL, USA",
      icon: "/building-line.svg",
    },
    {
      description: "+1 (650) 555-0198",
      icon: "/phone-line.svg",
      tel: "+16505550198",
    },
    {
      description: "hello@abstractly",
      icon: "/mail-line.svg",
      mailto: "hello@abstractly",
    },
  ],
  resendForm: {
    label: "Send another message",
  },
  form: {
    notification: {
      error: {
        badge: "Error",
        message:
          "Failed to submit. Please ensure your details are correct or try again later.",
        status: "error",
      },
      success: {
        badge: "Success",
        message:
          "Submission successful! We will get back to you in 3-5 days via email.",
        status: "success",
        icon: "/check-fill-success.svg",
      },
    },
    fields: [
      {
        id: "name",
        name: "name",
        label: "Name",
        renderType: "text",
        placeholder: "Enter your name",
        required: true,
        disabled: false,
        groupWithNext: true,
        classes: "gap-2",
        testid: "name-input",
      },
      {
        id: "email",
        name: "email",
        label: "Email",
        renderType: "email",
        placeholder: "Enter your email",
        required: true,
        disabled: false,
        classes: "gap-2",
        testid: "email-input",
      },
      {
        id: "message",
        name: "message",
        label: "Message",
        renderType: "textarea",
        placeholder: "Write your message...",
        characterLimit: 500,
        required: true,
        disabled: false,
        classes: "gap-2 lg:w-full",
        testid: "message-input",
      },
      {
        id: "submit",
        name: "submit",
        label: "Submit",
        renderType: "submit",
        disabled: false,
        classes: "gap-10 lg:w-full",
        testid: "submit-button",
      },
    ],
  },
};

const createStoryArgs = (url: string) => ({
  ...baseArgs,
  form: {
    ...baseArgs.form,
    url,
  },
});

export const ContactArgs: ContactSectionProps = {
  ...createStoryArgs(
    "https://www.greatfrontend.com/api/projects/challenges/contact",
  ),
};

export const ContactSuccessArgs: ContactSectionProps = {
  ...createStoryArgs("/contact/success"),
};

export const ContactErrorArgs: ContactSectionProps = {
  ...createStoryArgs("/contact/error"),
};
