import Vue from 'vue'
import App from './App.vue'
//import BootstrapVue from 'bootstrap/dist/css/bootstrap.min.css';
import router from './router/route'
//import * as VeeValidate from 'vee-validate';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import responsive from 'vue-responsive';
import VueToast from 'vue-toast-notification';

import Notifications from 'vue-notification'
export const eventBus = new Vue()

Vue.use(Notifications);


Vue.use(VueToast);
Vue.use(responsive)

Vue.config.productionTip = false
//Vue.use(VeeValidate)
//Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')
