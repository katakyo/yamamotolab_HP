module.exports = {
  pwa: {
    iconPaths: {
      favicon32: './img/icon/favicon.ico',
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/common/common.scss";'
      }
    }
  }
}