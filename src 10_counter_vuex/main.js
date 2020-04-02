import Vue from 'vue'
import App from './App'

import store from './vuex/store'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  store
})
