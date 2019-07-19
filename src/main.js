import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './assets/js/router.js'
//引入MintUI全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
//引入swiper轮播插件
import Swiper from 'swiper';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios;

	import $ from 'jquery'

// 配置每个实例对象可以使用vue
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
