import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import '@/assets/scss/_index.scss'; // _index.scss를 한번만 불러오면 자동으로 css로 컴파일 해줌

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'// optional style for arrows & dots

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  // router,
  render: h => h(App)
}).$mount('#app')
