<template>
  <ul>
    <li>Id: {{$route.params.id}}</li>
    <li>Title: {{messageDetail.title}}</li>
    <li>Content: {{messageDetail.content}}</li>
  </ul>
</template>

<script type='text/ecmascript-6'>
  const messages = [
    {id: 1, title: 'message001', content: 'message001, content001'},
    {id: 3, title: 'message003', content: 'message003, content003'},
    {id: 5, title: 'message005', content: 'message005, content005'}
  ]
  export default {
    name: 'HomeMessageDetail',
    data () {
      return {
        messageDetail: {}
      }
    },
    mounted () {
      const message = messages.find(message => message.id === this.$route.params.id * 1)
      this.messageDetail = message
    },
    watch: {
      $route (value) {
        const message = messages.find(message => message.id === value.params.id * 1)
        this.messageDetail = message
      }
    }
  }
</script>

<style scoped>
</style>
