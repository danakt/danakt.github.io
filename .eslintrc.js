module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: ['typescript', 'prettier', 'import', 'ramda', 'react-hooks'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  // If you want to change/disable some rule below, write a detailed explanation of the reason
  rules: {
    // The developers of the project like to use two spaces for indentation :)
    // This is workable variant indentation setting for typescript
    indent: 'off',
    'indent-legacy': ['error', 2, { SwitchCase: 1 }],

    // Default length of code of the project
    'max-len': ['error', 120],

    // Single qoutes
    quotes: ['error', 'single', { avoidEscape: true }],

    // Order of imports
    'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
    // This rule reports any imports that come after non-import statements.
    'import/first': 'error',

    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'warn',

    // No semicolons it's fine. Really!
    // https://blog.izs.me/2010/12/an-open-letter-to-javascript-leaders-regarding
    // http://inimino.org/~inimino/blog/javascript_semicolons
    // https://www.youtube.com/watch?v=gsfbh17Ax9I
    semi: ['error', 'never']
  }
};
