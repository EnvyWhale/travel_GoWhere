/*
 * @Author: yangxiaosen
 * @Date: 2023-04-16 11:12:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-18 11:45:32
 * @FilePath: \travel\src\store\index.js
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    isNavbarShow: true
  },
  getters: {
  },
  mutations: {
    NavbarShow(state) {
      state.isNavbarShow = true
    },
    NavbarHidden(state) {
      state.isNavbarShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
