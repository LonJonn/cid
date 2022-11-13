/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["tsconfig.json"],
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
  ],
};
