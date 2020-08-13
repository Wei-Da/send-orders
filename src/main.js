import Vue from 'vue'
import '@/assets/styles/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI)

import ECharts from 'vue-echarts'
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
