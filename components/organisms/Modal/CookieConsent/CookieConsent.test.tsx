import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./CookieConsent.stories";
const { Default } = composeStories(stories);
import CookieConsent from ".";

describe("CookieConsent", () => {
  const mockCookies = [
    { name: "essential", description: "Essential cookies", enabled: true },
    { name: "analytics", description: "Analytics cookies", enabled: false },
    { name: "marketing", description: "Marketing cookies", enabled: false },
  ];

  const mockButtons = [
    { label: "Accept All", type: "accept" as const },
    { label: "Decline All", type: "decline" as const },
    { label: "Manage Preferences", type: "manage" as const },
  ];

  const mockModal = {
    cookies: mockCookies,
    buttons: [
      { label: "Accept All", type: "acceptModal" as const },
      { label: "Save Preferences", type: "saveModal" as const },
      { label: "Decline All", type: "declineModal" as const },
    ],
  };

  const mockProps = {
    title: "Cookie Preferences",
    description: "Manage your cookie preferences.",
    modal: mockModal,
    buttons: mockButtons,
  };

  beforeEach(() => {
    jest.spyOn(Storage.prototype, "setItem");
    jest.spyOn(Storage.prototype, "getItem");
    jest.spyOn(Storage.prototype, "removeItem");
    jest.spyOn(Storage.prototype, "clear");
    localStorage.clear();
  });

  describe("when rendering the CookieConsent component", () => {
    it("displays the title and description", () => {
      render(<CookieConsent {...mockProps} />);
      expect(screen.getByText("Cookie Preferences")).toBeInTheDocument();
      expect(
        screen.getByText("Manage your cookie preferences."),
      ).toBeInTheDocument();
    });
  });

  describe("when rendering the footer buttons", () => {
    it("displays the title and description", () => {
      render(<CookieConsent {...mockProps} />);
      expect(screen.getByText("Accept All")).toBeInTheDocument();
      expect(screen.getByText("Decline All")).toBeInTheDocument();
      expect(screen.getByText("Manage Preferences")).toBeInTheDocument();
    });
  });

  describe("when interacting with the buttons", () => {
    it("calls the appropriate callbacks when 'Accept All' is clicked", async () => {
      render(<CookieConsent {...mockProps} />);
      const acceptAllButton = screen.getByRole("button", {
        name: "Accept All",
      });

      expect(localStorage.getItem).toHaveBeenCalled();
      await userEvents.click(acceptAllButton);

      const modal = screen.getByTestId("modal-consent");
      const save = screen.getByRole("button", { name: "Save Preferences" });

      const essential = screen.getByTestId("cookie-switch-essential");
      const analytics = screen.getByTestId("cookie-switch-analytics");
      const marketing = screen.getByTestId("cookie-switch-marketing");

      expect(modal).toBeInTheDocument();
      expect(save).toBeInTheDocument();
      expect(essential).toBeInTheDocument();
      expect(analytics).toBeInTheDocument();
      expect(marketing).toBeInTheDocument();

      await userEvents.click(save);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "consentCookies",
        '["essential","analytics","marketing"]',
      );
    });

    it("calls the appropriate callbacks when 'Decline All' is clicked", async () => {
      render(<CookieConsent {...mockProps} />);
      const acceptAllButton = screen.getByRole("button", {
        name: "Decline All",
      });
      expect(localStorage.getItem).toHaveBeenCalled();
      await userEvents.click(acceptAllButton);

      const modal = screen.getByTestId("modal-consent");
      const save = screen.getByRole("button", { name: "Save Preferences" });
      const essential = screen.getByTestId("cookie-switch-essential");
      const analytics = screen.getByTestId("cookie-switch-analytics");
      const marketing = screen.getByTestId("cookie-switch-marketing");

      expect(modal).toBeInTheDocument();
      expect(save).toBeInTheDocument();
      expect(essential).toBeInTheDocument();
      expect(analytics).toBeInTheDocument();
      expect(marketing).toBeInTheDocument();

      await userEvents.click(save);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "consentCookies",
        '["essential"]',
      );
    });

    it("calls the appropriate callbacks when 'Manage Preferences' is clicked", async () => {
      render(<CookieConsent {...mockProps} />);
      const acceptAllButton = screen.getByRole("button", {
        name: "Manage Preferences",
      });
      expect(localStorage.getItem).toHaveBeenCalled();
      await userEvents.click(acceptAllButton);

      const modal = screen.getByTestId("modal-consent");
      const save = screen.getByRole("button", { name: "Save Preferences" });
      const essential = screen.getByTestId("cookie-switch-essential");
      const analytics = screen.getByTestId("cookie-switch-analytics");
      const marketing = screen.getByTestId("cookie-switch-marketing");

      expect(modal).toBeInTheDocument();
      expect(save).toBeInTheDocument();
      expect(essential).toBeInTheDocument();
      expect(analytics).toBeInTheDocument();
      expect(marketing).toBeInTheDocument();

      await userEvents.click(essential);
      await userEvents.click(marketing);
      await userEvents.click(save);

      expect(localStorage.setItem).toHaveBeenCalledWith(
        "consentCookies",
        '["essential","marketing"]',
      );
    });
  });

  // describe for Storybook
  describe("when rendering the Storybook", () => {
    it("displays the title and description", () => {
      render(<Default />);
      expect(screen.getByText("We use cookies")).toBeInTheDocument();
    });
  });
});
