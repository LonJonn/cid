export default {
  "*.{ts,tsx}": [() => "tsc -p tsconfig.json --noEmit"],
  "*.{js,jsx,ts,tsx}": ["eslint --fix --cache", "prettier --write"],
  "*.{css,json,md,mdx}": ["prettier --write"],
};
