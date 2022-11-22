/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  root: true,
  extends: ["@cid/eslint-config/node"],
  env: {
    browser: true,
  },
  rules: {
    "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
    "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
  },
};
