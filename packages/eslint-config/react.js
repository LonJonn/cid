module.exports = {
  extends: ["./base"],
  overrides: [
    {
      files: ["*.tsx"],
      extends: ["plugin:react/jsx-runtime", "airbnb/hooks"],
      rules: {
        "no-nested-ternary": "off", // Necessary for conditional rendering
        "@typescript-eslint/no-use-before-define": "off", // Personal preference

        "react/jsx-props-no-spreading": "off",
        "react/no-unstable-nested-components": "warn",
        "react/function-component-definition": "off",
        "react/jsx-no-bind": "off", // Agressive rule, should optimise when needed

        "react/require-default-props": "off", // We have TS
        "prefer-arrow-callback": "off",
        "react/button-has-type": "off",
        "react/prop-types": "off",

        "jsx-a11y/label-has-associated-control": "off",
      },
    },
    {
      files: ["*.spec.ts", "*.spec.tsx"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
  ],
};
