module.exports = {
   root: true,
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
   },

   env: {
      browser: true,
      node: true,
      es6: true,
      'jest/globals': true,
   },

   settings: {
      react: {
         version: 'detect',
      },
      'import/resolver': {
         node: {
            extensions: ['.ts', '.tsx'],
         },
      },
   },

   plugins: ['@typescript-eslint', 'prettier', 'jest'],
   extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'airbnb',
      'prettier',
      'plugin:jest/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier',
      'plugin:sonarjs/recommended',
      'plugin:security/recommended',
      'plugin:react-hooks/recommended',
   ],

   rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
         'warn',
         { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
         'warn',
         {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
         },
      ],
      'global-require': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [
         1,
         {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
         },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'import/extensions': [
         'error',
         'ignorePackages',
         {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
         },
      ],
      'jsx-a11y/anchor-is-valid': [
         'error',
         {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
         },
      ],
      'no-nested-ternary': 'off',
      'import/prefer-default-export': 'off',
   },
};
