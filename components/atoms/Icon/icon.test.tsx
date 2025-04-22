import { render } from "@testing-library/react";
import Icon from ".";

describe("Icon Component", () => {
  it("renders the icon with default settings", () => {
    const { container } = render(<Icon icon="shirt" />);
    const icon = container.querySelector("i");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("ri-shirt-line");
    expect(icon).toHaveClass("text-neutral-900");
    expect(icon).toHaveClass("text-base");
  });

  it("renders the icon with custom size and color", () => {
    const { container } = render(
      <Icon icon="shirt" size="large" color="primary" />,
    );
    const icon = container.querySelector("i");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("ri-shirt-line");
    expect(icon).toHaveClass("text-indigo-700");
    expect(icon).toHaveClass("text-lg");
  });

  it("renders the fallback icon when passing an invalid icon", () => {
    const { container } = render(
      <Icon icon="invalid-icon" size="invalid-color" color="invlaid-color" />,
    );
    const icon = container.querySelector("i");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("ri-question-line");
  });
});
