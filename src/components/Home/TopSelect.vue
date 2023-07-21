<!--
 * @Author: yangxiaosen
 * @Date: 2023-04-17 12:49:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-22 22:29:01
 * @FilePath: \travel\src\components\Home\Select.vue
-->
<template lang="">
    <div class="citybox">
        <van-icon name="arrow-left"  class="icon_back"/>
        <van-search v-model="search_value" placeholder="请输入搜索关键词" class="search_input"/>
        <span  @click="show_cityselect"  class="local_box">
            <van-icon name="location-o"/>
            <span v-if="cityname">
            {{cityname}}
            </span>
            <span v-if="!cityname">
            地区
            </span>
        </span>
        <van-action-sheet v-model:show="isshow">
            <van-area title="请选择地区" :area-list="arealist" :columns-num="2" @confirm="right_click" @cancel="left_click" />
        </van-action-sheet>
        
    </div>
</template>
<script>
import { ref } from 'vue';
import { areaList } from '@vant/area-data';
export default {
    setup() {
        const search_value = ref()
        const arealist = areaList
        const cityname = ref("")
        const isshow = ref(false)
        const show_cityselect = () => {
            isshow.value = true
            navigator.geolocation.getCurrentPosition(res => {
                console.log(res);
            }, err => {
                console.log(err);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        }
        const right_click = (data) => {
            isshow.value = false
            cityname.value = data.selectedOptions[1].text
            console.log("确认");
        }
        const left_click = () => {
            isshow.value = false
            console.log("取消");
        }
        return {
            search_value,
            arealist,
            cityname,
            isshow,
            show_cityselect,
            left_click,
            right_click
        }
    }
};
</script>
<style lang="scss" scoped>
.citybox {
    width: 100%;
    height: 2.5rem;
    background-color: #79bbff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .icon_back {
        font-size: 20px;
    }

    .search_input {
        width: 70vw;
        padding: 0px;
    }

    span {
        width: 60px;
        font-size: 15px;
        // margin-left: -10px;
    }

    .local_box {
        // background-color: RED;
        width: max-content;
    }
}
</style>