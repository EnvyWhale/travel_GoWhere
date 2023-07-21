<template lang="">
    <div class="location">
        <div class="local_icon">
            <van-icon name="guide-o" />
            {{LocationCity}}
        </div>
        <div class="local_top">
            <van-icon name="chart-trending-o" />
            定位榜单
            <van-icon name="arrow" />
        </div>
    </div>
</template>
<script>
import { onBeforeMount, onMounted, ref } from 'vue';
export default {
    setup() {
        onMounted(() => {
            if (localStorage.getItem("localstr")) {
                // 已经定位过，取localstorage中的定位数据
                console.log(1);
                LocationCity.value = localStorage.getItem("localstr")
                console.log(LocationCity);
                return
            }
            else {
                city(); //触发获取城市的方法
            }
        })
        let LocationCity = ref("正在定位....")//一个初始值''
        const city = () => {
            //定义获取城市方法
            const geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(
                (position) => {
                    // cityname = position.address.city; //获取城市信息
                    // province = position.address.province; //获取省份信息
                    console.log(position);
                    LocationCity.value = position.address.city

                    localStorage.setItem('localstr', LocationCity.value)
                },
                (err) => {
                    console.log("2");
                    LocationCity.value = "定位失败";
                },
                { provider: "baidu" }
            );
        }
        return {
            LocationCity,
            city
        }
    }
};
</script>
<style lang="scss" scoped>
.location {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 10px 0;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .local_icon {
        margin-left: -40px;

        i {
            font-size: 20px;
        }
    }

    .local_top {
        margin-right: -40px;

        i {
            font-size: 20px;
        }
    }
}
</style>