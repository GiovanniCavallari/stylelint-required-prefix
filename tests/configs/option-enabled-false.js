const path = require('path');

module.exports = {
  extends: [require.resolve('stylelint-config-standard')],
  plugins: [path.resolve(__dirname, '..', '..', 'index.js')],
  rules: {
    'giovannicavallari/stylelint-required-prefix': [
      false,
      {
        prefix: 'gc-',
        ignore: 'primary',
      },
    ],
  },
};
