import {
  REQUESTING,
  REQUEST_SUCCESS,
  REQUEST_FAIL
} from './mutation_types'

export default {
  [REQUESTING] (state) {
    state.firstView = false
    state.isLoading = true
  },
  [REQUEST_SUCCESS] (state, users) {
    state.isLoading = false
    state.users = users
  },
  [REQUEST_FAIL] (state, errorMsg) {
    state.isLoading = false
    state.errorMsg = errorMsg
  }
}
