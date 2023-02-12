const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/vue-example",
  outputDir: "./docs",
  transpileDependencies: [
    'vuetify'
  ],
  css : {
      loaderOptions : {
          sass : {
              additionalData: `
                @import "@/assets/scss/variables.scss";
              `
          }
      }
    }

})
