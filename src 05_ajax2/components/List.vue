<template>
  <div>
    <h2 v-if="firstView">请输入关键字进行搜索！</h2>
    <h2 v-else-if="isLoading">loading...</h2>
    <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
    <div v-else class="row">
      <div class="card" v-for="user in users" :key="user.userName">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.userName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
        firstView: true,
        isLoading: false,
        users: [],
        errorMsg: ''
      }
    },
    mounted () {
      this.$eventBus.$on('search', async (searchName) => {
        const url = `https://api.github.com/search/users?q=${searchName}`

        this.firstView = false
        this.isLoading = true

        try {
          const response = await this.$axios.get(url)
          const users = response.data.items.map(item => ({
            userName: item.login,
            url: item.html_url,
            avatar_url: item.avatar_urlq
          }))
          this.isLoading = false
          this.users = users
        } catch (error) {
          this.isLoading = false
          this.errorMsg = error.message
        }
      })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
