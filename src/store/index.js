import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios');

export default new Vuex.Store({
  state: {
    allPosts: null,
    allUsers: null
  },
  
  mutations: {
    statePosts(state, posts) {
      state.allPosts = posts
    },
    stateUsers(state, users) {
      state.allUsers = users
    },
    stateAddAuthorNamePosts(state) {
      if (state.allPosts != null && state.allUsers != null) {
        state.allPosts.forEach(item => {
          item.authorName = state.allUsers.find(user => user.id === item.userId).name
        })
      } 
    }

  },
  actions: {
    getAllPosts(context) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          if (response.status === 200) {
            context.commit('statePosts', Object.assign(response.data))
          }
        })
        .catch(error => {
          console.log(error)
        })
    },

    getAllUsers(context) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (response.status === 200) {
            context.commit('stateUsers', Object.assign(response.data))
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  getters: {
    allPosts: state => {
      return state.allPosts
    },
    allUsers: state => {
      return state.allUsers
    },
  }
})
