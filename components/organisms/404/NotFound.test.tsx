import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./NotFound.stories";
const { Default } = composeStories(stories);
import NotFound from ".";

describe("NotFound", () => {
  const mockOnClick = jest.fn();

  const defaultProps = {
    title: "Page Not Found",
    subTitle: "404 Error",
    description: "The page you are looking for does not exist.",
    button: {
      label: "Go Home",
      primary: true,
      onClick: mockOnClick,
    },
  };

  it("renders the NotFound component with all props", () => {
    render(<Default />);

    expect(screen.getByText("Not found")).toBeInTheDocument();
    expect(screen.getByText("We can’t find the page")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Sorry, the page you are looking for doesn't exist or has been moved."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Learn more" })
    ).toBeInTheDocument();
    expect(screen.getByText("Back to Home")).toBeInTheDocument();
  });

  it("renders the NotFound component without a subtitle", () => {
    const props = { ...defaultProps, subTitle: "" };
    render(<NotFound {...props} />);

    expect(screen.queryByText("404 Error")).not.toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(
      screen.getByText("The page you are looking for does not exist.")
    ).toBeInTheDocument();
  });

  it("renders the NotFound component without a description", () => {
    const props = { ...defaultProps, description: "" };
    render(<NotFound {...props} />);

    expect(screen.getByText("404 Error")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(
      screen.queryByText("The page you are looking for does not exist.")
    ).not.toBeInTheDocument();
  });

  it("calls the button onClick handler when clicked", () => {
    render(<NotFound {...defaultProps} />);

    const button = screen.getByRole("button", { name: "Learn more" });
    button.click();

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders the button with the correct label", () => {
    render(<NotFound {...defaultProps} />);

    expect(screen.getByText("Go Home")).toBeInTheDocument();
  });
});
