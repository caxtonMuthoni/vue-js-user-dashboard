import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// filter to trancate string

Vue.filter('truncateString', (str, n) => {
  return str && (str.length > n) ? str.substr(0, n) + '...' : str;
})

// Filter to format number

Vue.filter('formatNumber', (number) => {
  let final = '';
  number && number.toString().split('').reverse().forEach(function (num, index) {

    if ((index + 1) % 3 === 0) {
      final = ',' + num + final
    } else {
      final = num + final
    }
  })

  if (final[0] === ',') {
    final = final.substr(1)
  }
  return final;
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
