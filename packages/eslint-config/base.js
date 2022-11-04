/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["airbnb", "airbnb-typescript", "prettier"],
      rules: {
        "@typescript-eslint/consistent-type-imports": "warn",

        "import/order": [
          "warn",
          {
            "groups": ["type", "builtin", "external", "parent", "sibling", "index"],
            "newlines-between": "always",
            "alphabetize": {
              order: "asc",
            },
          },
        ],

        "no-restricted-exports": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/no-throw-literal": "off", // we want to be able to throw objects
        "@typescript-eslint/no-use-before-define": "off",

        // Dumb rules here
        "@typescript-eslint/naming-convention": "off",
        "no-underscore-dangle": "off",
        "arrow-body-style": "off",
      },
    },
    {
      files: ["*.spec.ts", "*.test.ts", "**/mocks/**/*.ts"],
      rules: {
        // These are helpful in playwright tests
        "no-await-in-loop": "off",
        "no-restricted-syntax": "off",

        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
