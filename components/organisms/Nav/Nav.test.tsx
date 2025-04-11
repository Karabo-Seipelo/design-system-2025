import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from ".";

describe("Nav Component", () => {
  const mockBrand = {
    name: "Test Brand",
    imageUrl: "/logo.png",
    href: "/",
  };

  const mockNavItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      items: [
        { name: "Web Development", href: "/services/web" },
        { name: "Mobile Development", href: "/services/mobile" },
      ],
    },
  ];

  const mockCallToAction = [
    {
      label: "Sign Up",
      href: "/signup",
      name: "Sign Up",
      mobileName: "Sign Up",
      primary: true,
    },
    {
      label: "Login",
      href: "/login",
      name: "Login",
      mobileName: "Login",
      primary: false,
    },
  ];

  beforeAll(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    })) as unknown as jest.Mock;
  });

  afterAll(() => {
    (global.ResizeObserver as jest.Mock).mockClear();
  });

  it("renders the navigation bar with brand and navigation items", () => {
    render(
      <Nav
        navItems={mockNavItems}
        brand={mockBrand}
        callToAction={mockCallToAction}
      />,
    );

    expect(screen.getByText("Test Brand")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

  it("renders the shopping cart icon when cart is enabled", () => {
    render(
      <Nav
        navItems={mockNavItems}
        brand={mockBrand}
        cart={true}
        callToAction={mockCallToAction}
      />,
    );

    expect(screen.getByTestId("shopping-cart-icon")).toHaveClass(
      "ri-shopping-bag-3-line",
    );
  });
});
