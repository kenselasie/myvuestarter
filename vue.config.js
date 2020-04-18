module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/mystyles/_variables.scss";`
        }
      }
    }
  };