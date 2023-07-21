<!--
 * @Author: yangxiaosen
 * @Date: 2023-04-18 17:05:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-21 14:17:54
 * @FilePath: \travel\src\components\Home\LocalSwiper\LocalSwiper.vue
-->
<template lang="">
    <div class="swiper_box">
        <swiper
            :slides-per-view="3"
            :modules="modules"
            :scrollbar="{ draggable:true,hide:true}"
        >
            <swiper-slide v-for="(item, index) in 10" :key="index" >
                <div class="item_box">
                    <img src="http://img1.qunarzz.com/wugc/p224/201207/13/f40f8a9e4327658c93835fbb.jpg_200x200_484bc04f.jpg" alt="" style="width:100px ;height:100px;">
                    <div class="item_name">成都大熊猫繁育基地</div>
                    <div class=item_price><span>￥34元</span>起</div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
        
</template>
<script>
 // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
export default {
    components: {
    Swiper,
    SwiperSlide,
    },
    setup() {
        return {
            modules:[Scrollbar]
        }
    }
};
</script>
<style lang="scss" scoped>
.swiper_box{
    width: 100%;
    height:160px
}
   .swiper{
        width: 95vw;
        margin: 10px auto;
        height:100%;
        overflow: hidden;
        position: relative;
        .swiper-scroll{
            bottom: 0px;
        }
        .swiper-slide{ 
            width: 100px;
            // background-color: blueviolet;
            text-align: center;
            .item_box{
                width: 100px;
                margin: 0;     
                .item_name{
                    width: 100%;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .item_price{
                    width: 100%;
                    font-size: 16px;
                    span{
                    color: orange;
                    }
                }
            }
            
        }
    }
</style>