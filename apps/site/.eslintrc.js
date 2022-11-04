/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  root: true,
  extends: ["@cid/eslint-config/react", "next/core-web-vitals"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["tsconfig(.*)?.json"],
      },
    },
  ],
};
