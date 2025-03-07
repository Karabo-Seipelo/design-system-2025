import type { Meta, StoryObj } from "@storybook/react";
import MarketingLandingPage from ".";

const meta = {
  title: "Marketing/Pages/MarketingLandingPage",
  component: MarketingLandingPage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MarketingLandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const Nav = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contact", href: "#" },
];

const CallToAction = [
  { name: "Learn more", mobileName: "Learn more", href: "#", primary: false },
  { name: "See pricing", mobileName: "Try it out", href: "#", primary: true },
];

const logos = {
  title: "Used by teams that love",
  logos: [
    {
      imageUrl: "logo.svg",
      alt: "test",
    },
    {
      imageUrl: "logo-2.svg",
      alt: "test",
    },
    {
      imageUrl: "logo-3.svg",
      alt: "test",
    },
    {
      imageUrl: "logo-4.svg",
      alt: "test",
    },
    {
      imageUrl: "logo-5.svg",
      alt: "test",
    },
    {
      imageUrl: "logo-6.svg",
      alt: "test",
    },
    {
      imageUrl: "logo-7.svg",
      alt: "test",
    },
  ],
};

const basicPlanFeatures = [
  "Standard quality images",
  "Limited to personal use",
  "Email support",
];

const standardPlanFeatures = [
  "Expanded library with more diverse abstract images",
  "High-resolution images available",
  "Suitable for commercial use",
  "Priority email support",
  "Advanced analytics",
];

const premiumPlanFeatures = [
  "Full access to the entire image library, including exclusive content",
  "Highest quality images, including premium collections",
  "Commercial and resale rights",
  "Dedicated customer support line",
  "24/7 support response time",
  "Advanced analytics and insights",
];

const basicPlan = (price: string, billedAt: string) => ({
  plan: "Basic Plan",
  description: "Access to a curated selection of abstract images",
  price,
  billedAt,
  features: basicPlanFeatures,
  buttons: [
    {
      label: "Buy now",
      primary: false,
    },
  ],
});

const standardPlan = (price: string, billedAt: string) => ({
  highlight: true,
  tag: "Most popular",
  plan: "Standard Plan",
  price,
  description: "Next-level Integrations, priced economically",
  billedAt,
  features: standardPlanFeatures,
  buttons: [
    {
      label: "Buy now",
      primary: true,
    },
  ],
});

const premiumPlan = (price: string, billedAt: string) => ({
  plan: "Premium Plan",
  price,
  description: "Experience limitless living for power users",
  billedAt,
  features: premiumPlanFeatures,
  buttons: [
    {
      label: "Buy now",
      primary: false,
    },
  ],
});

const baseArgs = {
  title: "Get the finest curated abstracts delivered weekly to your inbox",
  features: [
    {
      description: "Exclusive access to new abstract images and collections",
      icon: "check-fill.svg",
    },
    {
      description: "Unlock special promotions only for subscribers",
      icon: "check-fill.svg",
    },
    {
      description: "Regular doses of artistic inspiration",
      icon: "check-fill.svg",
    },
  ],
  imageUrl: "abstract.jpg",
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

const createStoryArgs = (formUrl: string) => ({
  ...baseArgs,
  form: {
    ...baseArgs.form,
    formUrl,
  },
});

const createStoryArgsContact = (url: string) => ({
  ...baseArgs,
  form: {
    ...baseArgs.form,
    url,
  },
});

export const Default: Story = {
  args: {
    nav: {
      navItems: Nav,
      brand: {
        name: "Abstractly",
        imageUrl: "/abstractly.svg",
        href: "#",
      },
      callToAction: CallToAction,
    },
    hero: {
      title: "Well craft abstract images",
      description:
        "High quality images for your projects, wallpaper and presentations",
      imageUrl: "prism.png",
      buttons: [
        {
          label: "Learn more",
          primary: false,
        },
        {
          label: "See pricing",
          primary: true,
        },
      ],
    },
    logoMarquee: logos,
    featureGrid: {
      title: "Easy access to top quality images",
      subTitle: "Premium abstract images",
      description:
        "In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.",
      feautureLayout: "grid",
      features: [
        {
          title: "Infinite Downloads",
          description:
            "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
          icon: "download-2-line.svg",
        },
        {
          title: "Purely Handcrafted",
          description:
            " No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
          icon: "brush-line.svg",
        },
        {
          title: "All Are Under licensed",
          description:
            "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
          icon: "copyright-line.svg",
        },
        {
          title: "Cancel Anytime",
          description:
            "Subscribe at your own pace, and cancel when you feel it's enough.",
          icon: "refund-2-fill.svg",
        },
        {
          title: "Empowering For Team",
          description:
            "We support multiple seats at once, requiring only a single payment.",
          icon: "team-line.svg",
        },
        {
          title: "No Limitations",
          description:
            "Use as many as you want, from Dribbble presentations to PowerPoint presentations.",
          icon: "refresh-line.svg",
        },
      ],
    },
    featureRight: {
      imageUrl: "hero-img.png",
      title: "For designers, by designers",
      subTitle: "High quality images",
      description:
        "Unleash boundless creativity with a large repository of images optimized for designers",
      features: [
        {
          title: "5k resolution support",
          description:
            "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
          icon: "hd-line.svg",
        },
        {
          title: "From water to glass",
          description:
            "We offer a wide array of abstractions, raning from water to glass, and encompassing various styles including 3D and vector.",
          icon: "water-percent-line.svg",
        },
        {
          title: "Portrait or landscape",
          description:
            "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
          icon: "rainbow-line.svg",
        },
      ],
    },
    pricing: {
      title: "Fit for all your needs",
      description:
        "Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.",
      subTitle: "Pricing Tiers",
      featureTitle: "Unlock creativity once, enjoy forever",
      features: [
        "128 available credits for all images",
        "Up to 3 users",
        "24 hour response time",
        "Advanced analytics",
      ],
      tiers: [
        {
          subscription: "Monthly",
          prices: [
            basicPlan("$9.99", "Billed monthly"),
            standardPlan("$19.99", "Billed monthly"),
            premiumPlan("$29.99", "Billed monthly"),
          ],
        },
        {
          subscription: "Annually",
          prices: [
            basicPlan("$6.99", "Billed annually ($84)"),
            standardPlan("$15.99", "Billed annually ($192)"),
            premiumPlan("$25.99", "Billed annually ($312)"),
          ],
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      subTitle: "Get all your questions answered",
      articles: [
        {
          title: "What types of images are available on your platform?",
          description:
            "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
        },
        {
          title: "How can I access and download images from your platform?",
          description:
            "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
        },
        {
          title:
            "Do you offer free images, or is there a subscription required?",
          description:
            "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
        },
        {
          title: "What payment methods do you accept for subscriptions?",
          description:
            "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
        },
        {
          title: "Can I cancel or modify my subscription at any time?",
          description:
            "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
        },
        {
          title: "How frequently do you update your image collection?",
          description:
            "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
        },
      ],
      contactDetails: {
        title: "Can’t find the answer you’re looking for?",
        content:
          'Reach out to our <a href="#" class="text-indigo-700">customer support</a> team.',
        button: {
          label: "Get in touch",
        },
      },
    },
    newsLetter: createStoryArgs(
      "https://www.greatfrontend.com/api/projects/challenges/newsletter",
    ),
    contact: createStoryArgsContact(
      "https://www.greatfrontend.com/api/projects/challenges/contact",
    ),
    footer: {
      links: [
        {
          label: "Features",
          href: "/",
        },
        {
          label: "Pricing",
          href: "/",
        },
        {
          label: "About us",
          href: "/",
        },
        {
          label: "Contact",
          href: "/",
        },
      ],
      socails: [
        {
          label: "Youtube",
          href: "/",
          icon: "youtube",
        },
        {
          label: "Instagram",
          href: "/",
          icon: "instagram",
        },
        {
          label: "Facebook",
          href: "/",
          icon: "facebook",
        },
        {
          label: "Github",
          href: "/",
          icon: "github",
        },
        {
          label: "Twitter",
          href: "/",
          icon: "twitter",
        },
      ],
      copyright: "&copy; 2024 Abstractly, Inc. All rights reserved.",
    },
  },
};
