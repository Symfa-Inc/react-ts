module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
    },
  },
  plugins: ['import', 'prettier'],
  rules: {
      'lines-between-class-members': 0,
      'react/jsx-props-no-spreading': 0,
      '@typescript-eslint/consistent-type-assertions': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      'no-underscore-dangle': 0,
      'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_|^req|^next' }],
      '@typescript-eslint/no-empty-function': 1,
      'react/prop-types': 0,
      'import/prefer-default-export': 0,
      'import/extensions': [
          'error',
          'ignorePackages',
          {
              'js': 'never',
              'jsx': 'never',
              'ts': 'never',
              'tsx': 'never'
          }
      ],
      'explicit-module-boundary-types': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      'import/no-unresolved': 0
  },
  settings: {
      react: {
          version: 'detect',
      },
      'import/resolver': {
          alias: [['@', __dirname + '/src']],
      },
  },
};
