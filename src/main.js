// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import '@/assets/css/reset.css'
// import '@/assets/css/animate.css'
// import '@/assets/css/icons/icomoon/styles.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
//vue 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element-variables.scss'
import store from './store/index'
import axios from 'axios'
import * as filters from './filters'
import '../static/js/lrz.bundle'
import '../static/js/qrcode'
import App from './App'
// import $ from 'jquery'

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})


import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error:'../static/img/error.jpg',
  loading:'../static/img/loading.gif'
});
Vue.use(ElementUI)
// axios.interceptors.request.use((config) => {
//   config.data = qs.stringify(config.data);
//   return config;
// }, function(error) {
//   return Promise.reject(error);
// });
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

//滑动验证指令
Vue.directive('move', {
  inserted: function (el) {
    el.onmousedown = function(e) {
      var X = e.clientX - el.offsetLeft
      document.onmousemove = function(e) {
        var endx = e.clientX - X;
        el.className = 'move moveBefore';
        el.style.left = endx + 'px';
        // console.log(el.parentNode.children[0])
        var width = $('.movebox').width() - $('.move').width();
        el.parentNode.children[0].style.width = endx + 'px';
        el.parentNode.children[1].innerHTML = '拖动滑块验证';
        //临界值小于
        if (endx <= 0) {
          el.style.left = 0 + 'px';
          el.parentNode.children[0].style.width = 0 + 'px'
          //$('.movego').width(0)
        }
        //临界值大于
        // console.log(el.style.left)
        if (parseInt(el.style.left) >= width) {
          el.style.left = width + 'px'
          el.parentNode.children[0].style.width = width + 'px'
          el.parentNode.children[1].innerHTML = '验证通过'
          el.className = 'move moveSuccess';
          el.onmousedown = null
        }
      }
    }
    document.onmouseup = function() {
      document.onmousemove = null
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  filters,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
