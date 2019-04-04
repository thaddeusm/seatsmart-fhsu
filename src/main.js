import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueDragDrop from 'vue-drag-drop'
Vue.use(VueDragDrop)

import Trend from 'vuetrend'
Vue.use(Trend)

import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance)

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

window.EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
