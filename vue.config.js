const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/vue-templet",
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
