module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
        ecmaFeatures: {
            jsx: true,
        },
        babelOptions: {
            presets: ['next/babel'],
        },
    },
    env: {
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@next/next/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'eslint-config-prettier',
    ],
    plugins: ['react-hooks', 'simple-import-sort', 'eslint-plugin-prettier'],
    rules: {
        'arrow-body-style': ['error', 'as-needed'],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
        curly: ['error', 'all'],
        'import/order': 'off',
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        'no-param-reassign': 'error',
        'prefer-template': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
    },
};
