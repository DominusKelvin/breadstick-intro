import Vue from 'vue'

import { BreadstickBakery } from 'breadstick'

import App from './App.vue'

import store from './store'

// This exposes `this.$breadstick` in your Vue template.
Vue.use(BreadstickBakery)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
