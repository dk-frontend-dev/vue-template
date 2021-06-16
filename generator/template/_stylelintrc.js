module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
  ],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    'color-no-invalid-hex': true,
    'color-hex-length': 'long',
    'selector-max-class': 3,
    'no-descending-specificity': null,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'no-invalid-double-slash-comments': true,
    'no-duplicate-at-import-rules': true,
    'at-rule-no-unknown': false,
    'font-family-name-quotes': [
      'always-where-required',
      {
        severity: 'error',
      },
    ],
    'color-named': [
      'never',
      {
        severity: 'warning',
      },
    ],
    'unit-no-unknown': true,
    'max-nesting-depth': [
      3,
      { ignore: ['blockless-at-rules', 'pseudo-classes'] },
    ],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'declarations',
        {
          "type": 'at-rule',
          "name": 'supports',
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false,
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        'rules',
        'at-rules',
      ],
      { severity: 'warnings' },
    ],
    // 'selector-class-pattern': [
    //   '^([a-z0-9-]+)$',
    //   {
    //     message:
    //       "Class selector must be lowercase and may contain letters, numbers and '-' character.",
    //     severity: 'error',
    //   },
    // ],
    // 'selector-nested-pattern': [
    //   '^(&[-]{2}[a-z0-9-]+|&[_]{2}[a-z0-9-]+|&[:]{1,2}[a-z0-9-()]+|[.]{1}[a-z0-9-]+|[a-z]+)$',
    //   {
    //     message:
    //       "Nested selector must be in one of these formats: '&__element', '&--modifier', '.class', 'tag',
    // '&::pseudo-class-or-selector'.", severity: 'error', }, ],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
  },
};
