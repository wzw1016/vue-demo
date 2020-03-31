import Vue from 'vue'
import App from './App'
import './base.css'

Vue.prototype.$globalEventBus = new Vue({})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
