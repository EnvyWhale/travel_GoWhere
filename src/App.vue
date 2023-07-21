<!--
 * @Author: yangxiaosen
 * @Date: 2023-04-17 22:58:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-21 09:02:03
 * @FilePath: \travel\src\App.vue
-->
<template lang="">
    <div>
        <router-view></router-view>
        <Navbar class="navbar" v-show="store.state.isNavbarShow"></Navbar>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar';
import { useStore } from 'vuex';
export default {
    components: {
        Navbar
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    }
}
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;

}
</style>