import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
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
