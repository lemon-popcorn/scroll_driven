const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = defineConfig({
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#42b983', // 你可以修改这里的颜色或其他 LESS 变量
          },
          javascriptEnabled: true, // 在 lessOptions 内启用 JavaScript 支持
        },
        // additionalData: `
        //   @import "~@/assets/styles/variables.less"; // 如果你有全局的 LESS 变量文件
        // `,
      },
    },
  },
  chainWebpack(config) {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@views', resolve('src/views'))
  },
  transpileDependencies: true,
})
