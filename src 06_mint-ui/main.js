import Vue from 'vue'
import { Button, Popup } from 'mint-ui'
import App from './App'

Vue.component(Button.name, Button)
Vue.component(Popup.name, Popup)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
