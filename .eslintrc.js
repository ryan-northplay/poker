module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'no-debugger':'off',
    'keyword-spacing': ['error'],
    'space-infix-ops': ['error'],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-first-prop-new-line': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'always' }],
    'react/jsx-closing-bracket-location':  ['error', 'tag-aligned'],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-child-element-spacing': ['error'],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
