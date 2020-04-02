import axios from 'axios'
import {
  REQUESTING,
  REQUEST_SUCCESS,
  REQUEST_FAIL
} from './mutation_types'

export default {
  async search ({commit}, searchName) {
    const url = `https://api.github.com/search/users?q=${searchName}`
    commit(REQUESTING)
    try {
      const response = await axios.get(url)
      const users = response.data.items.map(item => ({
        userName: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url
      }))
      commit(REQUEST_SUCCESS, users)
    } catch (error) {
      commit(REQUEST_FAIL, error.message)
    }
  }
}
