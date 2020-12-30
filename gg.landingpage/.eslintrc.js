module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/display-name': 'off',
    'max-len': ['error', {code: 120}],
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'require-jsdoc': 'off',
  },
};
