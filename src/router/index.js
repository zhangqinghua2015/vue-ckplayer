import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'


/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  /*{ path: '/login', component: () => import('@/views/login/index'), hidden: true },*/
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/videos/list',
    /*redirect: '/dashboard',
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'example' }
    }]*/
  },
  {
    path: '/videos',
    component: Layout,
    redirect: '/videos/list',
    name: 'videos',
    meta: { title: '视频管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/videos/videos'),
        meta: { title: '视频列表', icon: 'table' }
      },{
        path: 'player',
        name: 'player',
        component: () => import('@/views/videos/player'),
        meta: { title: '视频播放', icon: 'table' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode:'history',
  linkActiveClass:'router-link-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
  /*routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]*/
})
