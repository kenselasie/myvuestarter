
const webpack = require('webpack');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: isProd ? "/thepath" : "",
   configureWebpack: {
       // Set up all the aliases we use in our app.
       plugins: [
           new webpack.optimize.LimitChunkCountPlugin({
               maxChunks: 6
           })
       ]
   },
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/mystyles/_variables.scss";`
        }
      }
    }
  };