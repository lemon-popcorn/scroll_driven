module.exports = {
  env: {
    node: true, // 启用 Node.js 环境
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
