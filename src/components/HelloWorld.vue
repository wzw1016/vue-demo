<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        title: 'HelloWorld'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>