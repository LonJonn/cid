/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@cid/eslint-config/react",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["tsconfig(.*)?.json"],
      },
    },
    {
      files: ["app/routes/**/*.ts", "app/routes/**/*.tsx"],
      rules: {
        "import/prefer-default-export": "off",
        "arrow-body-style": "off",
      },
    },
  ],
};
