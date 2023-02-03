const path = require('path');
const stylelint = require('stylelint');

function resolveFile(pathname, name) {
  return path.resolve(__dirname, pathname, name);
}

function extractErrorMessage(warnings) {
  return warnings.map(({ text }) => text);
}

describe('stylelint required prefix plugin', () => {
  it('should pass for valid css file', () => {
    return stylelint
      .lint({
        files: [resolveFile('fixtures', 'valid.css')],
        configFile: resolveFile('configs', 'stylelint.js'),
      })
      .then(({ results }) => {
        expect(results).toHaveLength(1);
        expect(results[0].warnings).toHaveLength(0);
        expect(extractErrorMessage(results[0].warnings)).toMatchSnapshot();
      });
  });

  it('should throw error for invalid css file', () => {
    return stylelint
      .lint({
        files: [resolveFile('fixtures', 'invalid.css')],
        configFile: resolveFile('configs', 'stylelint.js'),
      })
      .then(({ results }) => {
        expect(results).toHaveLength(1);
        expect(results[0].warnings).toHaveLength(3);
        expect(extractErrorMessage(results[0].warnings)).toMatchSnapshot();
      });
  });
});
