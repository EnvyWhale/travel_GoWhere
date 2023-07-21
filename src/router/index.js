/*
 * @Author: yangxiaosen
 * @Date: 2023-04-16 11:12:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-22 15:58:34
 * @FilePath: \travel\src\router\index.js
 */
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/navviews/Home'
import Center from '@/views/navviews/Center'
import Order from '@/views/navviews/Order'
import Customer from '@/views/navviews/Customer'
const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/handpick',
        component: () => import('@/components/Home/Handpick.vue')
      },
      {
        path: '/home/weeklyhappy',
        component: () => import('@/components/Home/Weeklyhappy.vue')
      },
      {
        path: '/home',
        redirect: '/home/handpick'
      }
    ]
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/customer',
    component: Customer
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: () => import('@/components/Detail/index.vue')
  },
  {
    path: '/',
    // 当路径没有路由，重定向到/home
    redirect: '/home',
    component: Home
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),//history模式
  // history: createWebHashHistory(),//hash模式，带#
  routes
})

export default router
