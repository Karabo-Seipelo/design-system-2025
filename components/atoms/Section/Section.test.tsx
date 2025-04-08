import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Seciton from ".";

describe("Container", () => {
  it("renders the container", () => {
    render(
      <Seciton>
        <p>Test Child</p>
      </Seciton>,
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("applies custom classes to the section element", () => {
    const customClasses = "custom-class";
    render(
      <Seciton classes={customClasses}>
        <p>Test Child</p>
      </Seciton>,
    );
    const sectionElement = screen.getByText("Test Child").closest("section");
    expect(sectionElement).toHaveClass(customClasses);
  });
});
