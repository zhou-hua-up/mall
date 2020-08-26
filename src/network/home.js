import {request} from 'network/request'
export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
    // url: '/test/getBanners'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
