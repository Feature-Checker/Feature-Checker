module.exports = {
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
        `
      }
    }
  }
};
