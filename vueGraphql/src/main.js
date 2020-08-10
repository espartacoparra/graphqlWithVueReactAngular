import Vue from 'vue'
import App from './App.vue'
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//axios*********************
//bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.min.css'
// import { BootstrapVue } from 'bootstrap-vue'
// // Install BootstrapVue
// Vue.use(BootstrapVue)
//bootstrap*********************
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
