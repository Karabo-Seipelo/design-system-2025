import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: "./",
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: ["<rootDir>/components/**/*.{ts,tsx}"],
  coverageReporters: ["text", "lcov", "cobertura"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust according to your paths
    "^components/(.*)$": "<rootDir>/components/$1",
    "^\\$/(.*)$": "<rootDir>/components/$1",
    "^#/(.*)$": "<rootDir>/lib/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["<rootDir>/components/**/*.test.(ts|tsx)"],
};

export default config;
