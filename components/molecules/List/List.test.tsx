/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from ".";

describe("List Component", () => {
  const mockFeatures = [
    {
      title: "Feature 1",
      description: "Description 1",
      icon: "/icon1.png",
      tel: "123456789",
    },
    {
      title: "Feature 2",
      description: "Description 2",
      icon: "/icon2.png",
      mailto: "test@example.com",
    },
    {
      title: "Feature 3",
      description: "Description 3",
      icon: "/icon3.png",
    },
  ];

  jest.mock("next/image", () => ({
    __esModule: true,
    default: (
      props: JSX.IntrinsicAttributes &
        React.ImgHTMLAttributes<HTMLImageElement>,
    ) => {
      return <img {...props} />;
    },
  }));

  it("renders the list with all features", () => {
    render(<List features={mockFeatures} />);

    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Feature 3")).toBeInTheDocument();
  });

  it("renders a feature with a telephone link", () => {
    render(<List features={mockFeatures} />);

    const telLink = screen.getByText("Description 1").closest("a");
    expect(telLink).toHaveAttribute("href", "tel:123456789");
  });

  it("renders a feature with a mailto link", () => {
    render(<List features={mockFeatures} />);

    const mailtoLink = screen.getByText("Description 2").closest("a");
    expect(mailtoLink).toHaveAttribute("href", "mailto:test@example.com");
  });

  it("renders a feature with a plain description", () => {
    render(<List features={mockFeatures} />);

    const plainDescription = screen.getByText("Description 3");
    expect(plainDescription.tagName).toBe("P");
  });

  it("applies drop shadow when dropShadow is true", () => {
    render(<List features={mockFeatures} dropShadow={true} />);

    const featureIcons = screen.getAllByRole("img");
    featureIcons.forEach((icon) => {
      expect(icon.closest("div")).toHaveClass(
        "shadow-[0_1px_3px_rgba(0,0,0,0.1)]",
      );
    });
  });

  it("does not apply drop shadow when dropShadow is false", () => {
    render(<List features={mockFeatures} dropShadow={false} />);

    const featureIcons = screen.getAllByRole("img");
    featureIcons.forEach((icon) => {
      expect(icon.closest("div")).not.toHaveClass(
        "shadow-[0_1px_3px_rgba(0,0,0,0.1)]",
      );
    });
  });
});
