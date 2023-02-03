const path = require('path');

module.exports = {
  extends: [require.resolve('stylelint-config-standard')],
  plugins: [path.resolve(__dirname, '..', '..', 'index.js')],
  rules: {
    '@gcavallari/stylelint-required-prefix': [
      true,
      {
        prefix: 'gc-',
        autofix: false,
        ignore: ['primary', 'secondary'],
      },
    ],
  },
};