module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['json-format'],
  root: true,
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0,
  },
}
