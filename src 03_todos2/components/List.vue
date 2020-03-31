<template>
  <ul class='todo-main'>
    <Item
      v-for="(todo, index) in todos"
      :key='todo.id'
      :todo='todo'
      :index='index'
    />
  </ul>
</template>

<script type='text/ecamascript-6'>
import Item from './Item.vue'
  export default {
    name: 'List',
    props: ['todos'],
    components: {
      Item
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
