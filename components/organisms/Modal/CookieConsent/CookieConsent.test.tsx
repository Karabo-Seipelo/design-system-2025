import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CookieConsent from ".";

describe("CookieConsent", () => {
  const mockCookies = [
    { name: "essential", description: "Essential cookies", enabled: true },
    { name: "analytics", description: "Analytics cookies", enabled: false },
  ];

  const mockButtons = [
    { label: "Accept All", type: "accept" },
    { label: "Decline All", type: "decline" },
    { label: "Manage Preferences", type: "manage" },
  ];

  const mockModal = {
    cookies: mockCookies,
    buttons: [
      { label: "Accept All", type: "acceptModal" },
      { label: "Save Preferences", type: "saveModal" },
      { label: "Decline All", type: "declineModal" },
    ],
  };

  const mockProps = {
    title: "Cookie Preferences",
    description: "Manage your cookie preferences.",
    modal: mockModal,
    buttons: mockButtons,
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the CookieConsent component with title and description", () => {
    render(<CookieConsent {...mockProps} />);
    expect(screen.getByText("Cookie Preferences")).toBeInTheDocument();
    expect(
      screen.getByText("Manage your cookie preferences."),
    ).toBeInTheDocument();
  });

  it("renders the buttons in the footer", () => {
    render(<CookieConsent {...mockProps} />);
    expect(screen.getByText("Accept All")).toBeInTheDocument();
    expect(screen.getByText("Decline All")).toBeInTheDocument();
    expect(screen.getByText("Manage Preferences")).toBeInTheDocument();
  });
});
