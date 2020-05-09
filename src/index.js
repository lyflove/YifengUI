import Vue from 'vue'
import App from './index.vue'

import yifengui from 'yifengui'

// import './index.styl'
Vue.use(yifengui)

new Vue({
  render: h => h(App)
}).$mount('#app')