import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./FooterMultiColumn.stories";
const { Default } = composeStories(stories);

describe("FooterMultiColumn Component", () => {
  it("renders the footer with all links", () => {
    render(<Default />);

    expect(screen.getByText("footer")).toBeInTheDocument();
  });
});
