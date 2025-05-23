import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from ".";

describe("Footer", () => {
  const mockLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const mockSocials = [
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  ];

  const mockCopyright = "&copy; 2025 Design System. All rights reserved.";

  it("renders the footer with all links", () => {
    render(
      <Footer
        links={mockLinks}
        socials={mockSocials}
        copyright={mockCopyright}
      />,
    );

    mockLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
      expect(screen.getByText(link.label).closest("a")).toHaveAttribute(
        "href",
        link.href,
      );
    });
  });

  it("renders the footer with all social icons", () => {
    render(
      <Footer
        links={mockLinks}
        socials={mockSocials}
        copyright={mockCopyright}
      />,
    );

    mockSocials.forEach((social) => {
      expect(screen.getByLabelText(`${social.label} profile`)).toHaveAttribute(
        "href",
        social.href,
      );
    });
  });

  it("renders the copyright text correctly", () => {
    render(
      <Footer
        links={mockLinks}
        socials={mockSocials}
        copyright={mockCopyright}
      />,
    );

    expect(
      screen.getByText("© 2025 Design System. All rights reserved."),
    ).toBeInTheDocument();
  });

  it("applies additional classes when provided", () => {
    const customClass = "custom-footer-class";
    render(
      <Footer
        links={mockLinks}
        socials={mockSocials}
        copyright={mockCopyright}
        className={customClass}
      />,
    );

    expect(screen.getByRole("contentinfo")).toHaveClass(customClass);
  });
});
