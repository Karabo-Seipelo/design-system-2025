import type { Meta, StoryObj } from "@storybook/react";
import Artboard from "../../atoms/Artboard";
import Toast from "../../Toast";
import MarketingLandingPage from ".";
import * as NavBarStories from "../../NavBar/NavBar.stories";
import * as HeroSectionStories from "../../Section/Hero/HeroSection.stories";
import * as LogoMarqueeStories from "../../LogoMarquee/LogoMarquee.stories";
import * as FeatureSectionStories from "../../Section/Features/FeaturesSection.stories";
import * as PriceStories from "../../Section/Pricing/Tier/PricingTeir.stories";
import * as FAQStories from "../../Section/FAQ/FAQ.stories";
import * as NewsletterSectionStories from "../../Section/Newsletter/NewsletterSection.stories";
import * as FooterStories from "../../Section/Footer/Footer.stories";
import * as ContactStories from "../../Section/Contact/ContactSection.stories";

const meta = {
  title: "Marketing/Pages/MarketingLandingPage",
  component: MarketingLandingPage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Artboard>
        <Toast />
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof MarketingLandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nav: {
      navItems: NavBarStories.Default.args.navItems ?? [],
      brand: NavBarStories.Default.args.brand ?? {
        name: "Abstractly",
        imageUrl: "/abstractly.svg",
        href: "#",
      },
      callToAction: NavBarStories.Default.args.callToAction,
    },
    hero: {
      title: HeroSectionStories.Simple.args.title ?? "Default title",
      description:
        HeroSectionStories.Simple.args.description ?? "Default description",
      imageUrl: HeroSectionStories.Simple.args.imageUrl ?? "abstract.jpg",
      buttons: HeroSectionStories.Simple.args.buttons ?? [],
      features: HeroSectionStories.Simple.args.features ?? [],
    },
    logoMarquee: {
      title: LogoMarqueeStories.Default.args.title ?? "Default title",
      logos: LogoMarqueeStories.Default.args.logos ?? [],
    },
    featureGrid: {
      title: FeatureSectionStories.SectionGrid.args.title ?? "Default title",
      subTitle:
        FeatureSectionStories.SectionGrid.args.subTitle ?? "Default subtitle",
      description:
        FeatureSectionStories.SectionGrid.args.description ??
        "Default description",
      featureLayout:
        FeatureSectionStories.SectionGrid.args.featureLayout ?? "grid",
      features: FeatureSectionStories.SectionGrid.args.features ?? [],
    },
    featureRight: {
      imageUrl:
        FeatureSectionStories.SectionRight.args.imageUrl ?? "abstract.jpg",
      title: FeatureSectionStories.SectionRight.args.title ?? "Default title",
      subTitle:
        FeatureSectionStories.SectionRight.args.subTitle ?? "Default subtitle",
      description:
        FeatureSectionStories.SectionRight.args.description ??
        "Default description",
      features: FeatureSectionStories.SectionRight.args.features ?? [],
    },
    pricing: {
      title: PriceStories.Tiers.args.title ?? "Default title",
      description: PriceStories.Tiers.args.description ?? "Default description",
      subTitle: PriceStories.Tiers.args.subTitle ?? "Default subtitle",
      featureTitle:
        PriceStories.Tiers.args.featureTitle ?? "Default feature title",
      features: PriceStories.Tiers.args.features ?? [],
      tiers: PriceStories.Tiers.args.tiers ?? [],
    },
    faq: {
      title: FAQStories.Default.args.title ?? "Default title",
      subTitle: FAQStories.Default.args.subTitle ?? "Default subtitle",
      articles: FAQStories.Default.args.articles ?? [],
      contactDetails: FAQStories.Default.args.contactDetails ?? {
        title: "Need more help?",
        content:
          "We're here to help. Get in touch and we'll get back to you as soon as we can.",
        button: {
          label: "Contact us",
        },
      },
    },
    newsLetter: {
      title: NewsletterSectionStories.Default.args.title ?? "Default title",
      features: NewsletterSectionStories.Default.args.features ?? [],
      imageUrl:
        NewsletterSectionStories.Default.args.imageUrl ?? "abstract.jpg",
      form: NewsletterSectionStories.Default.args.form ?? {},
    },
    contact: {
      title: ContactStories.Default.args.title ?? "Default title",
      description:
        ContactStories.Default.args.description ?? "Default description",
      contactDetails: ContactStories.Default.args.contactDetails ?? {
        title: "Default contact title",
        content: "Default contact content",
        button: {
          label: "Default button label",
        },
      },
      resendForm: ContactStories.Default.args.resendForm ?? {},
      form: {
        notification: ContactStories.Default.args.form?.notification ?? {},
        fields: ContactStories.Default.args.form?.fields ?? [],
        url: ContactStories.Default.args.form?.url ?? "",
      },
      dropShadow: false,
    },
    footer: {
      links: FooterStories.Default.args.links ?? [],
      socials: FooterStories.Default.args.socials ?? [],
      copyright: FooterStories.Default.args.copyright,
    },
  },
};
