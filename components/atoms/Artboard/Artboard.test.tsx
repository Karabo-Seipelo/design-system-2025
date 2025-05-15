import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Artboard from ".";

describe("Artboard Component", () => {
  describe("when a user provides content", () => {
    it("dsiplay the provided content inside the artboard", () => {
      render(
        <Artboard>
          <p>Test Child</p>
        </Artboard>,
      );
      expect(screen.getByText("Test Child")).toBeInTheDocument();
    });
  });

  describe("when a user does not provide any content", () => {
    it("shows an empty artboard", () => {
      render(<Artboard />);
      const mainElement = screen.getByRole("main");
      const sectionElement = mainElement.querySelector("section");
      expect(sectionElement).toBeInTheDocument();
      expect(sectionElement).toBeEmptyDOMElement();
    });
  });

  describe("when a user adds custom styles", () => {
    it("applies the custom styles to the artboard", () => {
      const customClasses = "custom-class";
      render(
        <Artboard classes={customClasses}>
          <p>Test Child</p>
        </Artboard>,
      );
      const sectionElement = screen.getByText("Test Child").closest("section");
      expect(sectionElement).toHaveClass(customClasses);
    });
  });

  describe("when custom classes are not provided", () => {
    it("should not apply any custom classes to the section element", () => {
      render(
        <Artboard classes="">
          <p>Test Child</p>
        </Artboard>,
      );
      const sectionElement = screen.getByText("Test Child").closest("section");
      expect(sectionElement).not.toHaveClass("custom-class");
      expect(sectionElement).not.toHaveClass("");
    });
  });

  describe("when no customizations are provided", () => {
    it("should render with the default structure and styles", () => {
      render(
        <Artboard classes="shadow-sm md:shadow-md lg:shadow-lg rounded-md bg-white">
          <p>Test Child</p>
        </Artboard>,
      );

      const mainElement = screen.getByRole("main");
      expect(mainElement).toBeInTheDocument();

      const sectionElement = screen.getByText("Test Child").closest("section");
      expect(sectionElement).toBeInTheDocument();
      expect(sectionElement).toHaveClass(
        "shadow-sm md:shadow-md lg:shadow-lg rounded-md bg-white",
      );
    });
  });

  describe("when the user views the artboard on different devices", () => {
    const matchMediaMock = (width: number) => {
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: query.includes(`max-width: ${width}px`),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }));
    };

    it("shows mobile styles on small screens", () => {
      matchMediaMock(375); // Simulate mobile screen size
      render(
        <Artboard classes="shadow-sm">
          <p>Test Child</p>
        </Artboard>,
      );
      const sectionElement = screen.getByText("Test Child").closest("section");
      expect(sectionElement).toHaveClass("shadow-sm");
    });

    it("shows tablet styles on medium screens", () => {
      matchMediaMock(768); // Simulate tablet screen size
      render(
        <Artboard classes="md:shadow-md">
          <p>Test Child</p>
        </Artboard>,
      );
      const sectionElement = screen.getByText("Test Child").closest("section");
      expect(sectionElement).toHaveClass("md:shadow-md");
    });

    it("shows desktop styles on large screens", () => {
      matchMediaMock(1440); // Simulate tablet screen size
      render(
        <Artboard classes="lg:shadow-lg">
          <p>Test Child</p>
        </Artboard>,
      );
      const sectionElement = screen.getByText("Test Child").closest("section");
      expect(sectionElement).toHaveClass("lg:shadow-lg");
    });
  });
});
