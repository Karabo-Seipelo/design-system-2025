import type { StorybookConfig } from "@storybook/nextjs";

const webpackFinal = async (config: any) => {
  const fileLoaderRule = config.module?.rules?.find(
    (rule) =>
      rule && typeof rule !== "string" && rule.test?.toString().includes("svg"),
  );

  if (fileLoaderRule && typeof fileLoaderRule !== "string") {
    fileLoaderRule.exclude = /\.svg$/;
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgo: false,
        },
      },
    ],
  });

  return config;
};

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-jest",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal,
};
export default config;
