import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Faq from ".";

describe("Faq Component", () => {
  const mockArticles = [
    { title: "Article 1", description: "Description for article 1" },
    { title: "Article 2", description: "Description for article 2" },
  ];

  const mockContactDetails = {
    title: "Contact Us",
    content: "<p>Contact us for more information</p>",
    button: { label: "Get in Touch" },
  };

  const mockProps = {
    title: "Frequently Asked Questions",
    subTitle: "Find answers to common questions",
    articles: mockArticles,
    contactDetails: mockContactDetails,
  };

  it("renders the FAQ component with title and subtitle", () => {
    render(<Faq {...mockProps} />);

    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
    expect(
      screen.getByText("Find answers to common questions"),
    ).toBeInTheDocument();
  });

  it("renders all articles with titles and descriptions", () => {
    render(<Faq {...mockProps} />);

    mockArticles.forEach(({ title, description }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it("renders the contact details section", () => {
    render(<Faq {...mockProps} />);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(
      screen.getByText("Contact us for more information"),
    ).toBeInTheDocument();
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
  });

  it.skip("renders the disclosure buttons with correct icons", () => {
    render(<Faq {...mockProps} />);

    const disclosureButtons = screen.getAllByRole("button");
    expect(disclosureButtons).toHaveLength(mockArticles.length);

    disclosureButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it.skip("renders a divider between articles except the last one", () => {
    render(<Faq {...mockProps} />);

    const dividers = screen.getAllByRole("separator");
    expect(dividers).toHaveLength(mockArticles.length - 1);
  });

  it("renders the contact button with correct label", () => {
    render(<Faq {...mockProps} />);

    const button = screen.getByText("Get in Touch");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-indigo-700");
  });
});
