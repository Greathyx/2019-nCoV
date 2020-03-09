import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import fusion_charts from './plugins/fusionCharts';
import 'echarts/lib/chart/map'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/title'

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  fusion_charts,
  render: h => h(App)
}).$mount('#app');
