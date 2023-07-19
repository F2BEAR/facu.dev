/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  singleQuote: true,
  trailingComma: "all",
  useTabs: true,
  tabWidth: 2
}

module.exports = config;