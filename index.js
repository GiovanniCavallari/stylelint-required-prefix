const stylelint = require('stylelint');

const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = 'woocommerce-mercadopado/required-prefix';
const messages = ruleMessages(ruleName, {
  expected: (prefix, selector) => `Expected prefix "${prefix}" on selector "${selector}"`,
});

const ruleFunction = (primaryOption, secondaryOptionObject) => {
  return function lint(postcssRoot, postcssResult) {
    const validOptions = validateOptions(postcssResult, ruleName, {});

    if (!validOptions) {
      return;
    }

    const prefixOption = secondaryOptionObject?.prefix;
    if (typeof prefixOption !== 'string') {
      return;
    }

    const autofixOption = secondaryOptionObject?.autofix;
    if (typeof autofixOption !== 'boolean') {
      console.log(autofixOption);
      return;
    }

    const ignoreOption = secondaryOptionObject?.ignore;
    if (!Array.isArray(ignoreOption)) {
      return;
    }

    postcssRoot.walkRules((rule) => {
      let error = false;
      let newClassSelectorName = '';

      const classSelector = rule.selector;
      const selectors = classSelector.split('.');
      const isHtmlElement = selectors[0] ? true : false;

      selectors.forEach((selector) => {
        if (selector) {
          if (selector.indexOf(prefixOption) !== 0 && !isHtmlElement && !ignoreOption.includes(selector)) {
            error = true;
            newClassSelectorName += `.${prefixOption}${selector}`;
          } else {
            newClassSelectorName += `.${selector}`;
          }
        }
      });

      if (error) {
        if (autofixOption) {
          rule.selector = newClassSelectorName;
        } else {
          report({
            ruleName,
            node: rule,
            result: postcssResult,
            message: messages.expected(prefixOption, classSelector),
          });
        }
      }
    });
  };
};

module.exports.ruleName = ruleName;
module.exports.messages = messages;

module.exports = stylelint.createPlugin(ruleName, ruleFunction);
