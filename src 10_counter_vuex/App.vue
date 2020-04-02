<template>
  <div>
    <h2>click {{count}} times, count is {{evenOrOdd}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations, mapGetters } from "vuex"
  export default {
    name: 'App',
    /* methods: {
      increment () {
        this.$store.commit('INCREMENT')
      },
      decrement () {
        this.$store.commit('DECREMENT')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      }
    }, */
    methods: {
      ...mapMutations({
        increment: 'INCREMENT',
        decrement: 'DECREMENT'
      }),
      ...mapActions(['incrementIfOdd', 'incrementAsync'])
    },
    /* computed: {
      count () {
        return this.$store.state.count
      },
      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    } */
    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    }
  }
</script>

<style scoped>

</style>
