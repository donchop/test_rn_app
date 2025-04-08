module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    semi: ['error', 'never'],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // import for libs
          ['internal'], //  absolute path
          ['parent', 'sibling', 'index'], // relatove path
        ],
        'newlines-between': 'always', // empty line between groups
      },
    ],
    'padding-line-between-statements': [
      // blanLine before return
      'error',
      {
        blankLine: 'always',
        prev: '',
        next: 'return',
      },
    ],
  },
}
