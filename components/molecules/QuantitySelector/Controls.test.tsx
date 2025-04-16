import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Controls from "./Controls";

describe("Controls", () => {
  const setup = () => {
    const utils = render(
      <Controls type="add" quantity={1} min={0} max={10} onClick={() => {}} />,
    );
    const incrementButton = screen.getByTestId("add");
    return {
      incrementButton,
      ...utils,
    };
  };

  it("renders the component with default props", () => {
    const { incrementButton } = setup();
    expect(incrementButton).toBeInTheDocument();
  });
});
