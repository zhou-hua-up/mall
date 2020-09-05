import { ADD_COUNTER,  ADD_GOODS} from './mutations-type'
export default {
  // 只修改state状态
  [ADD_COUNTER](state,payload) {
    payload.count++
  },
  [ADD_GOODS](state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  }
}