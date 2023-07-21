<!--
 * @Author: yangxiaosen
 * @Date: 2023-04-17 21:57:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-21 09:03:16
 * @FilePath: \travel\src\components\Home\Localhot.vue
-->
<template lang="">
    <div class="list_must">
        <div class="title">
            <span><van-icon name="hot-o"  class="icon_hot"/>本周当地热门榜单</span>
            <span style="font-size:15px; color:gray;">全部榜单<van-icon name="arrow" /></span>
        </div>
        <local-swiper></local-swiper>
    </div>
</template>
<script>
import LocalSwiper from './LocalSwiper/LocalSwiper.vue';

export default {
    components: {
    LocalSwiper
}
}
</script>

<style lang="scss" scoped>
    .list_must{
        padding: 10px;
        height: 12rem;
        margin-bottom: 10px;
    background-color: white;  
        .title{
            font-size: 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon_hot{
                font-size: 25px;
                    color: red;
                }
        }
        
    }
     
</style>