<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->
          <router-link class="list-group-item" to="/home">Home</router-link>
          <router-link class="list-group-item" to="/about">About</router-link>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <keep-alive>
              <router-view msg='test: labelRouteAttributeText'></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'App'
  }

</script>

<style>
  .router-link-active {
    color: orange !important;
    background-color: gray !important;
  }
</style>
