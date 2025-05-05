import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./Badge.stories";
const { Default, Promo, AllStates } = composeStories(stories);

describe("Badge Component", () => {
  afterEach(cleanup);

  describe("When the Badge is rendered in all states", () => {
    it("should render with all states", () => {
      render(<AllStates />);
      const allstates = screen.getByTestId("all-states");
      expect(allstates).toBeInTheDocument();
    });
  });

  describe("When the Badge is rendered with default variant", () => {
    it("renders with default variant", () => {
      render(<Default />);
      const badge = screen.getByText(/20% off/i);
      expect(badge).toBeInTheDocument();
    });
  });

  describe("When the Badge is rendered with promo variant", () => {
    it("renders with promo variant", () => {
      render(<Promo />);
      const badge = screen.getByText(/30% off/i);
      expect(badge).toBeInTheDocument();
    });
  });
});
