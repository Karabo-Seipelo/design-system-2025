import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./Badge.stories";
const { Default, Promo, AllStates } = composeStories(stories);

describe("Badge", () => {
  it("renders with all states", () => {
    render(<AllStates />);
    const allstates = screen.getByTestId("all-states");
    expect(allstates).toBeInTheDocument();
  });

  it("renders with default variant", () => {
    render(<Default />);
    const badge = screen.getByText(/20% off/i);
    expect(badge).toBeInTheDocument();
  });

  it("renders with promo variant", () => {
    render(<Promo />);
    const badge = screen.getByText(/30% off/i);
    expect(badge).toBeInTheDocument();
  });
});
