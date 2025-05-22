import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
  ) => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const { fill, ...rest } = props;
    return <img {...rest} />;
  },
}));

import Avatar from ".";

describe("Avatar Component", () => {
  describe("Given the Avatar component is rendered", () => {
    it("should render with default props", () => {
      render(<Avatar alt="John Doe" imageUrl="/src/test.png" />);
      const avatar = screen.getByAltText(/John Doe/i) as HTMLImageElement;
      expect(avatar).toBeInTheDocument();
      expect(avatar.tagName).toBe("IMG");
      expect(avatar).toHaveAttribute("alt", "John Doe");
      expect(avatar).toHaveClass("object-cover");
    });

    it("should render the correct image URL", () => {
      render(<Avatar alt="Jane Doe" imageUrl="/src/jane.png" />);
      const avatar = screen.getByAltText(/Jane Doe/i) as HTMLImageElement;
      expect(avatar.src).toContain("/src/jane.png");
    });

    it("should apply additional class names if provided", () => {
      render(
        <Avatar
          alt="John Doe"
          imageUrl="/src/test.png"
          className="custom-class"
        />,
      );
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("custom-class");
    });

    it("should render a fallback if no image URL is provided", () => {
      render(<Avatar alt="Fallback User" />);
      const avatar = screen.getByAltText(/Fallback User/i);
      expect(avatar).toBeInTheDocument();
      expect(avatar.tagName).toBe("IMG");
    });
  });
});
