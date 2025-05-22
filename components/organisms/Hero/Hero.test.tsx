/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./HeroSection.stories";
const { Simple, FeatureBullets } = composeStories(stories);
import HeroSection from ".";

describe("HeroSection", () => {
  const mockProps = {
    title: "Welcome to Hero Section",
    description: "This is a description for the Hero Section.",
    imageUrl: "/hero-image.jpg",
    buttons: [
      { label: "Learn More", primary: true },
      { label: "Get Started", primary: false },
    ],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    classes: "custom-class",
  };

  jest.mock("next/image", () => ({
    __esModule: true,
    default: (
      props: JSX.IntrinsicAttributes &
        React.ImgHTMLAttributes<HTMLImageElement>,
    ) => {
      return <img {...props} />;
    },
  }));

  it("renders the storybook simple HeroSection config", () => {
    render(<Simple />);
    expect(screen.getByText("Well craft abstract images")).toBeInTheDocument();
    expect(
      screen.getByText(
        "High quality images for your projects, wallpaper and presentations",
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("renders the storybook feature bullets HeroSection config", () => {
    render(<FeatureBullets />);
    expect(screen.getByText("Premium abstract images")).toBeInTheDocument();
    expect(screen.getByText("Minimum 5K image resolution")).toBeInTheDocument();
    expect(
      screen.getByText("Various format variants avaliable"),
    ).toBeInTheDocument();
    expect(screen.getByText("Retina display support")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("renders the HeroSection with all props", () => {
    render(<HeroSection {...mockProps} />);

    expect(screen.getByText("Welcome to Hero Section")).toBeInTheDocument();
    expect(
      screen.getByText("This is a description for the Hero Section."),
    ).toBeInTheDocument();
    expect(screen.getByAltText("testing")).toBeInTheDocument();
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Feature 3")).toBeInTheDocument();
    expect(screen.getByText("Learn More")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("renders without optional props (description and features)", () => {
    const { description, features, ...propsWithoutOptional } = mockProps;
    render(<HeroSection {...propsWithoutOptional} />);

    expect(screen.getByText("Welcome to Hero Section")).toBeInTheDocument();
    expect(
      screen.queryByText("This is a description for the Hero Section."),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(features[0])).not.toBeInTheDocument();
    expect(screen.queryByText(features[1])).not.toBeInTheDocument();
    expect(screen.queryByText(features[2])).not.toBeInTheDocument();
    expect(screen.queryByText(description)).not.toBeInTheDocument();
  });

  it("renders buttons with correct styles based on primary prop", () => {
    render(<HeroSection {...mockProps} />);

    const primaryButton = screen.getByText("Learn More");
    const secondaryButton = screen.getByText("Get Started");

    expect(primaryButton).toHaveClass("bg-indigo-600 text-white");
    expect(secondaryButton).toHaveClass("bg-white border-[#e6e6e6]");
  });
});
