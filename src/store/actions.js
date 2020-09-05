import {
  ADD_COUNTER,
  ADD_GOODS
} from './mutations-type'
export default {
  // 除了异步还可以逻辑问题
  addProduct(context, payload) {
    return new Promise((resolve, reject) => {
      // 1. find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
    // 2. 如果没有符合条件的元素返回 undefined
    // 3. find() 对于空数组，函数是不会执行的。
    // 4. find() 并没有改变数组的原始值。
    // 5. array.find(function(currentValue, index, arr),thisValue)，其中currentValue为当前项，index为当前索引，arr为当前数组
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      context.commit( ADD_COUNTER, oldProduct)
      resolve("商品数量加1")
    } else {
      payload.count = 1
      context.commit(ADD_GOODS, payload)
      resolve("加入新商品")
    }
    })
  }
}
