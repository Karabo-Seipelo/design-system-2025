import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductInfo from ".";

describe("ProductInfo", () => {
  const mockInfo = [
    {
      title: "Product Details",
      description: [
        "This is a <strong>great</strong> product.",
        "It has many features.",
      ],
    },
    {
      title: "Specifications",
      description: ["Weight: 1kg", "Dimensions: 10x10x10cm"],
    },
  ];

  it("renders the correct number of Disclosure components", () => {
    render(<ProductInfo info={mockInfo} />);
    const disclosureButtons = screen.getAllByRole("button");
    expect(disclosureButtons).toHaveLength(mockInfo.length);
  });

  it("renders the titles correctly", () => {
    render(<ProductInfo info={mockInfo} />);
    mockInfo.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders fallback UI when info is empty", () => {
    render(<ProductInfo info={[]} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
