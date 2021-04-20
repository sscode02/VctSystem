import axios from './vue-axios-api.js'

export const Login = function (e) {   //用户登录
  return axios('POST', '/')
}
export const register = function (e) {   //用户注册
  return axios('post', '/', { qwe: e })
}

export const endlogin = function (e) {  //用户退出

  return axios('post', '/', { qwe: e })
}