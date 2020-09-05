import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import store from "store/index"
import toast from 'components/common/toast'

import fastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus =new Vue()

Vue.use(ViewUI)
// 安装toast插件
Vue.use(toast)

fastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require("assets/img/common/placeHolder.jpg")
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

