/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@cid/eslint-config/react",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
  ],
};
