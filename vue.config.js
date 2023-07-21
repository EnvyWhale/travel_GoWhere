const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      'BMap': 'BMap' //百度地图配置
    }

  }
});
