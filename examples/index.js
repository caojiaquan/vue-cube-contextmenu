import Vue from 'vue'
import exam from './exam.vue'
import ContextMenu from '../src/index'
Vue.use(ContextMenu)

new Vue({
  el: '#app',
  render: h => h(exam)
})