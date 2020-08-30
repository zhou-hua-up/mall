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