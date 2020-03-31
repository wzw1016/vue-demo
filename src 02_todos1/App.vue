<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo='addTodo' />
      <List :todos='todos' :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer :todos="todos" :selectAll="selectAll" :deleteSelected="deleteSelected" />
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Header from './components/Header'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    data () {
      return {
        todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
      }
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
