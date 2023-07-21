<!--
 * @Author: yangxiaosen
 * @Date: 2023-04-18 11:08:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-18 11:08:31
 * @FilePath: \travel\src\views\navviews\Customer.vue
-->
<template>
    <div class="contact-customer-service">
        <div class="header">
            <van-icon class="back-icon" name="arrow-left" @click="goBack" />
            <span class="title">联系客服</span>
        </div>
        <div class="content">
            <div class="contact-methods">
                <div class="phone-number">
                    <van-icon name="phone-circle-o" class="icon" />
                    <span class="text">客服电话：400-123-4567</span>
                    <van-icon name="phone-o" class="call-icon" @click="callService" />
                </div>
                <div class="online-service">
                    <van-icon name="phone-circle-o" class="icon" />
                    <span class="text">在线客服</span>
                    <van-icon name="coupon-o" class="chat-icon" @click="chatService" />
                </div>
            </div>
            <div class="tips">
                <van-icon name="phone-circle-o" class="icon" />
                <span class="text">温馨提示：非工作时间请使用在线客服</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        callService() {
            window.location.href = 'tel:4001234567';
        },
        chatService() {
            // 跳转到在线客服页面
            this.$router.push('/online-service');
        }
    }
};
</script>

<style lang="scss" scoped>
.contact-customer-service {
    .header {
        height: 44px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .back-icon {
            width: 20px;
            height: 20px;
            background-size: 100% 100%;
            position: absolute;
            left: 15px;
        }

        .title {
            font-size: 18px;
            color: #333;
        }
    }

    .content {
        margin-top: 10px;
        background-color: #fff;

        .contact-methods {
            display: flex;
            flex-direction: column;
            align-items: center;

            .phone-number {
                width: 290px;
                height: 44px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #e5e5e5;

                .icon {
                    width: 20px;
                    height: 20px;
                    background-size: 100% 100%;
                }

                .text {
                    font-size: 14px;
                    color: #333;
                    margin-left: 10px;
                }

                .call-icon {
                    width: 20px;
                    height: 20px;
                    background-size: 100% 100%;
                    margin-left: auto;
                }
            }

            .online-service {
                width: 290px;
                height: 44px;
                display: flex;
                align-items: center;

                .icon {
                    width: 20px;
                    height: 20px;
                    background-size: 100% 100%;
                }

                .text {
                    font-size: 14px;
                    color: #333;
                    margin-left: 10px;
                }

                .chat-icon {
                    width: 20px;
                    height: 20px;
                    background-size: 100% 100%;
                    margin-left: auto;
                }
            }
        }

        .tips {
            display: flex;
            align-items: center;
            margin-top: 10px;

            .icon {
                width: 20px;
                height: 20px;
                background-size: 100% 100%;
                margin-right: 10px;
            }

            .text {
                font-size: 12px;
                color: #999;
            }
        }
    }
}
</style>