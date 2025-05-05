import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Artboard from ".";

describe("Artboard Component", () => {
  describe("when rendering child content", () => {
    it("should render child content inside the artboard", () => {
      render(
        <Artboard>
          <p>Test Child</p>
        </Artboard>,
      );
      expect(screen.getByText("Test Child")).toBeInTheDocument();
    });
  });

  describe("when no children are provided", () => {
    it("should render an empty artboard", () => {
      render(<Artboard />);
      const mainElement = screen.getByRole("main");
      const sectionElement = mainElement.querySelector("section");
      expect(sectionElement).toBeInTheDocument();
      expect(sectionElement).toBeEmptyDOMElement();
    });
  });

  describe("when custom classes are provided", () => {
    it("should apply custom classes to the sectin element", () => {
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
        <Artboard>
          <p>Test Child</p>
        </Artboard>,
      );
      const sectionElement = screen.getByText("Test Child").closest("section");
      expect(sectionElement).not.toHaveClass("custom-class");
    });
  });

  describe("when no customizations are provided", () => {
    it("should render with the default structure and styles", () => {
      render(
        <Artboard>
          <p>Test Child</p>
        </Artboard>,
      );

      const mainElement = screen.getByRole("main");
      expect(mainElement).toBeInTheDocument();

      const sectionElement = screen.getByText("Test Child").closest("section");
      expect(sectionElement).toBeInTheDocument();
      expect(sectionElement).toHaveClass(
        "shadow-sm md:shadow-md lg:shadow-lg rounded-md bg-white min-h-[calc(100vh_-32px)]",
      );
    });
  });

  describe("when screen size changes", () => {
    describe("should apply different styles based on screen size", () => {
      const matchMediaMock = (width: number) => {
        window.matchMedia = jest.fn().mockImplementation((query) => ({
          matches: query.includes(`max-width: ${width}px`),
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
        }));
      };

      it("should render mobile styles on small screens", () => {
        matchMediaMock(375); // Simulate mobile screen size
        render(
          <Artboard>
            <p>Test Child</p>
          </Artboard>,
        );
        const sectionElement = screen
          .getByText("Test Child")
          .closest("section");
        expect(sectionElement).toHaveClass("shadow-sm");
      });

      it("should render tablet styles on medium screens", () => {
        matchMediaMock(768); // Simulate tablet screen size
        render(
          <Artboard>
            <p>Test Child</p>
          </Artboard>,
        );
        const sectionElement = screen
          .getByText("Test Child")
          .closest("section");
        expect(sectionElement).toHaveClass("md:shadow-md");
      });

      it("should render desktop styles on large screens", () => {
        matchMediaMock(1440); // Simulate tablet screen size
        render(
          <Artboard>
            <p>Test Child</p>
          </Artboard>,
        );
        const sectionElement = screen
          .getByText("Test Child")
          .closest("section");
        expect(sectionElement).toHaveClass("lg:shadow-lg");
      });
    });
  });
});
