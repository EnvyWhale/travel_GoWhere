<!--
 * @Author: yangxiaosen
 * @Date: 2023-04-16 11:12:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-21 09:03:52
 * @FilePath: \travel\src\views\navviews\Home.vue
-->
<template lang="">
    <div>
        <top-select></top-select>
        <van-notice-bar
          left-icon="volume-o"
          class="sticky"
          text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。去App探索更多资源!!!"
        />
        <location></location>
        <localhot></localhot>
        <ul class="check_list">
          
            <router-link to="./handpick" active-class="active">
              <li>
              <van-icon name="star-o" to="./handpick" style="color:#F56C6C;font-size:30px;"/>
              <span>精选</span>
              </li>
            </router-link>
          
          
            <router-link to="./weeklyhappy" active-class="active"> 
              <li>
              <van-icon name="good-job-o"  style="color:#F56C6C;font-size:30px;"/>
              <span>周末推荐</span> 
              </li>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script >
import TopSelect from '@/components/Home/TopSelect';
import Location from '@/components/Home/SelectTop.vue';
import Localhot from '@/components/Home/Localhot';
import Handpick from '@/components/Home/Handpick'
export default {
  components: {
    TopSelect,
    Location,
    Localhot,
    Handpick,
  }
}
</script>
<style lang="scss" scoped>
.check_list {
  width: 100%;
  height: 2.25rem;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    display: flex;
    align-items: center;
  }
}

.sticky {
  position: sticky;
  top: 0px;
  background: white;
  z-index: 3;
}

.active {
  color: red;
}
</style>
