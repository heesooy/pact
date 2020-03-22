module.exports = {
  root: true,
  parser:  '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'moduleDirectory': ['node_modules', 'app/'],
      }
    }
  },
  'rules': {
    'linebreak-style': 0,
    'prettier/prettier': 0,
    '@typescript-eslint': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'indent': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-var-requires': 0,
  },
};
