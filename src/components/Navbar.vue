
<template v-if="store.state.isNavbarShow">
  <footer>
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/order" icon="cart-o">订单</van-tabbar-item>
      <van-tabbar-item to="/customer" icon="service-o">客服</van-tabbar-item>
      <van-tabbar-item to="/center" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>

  </footer>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore()
    const active = ref('home');
    return { active };

  },
};
</script>
<style lang="scss" scoped>
// 设置active-class，会覆盖官方默认的router-link-active(当前选中标签的class样式)
</style>
