import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'
import BootstrapVue from 'bootstrap-vue'
import router from './router/router.ts'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Entry point is main.js which is a gateway


Vue.use(BootstrapVue)
export const bus = new Vue();

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
//   // template: '<App/>',
//   // components: { App }
// })

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
//   // template: '<App/>',
//   // components: { App }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
