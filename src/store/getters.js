export default {
  subCount(state) {
    let counter = 0
    for (let item of state.cartList) {
      counter += item.count
    }
    return counter
  },
  cartList(state) {
    return state.cartList
  }
}