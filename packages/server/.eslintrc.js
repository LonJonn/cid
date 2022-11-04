/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  root: true,
  extends: ["@cid/eslint-config/node"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["tsconfig(.*)?.json"],
      },
    },
  ],
};
