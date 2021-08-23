import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss'
import clickOutside from '@/directives/clickOutside'

Vue.config.productionTip = false

Vue.use(VueMeta, { refreshOnceOnNavigation: true })

Vue.directive('click-outside', clickOutside)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
