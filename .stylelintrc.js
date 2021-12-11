module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-rational-order',
  ],
  rules: {
    'string-quotes': 'single',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment', 'stylelint-commands'],
      ignoreComments: [/^TODO/],
    }],
    'comment-whitespace-inside': 'always',
    'declaration-bang-space-before': 'always',
    'declaration-bang-space-after': 'never',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'no-eol-whitespace': [true, {
      ignore: ['empty-lines'],
    }],
    indentation: 2,
    'max-empty-lines': 1,
    'no-empty-first-line': true,
    'no-missing-end-of-source-newline': true,
    'block-closing-brace-empty-line-before': 'never',
    'rule-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],
  },
};
