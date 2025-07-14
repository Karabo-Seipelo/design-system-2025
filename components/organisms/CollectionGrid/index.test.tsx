import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CollectionGrid from ".";
import { Collection } from "$/molecules/card/product/interfaces";

// Mock the useCollection hook
jest.mock("./useCollection", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock the ProductCard component
jest.mock("$/molecules/card/product", () => ({
  __esModule: true,
  default: jest.fn(({ name, description, layout, className }) => (
    <div data-testid={`product-card-${layout}`} className={className}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )),
}));

// Mock fetchCollectionAPI
jest.mock("./fetchCollectionAPI", () => ({
  __esModule: true,
  default: jest.fn(),
}));

import useCollection from "./useCollection";

const mockUseCollection = useCollection as jest.MockedFunction<
  typeof useCollection
>;

describe("CollectionGrid Component", () => {
  const mockCollection: Collection[] = [
    {
      collectionId: "1",
      image_url: "/image1.jpg",
      name: "Primary Collection",
      description: "This is the primary collection item",
    },
    {
      collectionId: "2",
      image_url: "/image2.jpg",
      name: "Secondary Collection 1",
      description: "This is the first secondary collection item",
    },
    {
      collectionId: "3",
      image_url: "/image3.jpg",
      name: "Secondary Collection 2",
      description: "This is the second secondary collection item",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with header", () => {
    mockUseCollection.mockReturnValue({ collection: mockCollection });

    render(<CollectionGrid />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Our Collections")).toBeInTheDocument();
  });

  it("renders primary collection card when collection exists", () => {
    mockUseCollection.mockReturnValue({ collection: mockCollection });

    render(<CollectionGrid />);

    expect(screen.getByTestId("product-card-primary")).toBeInTheDocument();
    expect(screen.getByText("Primary Collection")).toBeInTheDocument();
    expect(
      screen.getByText("This is the primary collection item")
    ).toBeInTheDocument();
  });

  it("renders secondary collection cards when collection has multiple items", () => {
    mockUseCollection.mockReturnValue({ collection: mockCollection });

    render(<CollectionGrid />);

    const secondaryCards = screen.getAllByTestId("product-card-secondary");
    expect(secondaryCards).toHaveLength(2);

    expect(screen.getByText("Secondary Collection 1")).toBeInTheDocument();
    expect(screen.getByText("Secondary Collection 2")).toBeInTheDocument();
  });

  it("renders only primary card when collection has one item", () => {
    const singleItemCollection = [mockCollection[0]];
    mockUseCollection.mockReturnValue({ collection: singleItemCollection });

    render(<CollectionGrid />);

    expect(screen.getByTestId("product-card-primary")).toBeInTheDocument();
    expect(
      screen.queryByTestId("product-card-secondary")
    ).not.toBeInTheDocument();
  });

  it("renders correctly when collection is empty", () => {
    mockUseCollection.mockReturnValue({ collection: [] });

    render(<CollectionGrid />);

    expect(screen.getByText("Our Collections")).toBeInTheDocument();
    expect(
      screen.queryByTestId("product-card-primary")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("product-card-secondary")
    ).not.toBeInTheDocument();
  });

  it("renders correctly when collection is null", () => {
    mockUseCollection.mockReturnValue({ collection: null });

    render(<CollectionGrid />);

    expect(screen.getByText("Our Collections")).toBeInTheDocument();
    expect(
      screen.queryByTestId("product-card-primary")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("product-card-secondary")
    ).not.toBeInTheDocument();
  });

  it("applies correct CSS classes to main container", () => {
    mockUseCollection.mockReturnValue({ collection: mockCollection });

    const { container } = render(<CollectionGrid />);
    const mainDiv = container.firstChild as HTMLElement;

    expect(mainDiv).toHaveClass(
      "px-4",
      "py-12",
      "md:py-[172px]",
      "lg:px-24",
      "lg:py-[104px]",
      "flex",
      "flex-col",
      "gap-8"
    );
  });

  it("applies correct CSS classes to header", () => {
    mockUseCollection.mockReturnValue({ collection: mockCollection });

    render(<CollectionGrid />);
    const header = screen.getByText("Our Collections");

    expect(header).toHaveClass("font-semibold", "text-3xl", "text-neutral-900");
  });

  it("applies correct CSS classes to collection container", () => {
    mockUseCollection.mockReturnValue({ collection: mockCollection });

    const { container } = render(<CollectionGrid />);
    const collectionDiv = container.querySelector(
      ".flex.flex-col.gap-7.md\\:flex-row"
    );

    expect(collectionDiv).toHaveClass(
      "flex",
      "flex-col",
      "gap-7",
      "md:flex-row"
    );
  });

  it("renders unique keys for each product card", () => {
    mockUseCollection.mockReturnValue({ collection: mockCollection });

    const { container } = render(<CollectionGrid />);
    const cards = container.querySelectorAll('[data-testid^="product-card-"]');

    expect(cards).toHaveLength(3);

    // Check that all cards are rendered (primary + secondary)
    expect(screen.getByTestId("product-card-primary")).toBeInTheDocument();
    expect(screen.getAllByTestId("product-card-secondary")).toHaveLength(2);
  });

  it("handles collection with only primary item gracefully", () => {
    const primaryOnlyCollection = [mockCollection[0]];
    mockUseCollection.mockReturnValue({ collection: primaryOnlyCollection });

    render(<CollectionGrid />);

    expect(screen.getByTestId("product-card-primary")).toBeInTheDocument();
    expect(
      screen.queryByTestId("product-card-secondary")
    ).not.toBeInTheDocument();

    // Should still render the secondary container div but without content
    const { container } = render(<CollectionGrid />);
    const secondaryContainer = container.querySelector(
      ".flex-1.flex.flex-col.gap-7"
    );
    expect(secondaryContainer).toBeInTheDocument();
  });
});
