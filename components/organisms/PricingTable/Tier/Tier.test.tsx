import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pricing from ".";

describe("Pricing Component", () => {
  const mockTiers = [
    {
      subscription: "Basic",
      prices: [
        {
          highlight: false,
          tag: "Popular",
          classes: "custom-class",
          plan: "Basic Plan",
          price: "$10/month",
          billedAt: "Billed annually",
          description: "Basic features for personal use",
          buttons: [
            { label: "Choose Plan", primary: true },
            { label: "Learn More", primary: false },
          ],
          features: ["Feature 1", "Feature 2"],
        },
      ],
    },
    {
      subscription: "Pro",
      prices: [
        {
          highlight: true,
          tag: "Best Value",
          classes: "highlight-class",
          plan: "Pro Plan",
          price: "$20/month",
          billedAt: "Billed annually",
          description: "Advanced features for professionals",
          buttons: [
            { label: "Choose Plan", primary: true },
            { label: "Learn More", primary: false },
          ],
          features: ["Feature A", "Feature B", "Feature C"],
        },
      ],
    },
  ];

  it("renders the Pricing component with title, subtitle, and description", () => {
    render(
      <Pricing
        title="Our Pricing"
        subTitle="Choose your plan"
        description="Find the plan that works best for you."
        tiers={mockTiers}
      />,
    );

    expect(screen.getByText("Our Pricing")).toBeInTheDocument();
    expect(screen.getByText("Choose your plan")).toBeInTheDocument();
    expect(
      screen.getByText("Find the plan that works best for you."),
    ).toBeInTheDocument();
  });

  it("renders the correct number of subscription tabs", () => {
    render(
      <Pricing
        title="Our Pricing"
        subTitle="Choose your plan"
        tiers={mockTiers}
      />,
    );

    expect(screen.getByText("Basic")).toBeInTheDocument();
    expect(screen.getByText("Pro")).toBeInTheDocument();
  });

  it("renders the PriceTable component with correct details", () => {
    render(
      <Pricing
        title="Our Pricing"
        subTitle="Choose your plan"
        tiers={mockTiers}
      />,
    );

    expect(screen.getByText("Basic Plan")).toBeInTheDocument();
    expect(screen.getByText("$10/month")).toBeInTheDocument();
    expect(screen.getByText("Billed annually")).toBeInTheDocument();
    expect(
      screen.getByText("Basic features for personal use"),
    ).toBeInTheDocument();
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
  });

  it("renders buttons with correct labels", () => {
    render(
      <Pricing
        title="Our Pricing"
        subTitle="Choose your plan"
        tiers={mockTiers}
      />,
    );

    expect(screen.getByText("Choose Plan")).toBeInTheDocument();
    expect(screen.getByText("Learn More")).toBeInTheDocument();
  });

  it("renders without tiers gracefully", () => {
    render(<Pricing title="Our Pricing" subTitle="Choose your plan" />);

    expect(screen.getByText("Our Pricing")).toBeInTheDocument();
    expect(screen.getByText("Choose your plan")).toBeInTheDocument();
    expect(screen.queryByText("Basic")).not.toBeInTheDocument();
    expect(screen.queryByText("Pro")).not.toBeInTheDocument();
  });
});
