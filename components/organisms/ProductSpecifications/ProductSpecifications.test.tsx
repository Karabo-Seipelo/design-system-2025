/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProuctSpecifications.stories";

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

const { Default } = composeStories(stories);

describe("ProductSpecifications Component", () => {
  it("renders the product specifications", () => {
    render(<Default />);
    const specifications = screen.getByTestId("title");
    expect(specifications).toBeInTheDocument();
  });
});
