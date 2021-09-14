module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'vue/no-parsing-error': [2, {
          'x-invalid-end-tag': false
      }],
      'no-undef': 'off',
      'camelcase': 'off',
      'no-console': 'off',
      'no-debugger': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/src/store/**',
      ],
        rules:{
            "no-unused-vars": "off",
        },
      env: {
        jest: true
      }
    }
  ]
};
