<template>
    <div class="my-page">
        <div class="header">
            <div class="avatar">
                <img src="/image1.jpg" alt="avatar">
            </div>
            <div class="info">
                <div class="name">用户名</div>
                <div class="level">普通会员</div>
            </div>
        </div>
        <div class="menu">
            <div class="item" @click="handleClick('myOrder')">
                <div class="icon">
                    <i class="iconfont icon-dingdan"></i>
                </div>
                <div class="text">我的订单</div>
            </div>
            <div class="item" @click="handleClick('myCoupon')">
                <div class="icon">
                    <i class="iconfont icon-youhuiquan"></i>
                </div>
                <div class="text">我的优惠券</div>
            </div>
            <div class="item" @click="handleClick('myCollect')">
                <div class="icon">
                    <i class="iconfont icon-shoucang"></i>
                </div>
                <div class="text">我的收藏</div>
            </div>
            <div class="item" @click="handleClick('myInfo')">
                <div class="icon">
                    <i class="iconfont icon-gerenziliao"></i>
                </div>
                <div class="text">个人资料</div>
            </div>
        </div>
        <div class="footer">
            <div class="item" @click="handleClick('contactUs')">
                <div class="icon">
                    <i class="iconfont icon-kefu"></i>
                </div>
                <div class="text">联系客服</div>
            </div>
            <div class="item" @click="handleClick('logout')">
                <div class="icon">
                    <i class="iconfont icon-tuichu"></i>
                </div>
                <div class="text">退出登录</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyPage',
    methods: {
        handleClick(type) {
            // 处理点击事件
            console.log('点击了', type)
        }
    }
}
</script>

<style scoped>
.my-page {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #f2f2f2;
}

.header {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.avatar {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 50%;
    overflow: hidden;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info .name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.info .level {
    font-size: 14px;
    color: #999;
}

.menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: #fff;
}

.menu .item {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #f2f2f2;
}

.menu .item:last-child {
    border-bottom: none;
}

.menu .item .icon {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #1890ff;
    color: #fff;
}

.menu .item .text {
    font-size: 16px;
}

.footer {
    display: flex;
    flex-direction: column;
    background-color: #fff;
}

.footer .item {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #f2f2f2;
}

.footer .item:last-child {
    border-bottom: none;
}

.footer .item .icon {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #1890ff;
    color: #fff;
}

.footer .item .text {
    font-size: 16px;
}
</style>
