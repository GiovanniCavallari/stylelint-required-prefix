const path = require('path');

module.exports = {
  extends: [require.resolve('stylelint-config-standard')],
  plugins: [path.resolve(__dirname, '..', '..', 'index.js')],
  rules: {
    'giovannicavallari/stylelint-required-prefix': [
      true,
      {
        prefix: 123,
        ignore: ['primary', 'secondary'],
      },
    ],
  },
};
