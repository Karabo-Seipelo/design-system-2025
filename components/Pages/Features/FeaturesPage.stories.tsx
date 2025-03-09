import { Meta, StoryObj } from "@storybook/react";
import FeaturesPage from ".";
import * as NavBarStories from "../../NavBar/NavBar.stories";
import * as HeroSectionStories from "../../Section/Hero/HeroSection.stories";
import * as FeatureSectionStories from "../../Section/Features/FeaturesSection.stories";
import * as TestimonialStories from "../../Section/Testimonials/Testimonials.stories";
import * as PriceStories from "../../Section/Pricing/Tier/PricingTeir.stories";
import * as FAQStories from "../../Section/FAQ/FAQ.stories";
import * as NewsletterSectionStories from "../../Section/Newsletter/NewsletterSection.stories";
import * as FooterStories from "../../Section/Footer/Footer.stories";
import * as ContactStories from "../../Section/Contact/ContactSection.stories";

const meta = {
  title: "Marketing/Pages/Features",
  tags: ["autodocs"],
  component: FeaturesPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FeaturesPage>;

export default meta;
type Story = StoryObj<typeof FeaturesPage>;

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
      title: HeroSectionStories.FeatureBullets.args.title ?? "Default title",
      description:
        HeroSectionStories.FeatureBullets.args.description ??
        "Default description",
      imageUrl:
        HeroSectionStories.FeatureBullets.args.imageUrl ?? "abstract.jpg",
      buttons: HeroSectionStories.FeatureBullets.args.buttons ?? [],
      features: HeroSectionStories.FeatureBullets.args.features ?? [],
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
    featureLeft: {
      imageUrl:
        FeatureSectionStories.SectionLeft.args.imageUrl ?? "abstract.jpg",
      title: FeatureSectionStories.SectionLeft.args.title ?? "Default title",
      subTitle:
        FeatureSectionStories.SectionLeft.args.subTitle ?? "Default subtitle",
      description:
        FeatureSectionStories.SectionLeft.args.description ??
        "Default description",
      features: FeatureSectionStories.SectionLeft.args.features ?? [],
      orientation: FeatureSectionStories.SectionLeft.args.orientation ?? "left",
    },
    testimonials: {
      subTitle: TestimonialStories.Default.args.subTitle ?? "Testimonials",
      title:
        TestimonialStories.Default.args.title ??
        "Countless users, countless smiles",
      description:
        TestimonialStories.Default.args.description ??
        "Explore our community's journey and discover why satisfaction defines us.",
      testimonials: TestimonialStories.Default.args.testimonials ?? [],
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
