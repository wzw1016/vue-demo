<template>
  <div>
    <p v-if="!repositoryName">isLoading</p>
    <p v-else>
      most star repository is
      <a :href="repositoryUrl">{{repositoryName}}</a>
    </p>
  </div>
</template>

<script type='text/ecmascript-6'>
import axios from 'axios'
  export default {
    name: 'App',
    data () {
      return {
        repositoryName: '',
        repositoryUrl: ''
      }
    },
    mounted () {
      const URL = 'https://api.github.com/search/repositories?q=r&sort=starts'
      /* this.$http.get(URL).then(response => {
        const result = response.data
        const {name, html_url} = result.items[0]
        this.repositoryName = name
        this.repositoryUrl = html_url
      }, error => {
        alert(error.statusText)
      }) */
      axios.get(URL).then(response => {
        const result = response.data
        // eslint-disable-next-line camelcase
        const {name, html_url} = result.items[0]
        this.repositoryName = name
        // eslint-disable-next-line camelcase
        this.repositoryUrl = html_url
      }, error => {
        alert(error.message)
      })
    }
  }
</script>

<style scoped>
</style>
