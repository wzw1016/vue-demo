<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"  v-model="checkAll" />
    </label>
    <span>
      <span>已完成{{completedCount}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-if="completedCount" @click="deleteSelectedItem">清除已完成任务</button>
  </div>
</template>

<script type='text/ecamascript-6'>
  export default {
    name: 'Footer',
    props: {
      todos: {
        type: Array,
        required: true
      },
      selectAll: {
        type: Function,
        required: true
      },
      deleteSelected: {
        type: Function,
        required: true
      }
    },
    methods: {
      deleteSelectedItem () {
        if (confirm('确认清除已选任务吗？')) {
          this.deleteSelected()
        }
      }
    },
    computed: {
      completedCount () {
        // return this.todos.reduce((pre, todo) => pre + (todo.completed ? 1 : 0), 0)
        return this.todos.filter(todo => todo.completed).length
      },
      checkAll: {
        get () {
          return this.todos.length === this.completedCount && this.todos.length !== 0
        },
        set (value) {
          this.selectAll(value)
        }
      }
    }
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
