import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use(
  (config) => {
    let token = store.getters.isLoggedIn
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

const store = new Vuex.Store({
  state: () => ({
    isLoggedIn: false,
    user: {
      name: '',
      email: '',
      id: ''
    }
  }),
  mutations: {
    SET_USER (state, data) {
      state.pending = true
      state.user.name = data.user
      state.user.email = data.email
      state.user.id = data.id
    },
    LOGIN_SUCCESS (state) {
      state.pending = false
    },
    LOGOUT (state) {
      state.isLoggedIn = false
      state.user.name = ''
      state.user.email = ''
      state.user.id = ''
    },
    SET_TOKEN (state, token) {
      state.isLoggedIn = token
    }
  },
  actions: {
    async login ({ dispatch, commit }, [context, creds]) {
      let res = await axios.post('/login', creds)
      if (res.status === 200) {
        dispatch('setToken', res.data.token)
        dispatch('getUser', res.data)
        context.$router.push('/list')
      } else {
        dispatch('setToken', false)
      }
      return true
    },
    logout ({ state, dispatch, commit }) {
      dispatch('setToken', false)
    },
    setToken ({ state, commit }, token) {
      if (token) {
        localStorage.setItem('id_token', token)
        state.isLoggedIn = token
        commit('SET_TOKEN', token)
      } else {
        commit('LOGOUT')
        localStorage.removeItem('id_token')
      }
      return true
    },
    async userEdit ({getters, dispatch, commit}) {
      let res = await axios.put(`/edit/${getters.getId}`)
      console.log(res)
    },
    async getUser ({state, dispatch, commit}) {
      let res = await axios.get('/user')
      console.log(res)
      if (res.status === 200) {
        commit('SET_USER', res.data)
      } else {
        commit('LOGOUT')
      }
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    },
    getEmail: state => {
      return state.user.email
    },
    getName: state => {
      return state.user.name
    },
    getAva: state => {
      return state.user.ava || 'http://i.pravatar.cc/300'
    },
    getId: state => {
      return state.user.id
    }
  }
})

export default store
