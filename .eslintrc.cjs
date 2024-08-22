module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    'plugin:vitest-globals/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",  
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ["react", "react-refresh", "prettier", "tailwindcss"],
  rules: {
    "prettier/prettier": "error",
    "eqeqeq": "error",
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "no-console": "warn",
    "no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
};
