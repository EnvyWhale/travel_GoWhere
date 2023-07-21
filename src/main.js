/*
 * @Author: yangxiaosen
 * @Date: 2023-04-16 11:12:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-18 10:52:49
 * @FilePath: \travel\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css';
createApp(App).use(Vant).use(store).use(router).mount('#app')