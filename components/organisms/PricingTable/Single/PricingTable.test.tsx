import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pricing from ".";

describe("Pricing Component", () => {
  const mockPrices = [
    {
      tag: "Best Value",
      price: "$99",
      description: "Per month",
      priceType: "Monthly",
      buttons: [
        { label: "Get Started", primary: true },
        { label: "Learn More", primary: false },
      ],
    },
  ];

  const mockFeatures = ["Feature 1", "Feature 2", "Feature 3"];

  const defaultProps = {
    title: "Pricing Plan",
    subTitle: "Choose your plan",
    description: "Affordable pricing for everyone",
    featureTitle: "Features",
    features: mockFeatures,
    prices: mockPrices,
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

  it("renders the Pricing component with all props", () => {
    render(<Pricing {...defaultProps} />);

    expect(screen.getByText("Pricing Plan")).toBeInTheDocument();
    expect(screen.getByText("Choose your plan")).toBeInTheDocument();
    expect(
      screen.getByText("Affordable pricing for everyone"),
    ).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();

    mockFeatures.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });

    expect(screen.getByText("$99")).toBeInTheDocument();
    expect(screen.getByText("Per month")).toBeInTheDocument();
    expect(screen.getByText("Monthly")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
    expect(screen.getByText("Learn More")).toBeInTheDocument();
  });

  it("renders the Pricing component without optional description", () => {
    const { description, ...propsWithoutDescription } = defaultProps;
    render(<Pricing {...propsWithoutDescription} />);

    expect(screen.queryByText(description)).not.toBeInTheDocument();
  });

  it("renders the Pricing component without features", () => {
    const { features, ...propsWithoutFeatures } = defaultProps;
    render(<Pricing {...propsWithoutFeatures} />);

    expect(screen.queryByText(features[0])).not.toBeInTheDocument();
    expect(screen.queryByText(features[1])).not.toBeInTheDocument();
    expect(screen.queryByText(features[2])).not.toBeInTheDocument();
  });

  it("renders the Pricing component with multiple prices", () => {
    const multiplePrices = [
      ...mockPrices,
      {
        tag: "Standard",
        price: "$49",
        description: "Per month",
        priceType: "Monthly",
        buttons: [{ label: "Subscribe", primary: true }],
      },
    ];
    render(<Pricing {...defaultProps} prices={multiplePrices} />);

    expect(screen.getByText("$99")).toBeInTheDocument();
    expect(screen.getByText("$49")).toBeInTheDocument();
    expect(screen.getByText("Subscribe")).toBeInTheDocument();
  });

  it("renders the Pricing component without a subtitle", () => {
    const { subTitle, ...propsWithoutSubtitle } = defaultProps;
    render(<Pricing {...propsWithoutSubtitle} />);

    expect(screen.queryByText(subTitle)).not.toBeInTheDocument();
  });

  it("renders the Pricing component with no prices", () => {
    render(<Pricing {...defaultProps} prices={[]} />);

    expect(screen.queryByText("$99")).not.toBeInTheDocument();
    expect(screen.queryByText("Per month")).not.toBeInTheDocument();
  });
});
