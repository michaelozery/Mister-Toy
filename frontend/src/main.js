import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

// import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// Added by documentation
// Vue.use(Vuetify)
Vue.use(require('vue-moment'));
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
