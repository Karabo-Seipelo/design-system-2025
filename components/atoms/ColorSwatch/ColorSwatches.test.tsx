import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ColorSwatches.stories";
const { Default, Active, OutofStock, ActiveOutofStock, AllStates } =
  composeStories(stories);
import ColorSwatches from ".";

jest.mock("remixicon/fonts/remixicon.css", () => {});

describe("ColorSwatches", () => {
  it("renders with default variant", () => {
    render(<Default />);
    const swatch = screen.getByTestId("color-swatch-orange");
    expect(swatch).toBeInTheDocument();
  });

  it("renders with default variant active", () => {
    render(<Active />);
    const swatch = screen.getByTestId("color-swatch-orange");
    expect(swatch).toBeInTheDocument();
  });

  it("renders with aria label", () => {
    render(
      <ColorSwatches
        name="color-swatch"
        color="brown"
        ariaLabel="Select color brown"
        active={false}
      />,
    );
    const swatch = screen.getByLabelText("Select color brown");
    expect(swatch).toBeInTheDocument();
  });

  it("renders with out of stock", () => {
    render(<OutofStock />);
    const swatch = screen.getByTestId("color-swatch-orange");
    expect(swatch).toBeInTheDocument();
  });

  it("renders with active out-of-stock", () => {
    render(<ActiveOutofStock />);
    const swatch = screen.getByTestId("color-swatch-orange");
    expect(swatch).toBeInTheDocument();
  });

  it("renders all states", () => {
    render(<AllStates />);
    const swatch = screen.getByTestId("all-states");
    expect(swatch).toBeInTheDocument();
  });
});
