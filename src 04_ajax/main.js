import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueResource)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
