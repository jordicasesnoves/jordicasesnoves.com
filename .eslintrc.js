module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    // Prettier plugin and recommended rules
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    // Include .prettierrc.js rules
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto' },
      { usePrettierrc: true }
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/typedef': [
      'error',
      {
        'call-signature': true,
        parameter: true,
        'arrow-parameter': true,
        'variable-declaration-ignore-function': true,
        'property-declaration': true,
        'variable-declaration': true,
        'member-variable-declaration': true
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
