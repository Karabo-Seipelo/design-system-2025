import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductCarousel.stories";
const { Default } = composeStories(stories);
import ProductCarousel from ".";

const mockAction = jest.fn();
jest.mock("@storybook/addon-actions", () => ({
  action: () => mockAction,
}));

describe("ProductCarousel", () => {
  const mockImages = [
    { image_url: "image1.jpg", color: "red" },
    { image_url: "image2.jpg", color: "blue" },
    { image_url: "image3.jpg", color: "green" },
  ];

  const mockSelected = jest.fn();

  it("render the storybook default", () => {
    render(<Default />);
    const carousel = screen.getByTestId("product-carousel");
    expect(carousel).toBeDefined();
  });

  it("renders loading state when loading is true", () => {
    render(
      <ProductCarousel
        images={mockImages}
        loading={true}
        color={null}
        selected={mockSelected}
      />,
    );

    expect(screen.getByText("loading")).toBeInTheDocument();
  });

  it("selects the correct image based on the color prop", () => {
    render(
      <ProductCarousel
        images={mockImages}
        loading={false}
        color="blue"
        selected={mockSelected}
      />,
    );

    const selectedTab = screen.getAllByRole("tab")[1];
    expect(selectedTab).toHaveAttribute("data-selected");
  });

  it("defaults to the first image if the color prop does not match", () => {
    render(
      <ProductCarousel
        images={mockImages}
        loading={false}
        color="yellow"
        selected={mockSelected}
      />,
    );

    const selectedTab = screen.getAllByRole("tab")[0];
    expect(selectedTab).toHaveAttribute("data-selected");
  });

  it("calls the selected callback with the correct color when a tab is clicked", async () => {
    render(
      <ProductCarousel
        images={mockImages}
        loading={false}
        color={null}
        selected={mockSelected}
      />,
    );

    const secondTab = screen.getAllByRole("tab")[1];
    await userEvent.click(secondTab);

    expect(mockSelected).toHaveBeenCalledWith({ selectedColor: "blue" });
  });

  it.skip("render the storybook default", async () => {
    render(<Default />);

    const secondTab = screen.getByTestId("tab");
    expect(secondTab).toBeInTheDocument();

    console.log("secondTab", secondTab);
    console.log(secondTab);

    await fireEvent.click(secondTab);

    // expect(mockAction).toHaveBeenCalledTimes(1);
    expect(mockAction).toHaveBeenCalled();
  });
});
