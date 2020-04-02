import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const actions = {
  increment (context) {
    context.commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}
const getters = {
  evenOrOdd (state) {
    return Math.abs(state.count % 2) === 1 ? 'odd' : 'even'
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
