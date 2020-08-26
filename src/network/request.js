import Axios from 'axios'

export function request(config) {
  const instance = Axios.create({
    // baseURL: "http://123.207.32.32:8000'",
    // baseURL: 'http://adi-v3.dev',
    // baseURL: "http://123.207.32.32:8000/api/v1",
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 10000
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