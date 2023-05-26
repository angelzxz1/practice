/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tabWidth: 4,
  useTabs: true,
  trailingComma: "all",
  semi: false,
  singleQuote: true,
  arrowParens: "avoid",
};

module.exports = config;
