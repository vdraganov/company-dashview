// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        // note you must disable the base rule as it can report incorrect errors
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'array-bracket-spacing': ['error', 'never'],
        'arrow-spacing': 'error',
        'brace-style': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': [
            'error',
            {
                afterColon: true
            }
        ],
        'keyword-spacing': [
            'error',
            {
                before: true
            }
        ],
        'linebreak-style': ['error', 'windows'],
        'max-depth': ['error', 4],
        'max-params': ['error', 6],
        'max-statements-per-line': [
            'error',
            {
                max: 2
            }
        ],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error']
            }
        ],
        'no-const-assign': 'error',
        'no-constant-condition': 'warn',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extra-boolean-cast': 'off',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'warn',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 1,
                maxBOF: 1
            }
        ],
        'no-self-assign': 'error',
        'no-trailing-spaces': 'error',
        'no-unreachable': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'prefer-const': 'error',
        'prettier/prettier': 'warn',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-unary-ops': 'error',
        'switch-colon-spacing': 'error'
    }
};
