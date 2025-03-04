/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProfileCard.stories";
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

describe("ProfileCard", () => {
  it("renders the profile card with all props", () => {
    render(<Default />);

    expect(screen.getByText("Sarah Dole")).toBeInTheDocument();
    expect(
      screen.getByText("Front End Engineer @ Microsoft"),
    ).toBeInTheDocument();
  });
});
