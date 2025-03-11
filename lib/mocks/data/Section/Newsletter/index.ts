import { NewsletterSectionProps } from "../../../../../components/Section/Newsletter";

const baseArgs = {
  title: "Get the finest curated abstracts delivered weekly to your inbox",
  features: [
    {
      description: "Exclusive access to new abstract images and collections",
      icon: "/check-fill.svg",
    },
    {
      description: "Unlock special promotions only for subscribers",
      icon: "/check-fill.svg",
    },
    {
      description: "Regular doses of artistic inspiration",
      icon: "/check-fill.svg",
    },
  ],
  imageUrl: "/abstract.jpg",
  form: {
    instruction: "Subscribe to our newsletter",
    label: "Subscribe",
    placeholder: "Enter your email address",
    toast: {
      success: {
        badge: "Success",
        message: "Subscription successful! Please check your email to confirm.",
        status: "SUCCESS",
      },
      error: {
        badge: "Error",
        message: "Subscription failed. Please try again.",
        status: "ERROR",
      },
    },
  },
};

const createStoryArgs = (formUrl: string): NewsletterSectionProps => ({
  ...baseArgs,
  form: {
    ...baseArgs.form,
    formUrl,
  },
});

export const NewsletterDefault: NewsletterSectionProps = {
  ...createStoryArgs(
    "https://www.greatfrontend.com/api/projects/challenges/newsletter",
  ),
};

export const NewsletterSuccess: NewsletterSectionProps = {
  ...createStoryArgs("/newsletter/success"),
};

export const NewsletterError: NewsletterSectionProps = {
  ...createStoryArgs("/newsletter/error"),
};
