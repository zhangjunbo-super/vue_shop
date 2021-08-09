import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/gobal.css'
import axios from 'axios'
// 设置默认根路径
axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'


Vue.prototype.$http=axios

axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token')
  console.log("config:",config);
  return config;
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
