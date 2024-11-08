import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import jsonParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      'public/mockServiceWorker.js',
      'eslint.config.js',
      'vite.config.ts',
      'vitest.setup.ts',
      '**/*.d.ts',
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    files: ['*.json'],
    languageOptions: {
      parser: jsonParser,
    },
    rules: {},
  },
  {
    extends: [js.configs.recommended, importPlugin.flatConfigs.recommended],
    files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.mjs'],
    rules: {
      'import/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: true,
        },
      ],
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: '*.{scss,css}',
              patternOptions: {
                matchBase: true,
              },
              group: 'unknown',
              position: 'after',
            },
            {
              pattern: '@/**',
              group: 'external',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/named': 'error',
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    extends: ['plugin:react-hooks/recommended', 'plugin:import/recommended'],
    rules: {
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            '{}': false,
          },
          extendDefaults: true,
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['PascalCase', 'camelCase'],
          filter: {
            regex: 'DOM$',
            match: false,
          },
          leadingUnderscore: 'allow',
        },
        {
          selector: ['variable', 'function'],
          format: ['PascalCase', 'camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['variable'],
          format: ['UPPER_CASE', 'PascalCase', 'camelCase'],
          modifiers: ['const', 'global'],
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'property',
          format: null,
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          modifiers: ['destructured'],
          format: null,
        },
        {
          selector: 'parameter',
          filter: {
            regex: '^UNSAFE_',
            match: true,
          },
          format: null,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'all',
          caughtErrors: 'all',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
        },
      ],
      'arrow-parens': ['error', 'always'],
    },
  },
  {
    files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx', '*.test.ts', '*.test.tsx', '*.test.js', '*.test.jsx'],
    plugins: ['jest'],
    extends: ['plugin:testing-library/react', 'plugin:jest/recommended', 'plugin:jest-dom/recommended'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'testing-library/no-node-access': ['error', { allowContainerFirstChild: true }],
      'jest/consistent-test-it': ['error', { fn: 'it' }],
    },
  },
  {
    files: ['*.jsx', '*.tsx'],
    rules: {
      'import/no-default-export': 'error',
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
          allowExportNames: ['meta', 'links', 'headers', 'loader', 'action'],
        },
      ],
      'react/no-array-index-key': 'error',
    },
  },
  {
    files: ['*.stories.jsx', '*.stories.tsx'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['tsconfig.base.json', '**/tsconfig.json'],
        },
      },
    },
  },
);
