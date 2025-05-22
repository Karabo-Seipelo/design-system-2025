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
      React.ImgHTMLAttributes<HTMLImageElement>,
  ) => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const { fill, ...rest } = props;
    return <img {...rest} />;
  },
}));

describe("TestimonialCard", () => {
  describe("when all props are provided", () => {
    it("should display the user's name and handle when all props are provided", () => {
      render(<Default />);
      expect(screen.getByText("Sarah Dole")).toBeInTheDocument();
      expect(screen.getByText("@sarahdole")).toBeInTheDocument();
    });
  });

  describe("when the handle is missing", () => {
    it("should display the use's name but not the handle when the handle is missing", () => {
      render(<WithoutHandle />);

      expect(screen.getByText("Sarah Dole")).toBeInTheDocument();
      expect(screen.queryByText("@sarahdole")).not.toBeInTheDocument();
    });
  });

  describe("when the name is not provided", () => {
    it("should display 'unknown user' when the name is not provided", () => {
      render(<WithoutLastname />);

      expect(screen.getByText("unknown user")).toBeInTheDocument();
      expect(screen.getByAltText("unknown user")).toBeInTheDocument();
    });
  });

  describe("when the avatar is not provided", () => {
    it("should not display the avatar when it is not provided", () => {
      render(<WithoutAvatar />);

      expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });
  });
});
