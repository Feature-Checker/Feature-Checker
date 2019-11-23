module.exports = {
  devServer: {
    disableHostCheck: true
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/assets/styles/global/global.scss";
        @import "~vue-multiselect/dist/vue-multiselect.min.css";
        `
      }
    }
  }
};
