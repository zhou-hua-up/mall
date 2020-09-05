import Axios from 'axios'

export function request(config) {
  const instance = Axios.create({
    baseURL: "xxxxx",
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    // 这里做一些相应的操作

    return config
  }, error => {
    console.log(error);

  })

  instance.interceptors.response.use(res => {
    
    return res.data
  }, error => {
    console.log(error);
  })

  return instance(config)
}