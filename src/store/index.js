import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  actions,
  mutations,
})
// 3.挂载

export default store
