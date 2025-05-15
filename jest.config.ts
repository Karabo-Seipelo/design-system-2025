import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-fixed-jsdom",
  rootDir: "./",
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "<rootDir>/components/**/*.{ts,tsx}",
    "<rootDir>/hooks/**/*.{ts,tsx}",
    "!<rootDir>/components/**/*.d.ts",
    "!<rootDir>/components/**/types.ts",
    "!<rootDir>/components/**/interfaces.ts",
  ],
  coverageReporters: ["text", "lcov", "cobertura"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust according to your paths
    "^components/(.*)$": "<rootDir>/components/$1",
    "^\\$/(.*)$": "<rootDir>/components/$1",
    "^#/(.*)$": "<rootDir>/lib/$1",
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@utils/(.*)$": "<rootDir>/utils/$1",
    "^@mocks/(.*)$": "<rootDir>/__mocks__/$1",
    "^next/image$": "<rootDir>/__mocks__/next/index.tsx",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: [
    "<rootDir>/components/**/*.test.(ts|tsx)",
    "<rootDir>/hooks/**/*.test.(ts|tsx)",
  ],
};

export default config;
