import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from ".";

describe("Page Component", () => {
  it("renders children correctly", () => {
    render(
      <Page>
        <p>Test Content</p>
      </Page>,
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies default classes when no classes prop is provided", () => {
    render(
      <Page>
        <p>Test Content</p>
      </Page>,
    );
    const container = screen.getByText("Test Content").parentElement;
    expect(container).toHaveClass("max-w-[1440px] mx-auto");
  });

  it("applies custom classes when classes prop is provided", () => {
    render(
      <Page classes="custom-class">
        <p>Test Content</p>
      </Page>,
    );
    const container = screen.getByText("Test Content").parentElement;
    expect(container).toHaveClass("custom-class max-w-[1440px] mx-auto");
  });

  it("renders without crashing when no children are provided", () => {
    const { container } = render(<Page />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
