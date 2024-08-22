module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:vitest-globals/recommended'
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",  
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ["react", "react-refresh", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "eqeqeq": "error",
    "no-console": "warn",
    "no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
