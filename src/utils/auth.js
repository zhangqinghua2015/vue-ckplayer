import Cookies from 'js-cookie'

const TokenKey = 'mg_auth'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  console.log(TokenKey, token)
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  console.log('remove', TokenKey)
  return Cookies.remove(TokenKey)
}
