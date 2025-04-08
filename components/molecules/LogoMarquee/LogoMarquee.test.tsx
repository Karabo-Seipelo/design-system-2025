import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./LogoMarquee.stories";
const { Default } = composeStories(stories);
import LogoMarquee from ".";

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

describe("LogoMarquee", () => {
  const logos = [
    { imageUrl: "/logo1.png", alt: "Logo 1" },
    { imageUrl: "/logo2.png", alt: "Logo 2" },
  ];

  it("renders the LogoMarquee component with default props", () => {
    const argsLogos = Default.args.logos?.length ?? 7;
    render(<Default />);
    const images = screen.getAllByRole("img");
    expect(screen.getByText("Used by teams that love")).toBeInTheDocument();
    expect(images).toHaveLength(argsLogos * 2);
  });

  it("renders the title when provided", () => {
    render(<LogoMarquee title="Our Partners" logos={logos} />);
    expect(screen.getByText("Our Partners")).toBeInTheDocument();
  });

  it("does not render the title when not provided", () => {
    render(<LogoMarquee logos={logos} />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("renders all logos twice for marquee effect", () => {
    render(<LogoMarquee title="Our Partners" logos={logos} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(logos.length * 2);
    expect(images[0]).toHaveAttribute("src", "/logo1.png");
    expect(images[0]).toHaveAttribute("alt", "Logo 1");
    expect(images[1]).toHaveAttribute("src", "/logo2.png");
    expect(images[1]).toHaveAttribute("alt", "Logo 2");
  });

  it("applies custom classes when provided", () => {
    render(
      <LogoMarquee title="Our Partners" logos={logos} classes="custom-class" />,
    );
    const container = screen.getByText("Our Partners").parentElement;
    expect(container).toHaveClass("custom-class");
  });

  it("renders without crashing when logos array is empty", () => {
    render(<LogoMarquee title="Our Partners" logos={[]} />);
    expect(screen.getByText("Our Partners")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
