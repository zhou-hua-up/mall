import {request} from 'network/request'

export function getDetails(iid) {
  return request({
    url: '/detail',
    params: {
      // 注意这里传入的参数名要跟接口里的数据名保持一致
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice =itemInfo.lowNowPrice
  }
}