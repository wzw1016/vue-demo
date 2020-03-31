<template>
  <div>
    <mt-button type="primary" style="width: 100%" @click="handle">mt-button</mt-button>
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      popup-transition="popup-fade"
      style="color: #666; font-size: 18px; font-weight: bold; width: 100%; height: 60px; line-height: 60px; text-align: center;"
    >
      update success
    </mt-popup>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'App',
    data () {
      return {
        popupVisible: false
      }
    },
    methods: {
      handle () {
        this.popupVisible = !this.popupVisible
      }
    }
  }
</script>

<style scoped>
</style>
