/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["./base"],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ["*.ts?(x)"],
      extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],
      plugins: ["react"],
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ],
};
