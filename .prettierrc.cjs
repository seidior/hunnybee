/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ],
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  printWidth: 80,
  proseWrap: "always",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false
};
