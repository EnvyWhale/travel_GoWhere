<template lang="">
    <div class="content_box">
        <van-nav-bar :title="spot.name" left-text="返回" left-arrow @click-left="goBack" />
  <div class="detail-page">
    <!-- 顶部景点图片 -->
    <van-image
      class="detail-image"
      fit="cover"
      :src="spot.image"
    ></van-image>
    <!-- 景点信息 -->
    <div class="spot-info">
      <h1 class="spot-name">{{ spot.name }}</h1>
      <p class="spot-address">{{ spot.address }}</p>
      <van-tag class="spot-tag" v-for="tag in spot.tags" :key="tag">{{ tag }}</van-tag>
      <van-rate v-model="spot.score" allow-half disabled></van-rate>
    </div>
    <!-- 景点介绍 -->
    <div class="spot-intro">
      <h2 class="intro-title">景点介绍</h2>
      <p class="intro-content">{{ spot.intro }}</p>
    </div>
    <!-- 门票信息 -->
    <div class="ticket-info">
      <h2 class="ticket-title">门票信息</h2>
      <van-collapse v-model="ticketActiveNames">
        <van-collapse-item title="成人票">
          <p class="ticket-price">¥ {{ spot.ticket.adult.price }}</p>
          <p class="ticket-desc">{{ spot.ticket.adult.desc }}</p>
        </van-collapse-item>
        <van-collapse-item title="儿童票">
          <p class="ticket-price">¥ {{ spot.ticket.child.price }}</p>
          <p class="ticket-desc">{{ spot.ticket.child.desc }}</p>
        </van-collapse-item>
      </van-collapse>
    </div>
    <!-- 底部操作栏 -->
        <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" dot />
        <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
        <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
        <van-action-bar-button type="warning" text="加入购物车" />
        <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>
  </div>
        
    </div>
</template>
<script>
import router from '@/router';
//router 用于push调用
// route 用于获取数据
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios';
import { reactive, toRef, ref, onMounted, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { onUnmounted } from 'vue';
export default {
    data() {
        return {
            spot: {
                name: '故宫',
                address: '北京市东城区景山前街4号',
                image: 'https://img1.qunarzz.com/sight/p0/1706/6a/6a8d7a1f4e4c48b5a3.img.jpg_710x360_3c4f4e62.jpg',
                tags: ['历史文化', '博物馆'],
                score: 4.5,
                intro: '故宫博物院，位于北京市中心，是明、清两代的皇宫，旧称紫禁城，占地面积72万平方米，建筑面积约15万平方米，是世界上现存规模最大、保存最为完整的木质结构古建筑之一。',
                ticket: {
                    adult: {
                        price: 60,
                        desc: '成人票'
                    },
                    child: {
                        price: 20,
                        desc: '儿童票（1.2米以下）'
                    }
                }
            },
            ticketActiveNames: ['1']
        }
    },
    setup() {
        const router = useRouter()
        const store = useStore()
        // 挂载之前隐藏底部导航栏
        onBeforeMount(() => {
            store.commit('NavbarHidden')
        })
        const goBack = () => {
            router.go(-1);
        }
        const route = useRoute()
        let AttractionData = ref([])
        console.log(route.params.id);
        axios.get('/home.json').then(res => {
            console.log(res.data.weeklyhappy);
            AttractionData = res.data.weeklyhappy.filter((item) => {
                // console.log(item.id);
                // console.log(route.params.id);
                return item.id == route.params.id
            })[0]
            console.log(AttractionData);
        })
        // 销毁之前显示底部导航栏
        onUnmounted(() => {
            store.commit('NavbarShow')
        })
        return {
            goBack,
            AttractionData
        }
    }

}
</script>
<style lang="scss" scoped>
.content_box {
    width: 100%;
    height: 100vh;
    background-color: white;
}

.detail-page {
    background-color: #f2f3f5;
}

.detail-image {
    width: 100%;
    height: 200px;
}

.spot-info {
    padding: 16px;
    background-color: #fff;
}

.spot-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

.spot-address {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
}

.spot-tag {
    margin-right: 8px;
}

.spot-intro {
    margin-top: 16px;
    padding: 16px;
    background-color: #fff;
}

.intro-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
}

.intro-content {
    font-size: 14px;
    color: #666;
}

.ticket-info {
    margin-top: 16px;
    padding: 16px;
    background-color: #fff;
}

.ticket-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
}

.ticket-price {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
}

.ticket-desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
}

.bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
}
</style>