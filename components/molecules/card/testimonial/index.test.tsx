/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ TestimonialCard.stories";
const { Default, WithoutHandle, WithoutLastname, WithoutAvatar } =
  composeStories(stories);

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>
  ) => {
    return <img {...props} />;
  },
}));

describe("TestimonialCard", () => {
  it("renders the testimonial card with all props", () => {
    render(<Default />);
    expect(screen.getByText("Sarah Dole")).toBeInTheDocument();
    expect(screen.getByText("@sarahdole")).toBeInTheDocument();
  });

  it("renders the testimonial card without handle", () => {
    render(<WithoutHandle />);

    expect(screen.getByText("Sarah Dole")).toBeInTheDocument();
    expect(screen.queryByText("@sarahdole")).not.toBeInTheDocument();
  });

  it("renders the testimonial card with unknown user when name is not provided", () => {
    render(<WithoutLastname />);

    expect(screen.getByText("unknown user")).toBeInTheDocument();
    expect(screen.getByAltText("unknown user")).toBeInTheDocument();
  });

  it("renders the testimonial card without the avatar", () => {
    render(<WithoutAvatar />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
