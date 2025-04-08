import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Container from ".";

describe("Container", () => {
  it("renders the container", () => {
    render(
      <Container>
        <p>Test Child</p>
      </Container>,
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("applies custom classes to the section element", () => {
    const customClasses = "custom-class";
    render(
      <Container classes={customClasses}>
        <p>Test Child</p>
      </Container>,
    );
    const sectionElement = screen.getByText("Test Child").closest("div");
    expect(sectionElement).toHaveClass(customClasses);
  });
});
