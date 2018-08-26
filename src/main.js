/* eslint-disable */
import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'
import http from '@/http'
// import router from '@/router/main'
// import MpvueRouterPatch from 'mpvue-router-patch'
// Vue.use(MpvueRouterPatch)
Vue.prototype.$http = http
Vue.prototype.$store = store
// Vue.prototype.$router = store
import moment from 'moment'
require('moment/locale/zh-cn')

Vue.use(require('vue-moment'), {
  moment
})
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  // router,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#7EB3EC',
      // navigationBarBackgroundColor: '#33B5E5',
      // navigationBarBackgroundColor: '#85B7D8',
      navigationBarTitleText: 'SHUhelper-失物招领',
      navigationBarTextStyle: 'white'
    }
    // tabBar: {
    //   // position: "top",
    //   list: [
    //     {
    //       pagePath: 'pages/index/main',
    //       // iconPath: 'static/calendar-normal.png',
    //       // selectedIconPath: 'static/calendar-selected.png',
    //       text: '首页'
    //     },
    //     {
    //       pagePath: 'pages/lostNFound/main',
    //       // iconPath: 'static/calendar-normal.png',
    //       // selectedIconPath: 'static/calendar-selected.png',
    //       text: '应用'
    //     },
    //     {
    //       pagePath: 'pages/myCourse/main',
    //       // iconPath: 'static/calendar-normal.png',
    //       // selectedIconPath: 'static/calendar-selected.png',
    //       text: '日程'
    //     },
    //     // {
    //     //   pagePath: 'pages/me/main',
    //     //   // iconPath: 'static/home-normal.png',
    //     //   // selectedIconPath: 'static/home-selected.png',
    //     //   text: '我的'
    //     // }
    //   ]
    // }
  }
}
