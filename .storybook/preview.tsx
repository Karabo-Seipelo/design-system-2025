import React from "react";
import { Noto_Sans } from "next/font/google";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import "../src/styles/globals.css";

const DS_VIEWPORTS = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
};

const notoSans = Noto_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

initialize();

const preview: Preview = {
  decorators: [
    (Story) => (
      <main className={notoSans.className}>
        <Story />
      </main>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      element: "#storybook-root",
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: "autocomplete-valid",
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: "image-alt",
            enabled: false,
          },
        ],
      },
      options: {},
      // Optional flag to prevent the automatic check
      manual: true,
    },
    viewport: {
      //👇 Set available viewports for every story in the file
      viewports: DS_VIEWPORTS,
    },
    nextjs: {
      appDirectory: true,
    },
  },
  loaders: [mswLoader],
};

export default preview;
