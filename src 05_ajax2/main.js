import Vue from 'vue'
import axios from 'axios'
import App from './App'

Vue.prototype.$eventBus = new Vue()
Vue.prototype.$axios = axios

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
