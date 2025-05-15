import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ColorSwatches.stories";
const {
  Default,
  WhiteSwatch,
  WhiteSwatchWithHex,
  Active,
  OutofStock,
  ActiveOutofStock,
  AllStates,
} = composeStories(stories);
import ColorSwatches from ".";

jest.mock("remixicon/fonts/remixicon.css", () => {});

describe("ColorSwatches Component", () => {
  describe("Given the default variant", () => {
    it("should display the orange color swatch", () => {
      render(<Default />);
      const swatch = screen.getByTestId("color-swatch-orange");
      expect(swatch).toBeInTheDocument();
    });

    it("should display the white color swatch", () => {
      render(<WhiteSwatch />);
      const swatch = screen.getByTestId("color-swatch-white");
      expect(swatch).toBeInTheDocument();
    });

    it("should display the white color swatch with hex value", () => {
      render(<WhiteSwatchWithHex />);
      const swatch = screen.getByTestId("color-swatch-#ffff");
      expect(swatch).toBeInTheDocument();
    });
  });

  describe("Given the default variant is active", () => {
    it("should display the orange color swatch as active", () => {
      render(<Active />);
      const swatch = screen.getByTestId("color-swatch-orange");
      expect(swatch).toBeInTheDocument();
    });
  });

  describe("Given a color swatch with an aria label", () => {
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

  describe("Given the color swatch is out of stock", () => {
    it("should display the orange color swatch as out of stock", () => {
      render(<OutofStock />);
      const swatch = screen.getByTestId("color-swatch-orange");
      expect(swatch).toBeInTheDocument();
    });
  });

  describe("Given the color swatch is active and out of stock", () => {
    it("should display the orange color swatch as active and out of stock", () => {
      render(<ActiveOutofStock />);
      const swatch = screen.getByTestId("color-swatch-orange");
      expect(swatch).toBeInTheDocument();
    });
  });

  describe("Given all color swatch states", () => {
    it("should display all swatch states", () => {
      render(<AllStates />);
      const swatch = screen.getByTestId("all-states");
      expect(swatch).toBeInTheDocument();
    });
  });
});
