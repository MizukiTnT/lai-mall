import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/type/main',
      'pages/cart/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '来融商城',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: '#ff6700',
      list: [
        {
          pagePath: 'pages/index/main',
          text: '首页',
          iconPath: 'static/icon/home-d.png',
          selectedIconPath: 'static/icon/home.png'
        },
        {
          pagePath: 'pages/type/main',
          text: '分类',
          iconPath: 'static/icon/type-d.png',
          selectedIconPath: 'static/icon/type.png'
        },
        {
          pagePath: 'pages/cart/main',
          text: '购物车',
          iconPath: 'static/icon/cart-d.png',
          selectedIconPath: 'static/icon/cart.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '我的',
          iconPath: 'static/icon/user-d.png',
          selectedIconPath: 'static/icon/user.png'
        }
      ]
    }
  }
}
