/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["*.ts?(x)", "*.mjs"],
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
        "@typescript-eslint/require-await": "off",

        "import/order": [
          "warn",
          {
            "groups": ["type", "builtin", "external", "parent", "sibling", "index"],
            "pathGroups": [
              {
                pattern: "@cid/**",
                group: "external",
                position: "after",
              },
            ],
            "pathGroupsExcludedImportTypes": [],
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
