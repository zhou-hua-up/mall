import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.prototype.$bus =new Vue()

Vue.use(ViewUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

