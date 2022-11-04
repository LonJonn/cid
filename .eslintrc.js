module.exports = {
  root: true,
  extends: ["@cid/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
