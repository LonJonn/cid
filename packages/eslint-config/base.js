/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["*.ts", ".tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["../../apps/*/tsconfig.json", "../../packages/*/tsconfig.json"],
      },
      plugins: ["@typescript-eslint", "import"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            project: ["tsconfig.json"],
          },
        },
      },
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
      },
    },
    {
      files: ["*.config.ts", "*.spec.ts", "*.test.ts", "**/mocks/**/*.ts"],
      rules: {
        // These are helpful in playwright tests
        "no-await-in-loop": "off",
        "no-restricted-syntax": "off",

        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
