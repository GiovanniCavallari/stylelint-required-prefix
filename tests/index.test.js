const path = require('path');
const stylelint = require('stylelint');

function resolveFile(pathname, name) {
  return path.resolve(__dirname, pathname, name);
}

function extractErrorMessage(warnings) {
  return warnings.map(({ text }) => text);
}

describe('Stylelint Required Prefix Plugin Tests', () => {
  it('should pass for valid css file', async () => {
    const { results } = await stylelint.lint({
      files: [resolveFile('fixtures', 'valid.css')],
      configFile: resolveFile('configs', 'default.js'),
    });

    expect(results).toHaveLength(1);
    expect(results[0].warnings).toHaveLength(0);
    expect(extractErrorMessage(results[0].warnings)).toMatchSnapshot();
  });

  it('should throw error for invalid css file', async () => {
    const { results } = await stylelint.lint({
      files: [resolveFile('fixtures', 'invalid.css')],
      configFile: resolveFile('configs', 'default.js'),
    });

    expect(results).toHaveLength(1);
    expect(results[0].warnings).toHaveLength(3);
    expect(extractErrorMessage(results[0].warnings)).toMatchSnapshot();
  });

  it('should return if enabled option is false', async () => {
    const { results } = await stylelint.lint({
      files: [resolveFile('fixtures', 'valid.css')],
      configFile: resolveFile('configs', 'option-enabled-false.js'),
    });

    expect(results).toHaveLength(1);
    expect(results[0].warnings).toHaveLength(0);
    expect(extractErrorMessage(results[0].warnings)).toMatchSnapshot();
  });

  it('should return if prefix option is not a string', async () => {
    const { results } = await stylelint.lint({
      files: [resolveFile('fixtures', 'valid.css')],
      configFile: resolveFile('configs', 'option-prefix-number.js'),
    });

    expect(results).toHaveLength(1);
    expect(results[0].warnings).toHaveLength(0);
    expect(extractErrorMessage(results[0].warnings)).toMatchSnapshot();
  });

  it('should return if ignore option is not a array', async () => {
    const { results } = await stylelint.lint({
      files: [resolveFile('fixtures', 'valid.css')],
      configFile: resolveFile('configs', 'option-ignore-string.js'),
    });

    expect(results).toHaveLength(1);
    expect(results[0].warnings).toHaveLength(0);
    expect(extractErrorMessage(results[0].warnings)).toMatchSnapshot();
  });
});
