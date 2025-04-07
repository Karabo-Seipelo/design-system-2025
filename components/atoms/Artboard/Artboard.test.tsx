import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Artboard from ".";

describe("Stars", () => {
  it("renders the artboard", () => {
    render(
      <Artboard>
        <p>Test Child</p>
      </Artboard>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("applies custom classes to the section element", () => {
    const customClasses = "custom-class";
    render(
      <Artboard classes={customClasses}>
        <p>Test Child</p>
      </Artboard>
    );
    const sectionElement = screen.getByText("Test Child").closest("section");
    expect(sectionElement).toHaveClass(customClasses);
  });

  it("renders with the default structure", () => {
    render(
      <Artboard>
        <p>Test Child</p>
      </Artboard>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();

    const sectionElement = screen.getByText("Test Child").closest("section");
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass(
      "shadow-sm md:shadow-md lg:shadow-lg rounded-md bg-white min-h-[calc(100vh_-32px)]"
    );
  });
});
