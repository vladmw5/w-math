/**
 * Shared Prettier configuration for the monorepo.
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  trailingComma: "all",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
};

export default config;
