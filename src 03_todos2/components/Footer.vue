<template>
  <div class="todo-footer">
    <slot name="left"/>
    <slot name="center"/>
    <slot name="right"/>
  </div>
</template>

<script type='text/ecamascript-6'>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 7px;
    margin-top: 5px;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 2px;
  }
</style>
