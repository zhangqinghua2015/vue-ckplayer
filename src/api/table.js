import request from '@/utils/request'

export function getList(params) { return request({ url: '/table/list', method: 'get', params }) }

export function videoList(params) { return request({ url: '/player/video/list', method: 'get', params }) }

