<template>
    <div class="order">
        <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="goBack" />
        <div class="order-list">
            <van-swipe-cell v-for="(order, index) in orders" :key="index">
                <van-card :title="order.title" :price="order.price" :num="order.num" :thumb="order.thumb" :tag="order.tag"
                    :custom-tag="order.customTag" desc="描述信息" class="goods-card" />
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" @click="deleteOrder(index)" />
                </template>
            </van-swipe-cell>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [
                {
                    id: 1,
                    title: "北京三日游",
                    price: "￥1999",
                    num: "x2",
                    thumb: "/image1.jpg",
                    tag: "待付款",
                    lazyLoad: true,
                    customTag: {
                        text: "立即支付",
                        color: "#1989fa",
                        plain: true,
                    },
                },
                {
                    id: 2,
                    title: "上海自由行",
                    price: "￥2999",
                    num: "x1",
                    thumb: "/image1.jpg",
                    tag: "已完成",
                    lazyLoad: true,
                    customTag: {
                        text: "再次预定",
                        color: "#1989fa",
                        plain: true,
                    },
                },
            ],
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        deleteOrder(index) {
            this.orders.splice(index, 1);
        },
    },
};
</script>

<style lang="scss" scoped>
.goods-card {
    margin: 0;
    background-color: white;
}

.delete-button {
    height: 100%;
}

.order {
    background-color: #f5f5f5;
    height: 100%;
}

.order-list {
    padding: 10px;
}

.delete-btn {
    width: 60px;
    height: 100%;
    background-color: #f44336;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>