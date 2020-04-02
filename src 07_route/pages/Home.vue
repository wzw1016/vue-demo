<template>
  <div>
    <h2>Home组件内容</h2>
    <p>{{msg}}</p>
    <input type="text" />
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" to="/home/message">Message</router-link>
        </li>
      </ul>
      <hr />
      <router-view></router-view>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Home',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  .nav-tabs {
    border-bottom: none;
  }
</style>
