module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'airbnb-base',
    'plugin:react/recommended',
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
  },
};
