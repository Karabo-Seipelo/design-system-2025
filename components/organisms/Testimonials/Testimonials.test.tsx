import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Testimonials from ".";

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

describe("Testimonials", () => {
  const mockTestimonials = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      handle: "@johndoe",
      testimonial: "This is a great product!",
      avatar: {
        imageUrl: "https://example.com/avatar1.jpg",
        alt: "John Doe",
      },
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      handle: "@janesmith",
      testimonial: "I love using this service!",
      avatar: {
        imageUrl: "https://example.com/avatar2.jpg",
        alt: "Jane Smith",
      },
    },
  ];

  it("renders the Testimonials component with all props", () => {
    render(
      <Testimonials
        title="Customer Testimonials"
        subTitle="What our customers say"
        description="Here are some testimonials from our happy customers."
        testimonials={mockTestimonials}
      />,
    );

    expect(screen.getByText("Customer Testimonials")).toBeInTheDocument();
    expect(screen.getByText("What our customers say")).toBeInTheDocument();
    expect(
      screen.getByText("Here are some testimonials from our happy customers."),
    ).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("@johndoe")).toBeInTheDocument();
    expect(screen.getByText("This is a great product!")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("@janesmith")).toBeInTheDocument();
    expect(screen.getByText("I love using this service!")).toBeInTheDocument();
  });

  it("renders the Testimonials component without a subtitle", () => {
    render(
      <Testimonials
        title="Customer Testimonials"
        subTitle=""
        description="Here are some testimonials from our happy customers."
        testimonials={mockTestimonials}
      />,
    );

    expect(screen.getByText("Customer Testimonials")).toBeInTheDocument();
    expect(
      screen.getByText("Here are some testimonials from our happy customers."),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("What our customers say"),
    ).not.toBeInTheDocument();
  });

  it("renders the Testimonials component without a description", () => {
    render(
      <Testimonials
        title="Customer Testimonials"
        subTitle="What our customers say"
        description=""
        testimonials={mockTestimonials}
      />,
    );

    expect(screen.getByText("Customer Testimonials")).toBeInTheDocument();
    expect(screen.getByText("What our customers say")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Here are some testimonials from our happy customers.",
      ),
    ).not.toBeInTheDocument();
  });

  it("renders the Testimonials component with an empty testimonials array", () => {
    render(
      <Testimonials
        title="Customer Testimonials"
        subTitle="What our customers say"
        description="Here are some testimonials from our happy customers."
        testimonials={[]}
      />,
    );

    expect(screen.getByText("Customer Testimonials")).toBeInTheDocument();
    expect(screen.getByText("What our customers say")).toBeInTheDocument();
    expect(
      screen.getByText("Here are some testimonials from our happy customers."),
    ).toBeInTheDocument();
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("@johndoe")).not.toBeInTheDocument();
  });
});
