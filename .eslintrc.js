module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off"
  }
}