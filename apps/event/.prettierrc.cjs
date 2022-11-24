const base = require("../../.prettierrc.js");

/** @type{import("prettier").Config} */
module.exports = {
  ...base,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
