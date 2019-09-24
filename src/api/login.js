import request from '@/utils/request'

export function login(uname, password) {
  return request({
    url: '/login',
    method: 'post',
    params: {
      uname,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/player/logout',
    method: 'get'
  })
}
