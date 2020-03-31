<template>
  <li
    @mouseenter="handelEnter(true)"
    @mouseleave="handelEnter(false)"
    :style='{backgroundColor}'
  >
    <label>
      <input type="checkbox" v-model="isChecked" />
      <span>{{todo.title}}</span>
    </label>
    <button
      class="btn btn-danger"
      style="display: none;"
      v-show="isShow"
      @click='deleteItem'
    >
      删除
    </button>
  </li>
</template>

<script type='text/ecamascript-6'>
  import PubSub from 'pubsub-js'
  export default {
    name: 'Item',
    props: {
      todo: Object,
      index: Number
    },
    data () {
      return {
        backgroundColor: '#fff',
        isShow: false
      }
    },
    methods: {
      handelEnter (isEnter) {
        if (isEnter) {
          this.backgroundColor = '#eee'
          this.isShow = true
        } else {
          this.backgroundColor = '#fff'
          this.isShow = false
        }
      },
      deleteItem () {
        if (confirm('确认删除？')) {
          this.$globalEventBus.$emit('deleteTodo', this.index)
        }
      }
    },
    computed: {
      isChecked: {
        get () {
          return this.todo.completed
        },
        set (value) {
          // this.updateTodo(this.todo, value)
          PubSub.publish('updateTodo', {todo: this.todo, completed: value})
        }
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 1px 6px 1px 0;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    padding-left: 6px;
    cursor: pointer;
  }

  li label input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li::before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
