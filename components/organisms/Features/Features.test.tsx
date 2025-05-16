import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeatureSection from ".";
import { ORIENTATION, FEATURE_LAYOUT } from "./interfaces";

describe("FeatureSection", () => {
  it("renders the title, subtitle, and description", () => {
    render(
      <FeatureSection
        title="Features"
        subTitle="Our Offerings"
        description="Explore the amazing features we provide."
      />,
    );

    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Our Offerings")).toBeInTheDocument();
    expect(
      screen.getByText("Explore the amazing features we provide."),
    ).toBeInTheDocument();
  });

  it("renders features in list layout", () => {
    const features = [
      { title: "Feature 1", description: "Description 1", icon: "/icon1.png" },
      { title: "Feature 2", description: "Description 2", icon: "/icon2.png" },
    ];

    render(
      <FeatureSection
        title="Features"
        subTitle="Our Offerings"
        description="Explore our features"
        features={features}
        featureLayout={FEATURE_LAYOUT.LIST}
      />,
    );

    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  it("renders features in grid layout", () => {
    const features = [
      { title: "Feature 1", description: "Description 1", icon: "/icon1.png" },
      { title: "Feature 2", description: "Description 2", icon: "/icon2.png" },
    ];

    render(
      <FeatureSection
        title="Features"
        subTitle="Our Offerings"
        description="Explore our features"
        features={features}
        featureLayout={FEATURE_LAYOUT.GRID}
      />,
    );

    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  it.skip("renders the image with correct orientation", () => {
    render(
      <FeatureSection
        title="Features"
        imageUrl="/test-image.png"
        subTitle="Our Offerings"
        description="Explore our features"
        orientation={ORIENTATION.LEFT}
      />,
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/test-image.png");
    expect(image).toHaveClass("order-first");
  });

  it("does not render features or image if not provided", () => {
    render(
      <FeatureSection
        title="Features"
        subTitle="Our Offerings"
        description="Explore our features"
      />,
    );

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByText("Feature 1")).not.toBeInTheDocument();
  });
});
