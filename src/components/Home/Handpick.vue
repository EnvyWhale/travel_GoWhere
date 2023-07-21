<!--
 * @Author: yangxiaosen
 * @Date: 2023-04-17 22:25:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-22 15:24:16
 * @FilePath: \travel\src\components\Home\Handpick.vue
-->
<template lang="">
    <div class="hand_box">
            <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check=false
            >
            <van-cell v-for="item in showlist" :key="item.id" class="van_cellitem" @click="jump(item.id)">
            <div class="item_box">
                <div class="img_box">
                    <img :src="item.imgUrl" alt="图片">
                </div>
                <div class="content">
                    <div class="item_name"><span>{{item.name}}</span></div>
                    <div class="item_pf">
                        <span>评分：<van-rate
                                    v-model="item.pf"
                                    :size="12"
                                    color="#ffd21e"
                                    void-icon="star"
                                    void-color="#eee"
                                    allow-half
                                    readonly
                                    />
                        </span>
                        <span class="plnum">{{item.plnum}}条评论</span>
                    </div>
                    <div class="item_price">
                        <small>￥</small><span>{{item.price}}</span>起
                        <span class="item_source">{{item.source}}</span>
                    </div>
                </div>
            </div>
            </van-cell>
            <van-back-top bottom="10vh"/>
        </van-list>
    </div> 
</template>
<script>
import { onBeforeMount, onMounted, ref } from 'vue';
import axios from 'axios'
import { showLoadingToast, closeToast } from 'vant';
export default {

    setup() {
        const datalist = ref([]);
        const showlist = ref([]);
        const loading = ref(false);
        const finished = ref(false);
        onBeforeMount(() => {
            axios("/home.json?pageNum=1&pageSize=2").then(res => {
                // console.log(res.data.handpick);
                datalist.value = res.data.handpick
                // console.log(datalist.value.slice(showlist.value.length, 7));
                showlist.value = datalist.value.slice(showlist.value.length, 7);
            })
            // Add a request interceptor
            axios.interceptors.request.use(function (config) {
                // 发请求之前显示加载框
                showLoadingToast({
                    message: '加载中...',
                    forbidClick: true,
                });
                return config
            }, function (error) {
                // Do something with request error
                return Promise.reject(error)
            })
            // 在成功之后拦截 -- hideLoading
            // Add a response interceptor
            axios.interceptors.response.use(function (response) {
                closeToast({
                    closeAll: true
                })
                return response
            }, function (error) {
                return Promise.reject(error)
            })
        })
        const onLoad = () => {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            // 加载状态结束
            console.log("到底了");
            setTimeout(() => {
                showlist.value = datalist.value.slice(0, showlist.value.length + 7);
                // console.log("showlist.length",showlist.value.length);

                loading.value = false;

                // 数据全部加载完成
                if (showlist.value.length >= datalist.value.length) {
                    finished.value = true;
                }
            }, 2000)
        };
        const jump = (e) => {
            // router.push('/detail')
            console.log(e);
        }
        return {
            datalist,
            showlist,
            onLoad,
            loading,
            finished,
            jump
        };
    },
};
</script>
<style lang="scss" scoped>
.hand_box {
    margin-bottom: 50px;
}

.van_cellitem {
    padding: 5px 15px;
}

.item_box {
    width: 100%;
    height: 120px;
    // background-color: purple;
    position: relative;

    .img_box {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 10px;
        top: 10px;

        img {
            width: 100px;
            height: 100px;
        }
    }

    .content {
        position: absolute;
        left: 120px;
        top: 10px;
        width: 215px;
        height: 100px;
        text-align: left;

        .item_name {
            font-size: 20px;
            color: black;
        }

        .item_pf {
            margin-top: 10px;
            position: relative;

            .plnum {
                position: absolute;
                right: 0px;
            }
        }

        .item_price {
            margin-top: 15px;
            font-size: 14px;
            position: relative;

            small,
            span {
                color: orange;
            }

            span {
                font-size: 18px;
            }

            .item_source {
                font-size: 14px;
                color: gray;
                position: absolute;
                right: 0px;
            }
        }

    }

}
</style>