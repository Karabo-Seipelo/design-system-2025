import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColumnLogoAndDescription from "./ColumnLogoAndDescription";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
  ) => {
    return <img {...props} />;
  },
}));

describe("ColumnLogoAndDescription Component", () => {
  it("renders with default props", () => {
    const image = {
      image_url: "/logo.png",
      alt: "Logo",
    };
    render(<ColumnLogoAndDescription logo={image} description="help" />);
    const logo = screen.getByAltText(/Logo/i);
    const description = screen.getByText(/help/i);
    expect(logo).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders with fallback logo", () => {
    const image = {
      image_url: undefined,
      alt: "Logo",
    };
    render(<ColumnLogoAndDescription logo={image} description="help" />);
    const logo = screen.getByAltText(/Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders with fallback alt text", () => {
    const image = {
      image_url: "/logo.png",
      alt: undefined,
    };
    render(<ColumnLogoAndDescription logo={image} description="help" />);
    const logo = screen.getByAltText(/Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders without description", () => {
    const image = {
      image_url: "/logo.png",
      alt: "Logo",
    };
    render(<ColumnLogoAndDescription logo={image} />);
    const logo = screen.getByAltText(/Logo/i);
    expect(logo).toBeInTheDocument();
  });
});
