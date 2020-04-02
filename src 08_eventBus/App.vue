<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header @addTodo='addTodo' /> -->
      <Header ref="header" />
      <List :todos='todos' />
      <!-- <Footer :todos="todos" :selectAll="selectAll" :deleteSelected="deleteSelected" /> -->
      <Footer>
        <label slot="left">
          <input type="checkbox"  v-model="checkAll" />
        </label>
        <span slot="center">
          <span>已完成{{completedCount}}</span> / 全部{{todos.length}}
        </span>
        <button slot="right" class="btn btn-danger" v-if="completedCount" @click="deleteSelectedItem">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import PubSub from 'pubsub-js'
  import Header from './components/Header'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  import EventBus from './event-bus'
  export default {
    name: 'App',
    data () {
      return {
        todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
      }
    },
    mounted () {
      this.$refs.header.$on('addTodo', this.addTodo)
      EventBus.$on('deleteTodo', this.deleteTodo)
      this.updateTodoToken = PubSub.subscribe('updateTodo', (msg, {todo, completed}) => this.updateTodo(todo, completed))
    },
    beforeDestroy () {
      this.$ref.header.$off('addTodo')
      EventBus.$off('deleteTodo')
      PubSub.unSubscribe(this.updateTodoToken)
    },
    methods: {
      addTodo (todo) {
        this.todos.reverse().push(todo)
        this.todos.reverse()
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      updateTodo (todo, completed) {
        todo.completed = completed
      },
      selectAll (isChecked) {
        this.todos.forEach(todo => { todo.completed = isChecked })
      },
      deleteSelected () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },
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
    },
    watch: {
      todos: {
        deep: true,
        handler: value => localStorage.setItem('todos_key', JSON.stringify(value))
      }
    },
    components: {
      Header,
      List,
      Footer
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 30px auto 0;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
