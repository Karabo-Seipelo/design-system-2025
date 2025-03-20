/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./BlogCard.stories";
const { Default } = composeStories(stories);

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

describe("BlogCard", () => {
  it("renders the blog card with all props", () => {
    render(<Default />);

    expect(
      screen.getByText("Top 5 Living Room Inspirations"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Curated vibrants colors for your living, make it pop & calm in the same time.",
      ),
    ).toBeInTheDocument();
  });
});
