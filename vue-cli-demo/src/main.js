// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//全局混入 注册
Vue.mixin({
  data() {
    return {
      msg: 'global registered'
    }
  }
})


//全局自定义指令 注册
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
