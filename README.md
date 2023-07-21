#  ”去哪儿“VUE项目（参考去哪网移动端）



## 前言

> 学校vue框架学习阶段项目
>
> 新手上路，如有错误，请多多指教。



## 项目目录

![](C:\Users\Xiao\AppData\Roaming\Typora\typora-user-images\1689945634405.png)



## 说明

> 1.本项目为仿照去哪移动端项目，没有用到接口，数据来源于项目文件中的json文件
>
> 2.如果觉得这个项目还不错，您可以点右上角 `Star`支持一下， 谢谢！ ^_^

## 项目简介

- 包含了5个页面：首页、订单、客服、我的、商品详情页

## 技术栈

- **前端：**`Vue`+`Vue-router`+`Vuex`+`Vant`+`Axios`
- **数据来源：**`文件json`

## 功能模块

### 首页

模块：顶部导航栏(包含地区选择)，本周当地热门榜单轮播，精选`and`周末推荐

功能介绍：通过axios获取问文件中json数据，对首页进行渲染，用到vant组件中的Toast加载模块，实现到底懒加载功能，定位部分用到百度API，首页中周末推荐部分可以点击跳转到详情页面，在跳转时传参数

### 订单

页面同样使用了Vant，只做简单展示

### 客服

页面同样使用了Vant，只做简单展示

### 我的

页面同样使用了Vant，只做简单展示,相关详情板块可以自行开发



## 运行项目

**注意：**

- vue-cli 支持高版本node，所以有报错的小伙伴们检查node版本
- 运行后需要刷新页面,避免页面排版错乱

```node
1. Clone project

git clone https://github.com/EnvyWhale/travel_GoWhere.git

2. Project setup

cd vue-store
npm install

3. Compiles and hot-reloads for development

npm run serve

4. Compiles and minifies for production

npm run build
```

## 页面截图

#### 引入百度API

在public文件夹中的index.html引入百度API

![1689944000901](C:\Users\Xiao\AppData\Roaming\Typora\typora-user-images\1689944000901.png)



**首页**

![1689943170592](C:\Users\Xiao\AppData\Roaming\Typora\typora-user-images\1689943170592.png)

**订单页**



**客服页**

![1689943277672](C:\Users\Xiao\AppData\Roaming\Typora\typora-user-images\1689943277672.png)

**我的**

![1689943297818](C:\Users\Xiao\AppData\Roaming\Typora\typora-user-images\1689943297818.png)

**详情页**

![1689943323328](C:\Users\Xiao\AppData\Roaming\Typora\typora-user-images\1689943323328.png)



**作者** [EnvyWhale](https://github.com/EnvyWhale)

2023年7月21日