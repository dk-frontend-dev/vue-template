module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 12,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/recommended',
        'plugin:prettier/recommended',
        'plugin:prettier-vue/recommended',
        'prettier',
    ],
    // required to lint *.vue files
    plugins: ['vue', 'prettier'],
    // add your custom rules here
    rules: {
        semi: [2, 'always'],
        'no-console': 'off',
        'no-debugger': 'off',
        'prettier/prettier':
          process.env.NODE_ENV !== 'production' ? [
              'error',
              {
                  endOfLine: 'auto',
              },
          ] : 'off',
    },
    settings: {
        'import/core-modules': ['vue', 'vuex'],
    },
};
