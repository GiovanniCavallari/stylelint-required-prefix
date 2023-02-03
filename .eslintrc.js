module.exports = {
  env: {
    jest: true,
    node: true,
    es2021: true,
    browser: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  plugins: ['prettier'],
  rules: {},
};
