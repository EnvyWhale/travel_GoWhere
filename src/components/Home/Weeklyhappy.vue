<!--
 * @Author: yangxiaosen
 * @Date: 2023-04-18 15:13:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-21 17:10:52
 * @FilePath: \travel\src\components\Home\Weeklyhappy.vue
-->
<template lang="">
    <div class="week_box">
        <div v-for="(item, index) in datalist" :key="item.id" class="week_item" @click="jump(item.id)">
            <!-- {{item.imgUrl}} -->
            <div 
            class="img_box" 
            :style="{
            backgroundImage:`url(${item.imgUrl})`
            }"></div>
            <div>{{item.title}}</div>
            <div class="item_message">{{item.message}}</div>
        </div>
        <van-notice-bar left-icon="warning-o" :scrollable="false">
            <van-swipe
                vertical
                class="notice-swipe"
                :autoplay="3000"
                :touchable="false"
                :show-indicators="false"
            >
                <van-swipe-item>票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</van-swipe-item>
                <van-swipe-item>明月直入，无心可猜。</van-swipe-item>
                <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>
            </van-swipe>
        </van-notice-bar>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const datalist = ref([])
        onMounted(() => {
            axios("/home.json").then(res => {
                console.log(res.data.weeklyhappy);
                datalist.value = res.data.weeklyhappy
            })
        })
        const jump = (e) => {
            router.push(`/detail/${e}`)
        }
        return {
            datalist,
            jump
        }
    }

}
</script>
<style lang="scss" scoped>
.week_box {
    width: 100%;
    // height: 300px;
    background-color: white;
    margin-bottom: 50px;

    .img_box {
        width: 100%;
        height: 140px;
        background: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .week_item {
        padding: 10px;
        height: 170px;

        // background-color: brown;  
        .item_message {
            font-size: 14px;
            color: gray;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

        }
    }
}

.notice-swipe {
    height: 40px;
    line-height: 40px;
}
</style>