import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./QuantitySelector.stories";
const { Default, OutOfStock, MinimalConfiguration } = composeStories(stories);
import QuantitySelector from ".";

jest.mock("$/atoms/Artboard", () => {
  const MockArtboard = (props: React.PropsWithChildren) => (
    <div data-testid="artboard">{props.children}</div>
  );
  MockArtboard.displayName = "MockArtboard";
  return MockArtboard;
});

describe("QuantitySelector", () => {
  const setup = () => {
    const utils = render(<Default />);
    const incrementButton = screen.getByTestId("add");
    const decrementButton = screen.getByTestId("remove");
    const input = screen.getByTestId("quantity-selector-input");
    return {
      incrementButton,
      decrementButton,
      input,
      ...utils,
    };
  };

  it("renders the component with default props", () => {
    const { input } = setup();
    const inputElement = input as HTMLInputElement;
    expect(input).toHaveValue(Default.args.initialQuantity);
    expect(inputElement.value).toBe("3");
  });

  it("renders the component with minimal configuration", () => {
    render(<MinimalConfiguration />);
    const input = screen.getByTestId("quantity-selector-input");
    const inputElement = input as HTMLInputElement;
    expect(input).toHaveValue(MinimalConfiguration.args.initialQuantity);
    expect(inputElement.value).toBe("1");
  });

  it("decrements the quantity when the remove button is clicked", () => {
    const initialQuantity = Default?.args?.initialQuantity ?? 2;
    const amount = initialQuantity - 1;
    const { decrementButton } = setup();
    fireEvent.click(decrementButton);
    expect(screen.getByDisplayValue(amount)).toBeInTheDocument();
  });

  it("increments the quantity when the remove button is clicked", () => {
    const initialQuantity = Default?.args?.initialQuantity ?? 2;
    const amount = initialQuantity + 1;
    const { incrementButton } = setup();
    fireEvent.click(incrementButton);
    expect(screen.getByDisplayValue(amount)).toBeInTheDocument();
  });

  it("update the quantity when input value is changed", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "5" } });
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });

  it("disables controls when outOfStock is true", () => {
    render(<OutOfStock />);
    const incrementButton = screen.getByTestId("add");
    const decrementButton = screen.getByTestId("remove");
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
  });

  it("prevents quantity from going below min value", () => {
    const defaultProps = {
      name: "test-quantity",
      outOfStock: false,
      initialQuantity: 10,
      min: 1,
      max: 10,
      increment: 1,
      decrement: 1,
    };
    render(<QuantitySelector {...defaultProps} />);
    const addButton = screen.getByTestId("add");
    fireEvent.click(addButton);
    const input = screen.getByTestId("quantity-selector-input");
    expect(input).toHaveValue(defaultProps.max);
  });

  it("prevents quantity from going below min limit", () => {
    const defaultProps = {
      name: "test-quantity",
      outOfStock: false,
      initialQuantity: 1,
      min: 1,
      max: 10,
      increment: 1,
      decrement: 1,
    };
    render(<QuantitySelector {...defaultProps} />);
    const removeButton = screen.getByTestId("remove");
    fireEvent.click(removeButton);
    const input = screen.getByTestId("quantity-selector-input");
    expect(input).toHaveValue(defaultProps.min);
  });
});
