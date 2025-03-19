import type { StorybookConfig } from "@storybook/nextjs";
import { Configuration, RuleSetRule } from "webpack";

const webpackFinal: (config: Configuration) => Promise<Configuration> = async (
  config,
) => {
  const fileLoaderRule = config.module?.rules?.find(
    (rule): rule is RuleSetRule =>
      rule &&
      typeof rule === "object" &&
      rule.test &&
      typeof rule.test === "object" &&
      "toString" in rule.test &&
      rule.test.toString().includes("svg"),
  );

  if (fileLoaderRule) {
    fileLoaderRule.exclude = /\.svg$/;
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};

const config: StorybookConfig = {
  stories: [
    "../app/**/*.mdx",
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
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
