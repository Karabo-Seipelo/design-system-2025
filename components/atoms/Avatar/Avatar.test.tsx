import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from ".";
import { describe } from "node:test";

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

describe("Avatar", () => {
  it("renders with default props", () => {
    render(<Avatar alt="John Doe" imageUrl="/src/test.png" />);
    const avatar = screen.getByAltText(/John Doe/i);
    expect(avatar).toBeInTheDocument();
  });
});
