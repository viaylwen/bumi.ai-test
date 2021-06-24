import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    favorites: [],
    favorite: {}
  },
  mutations: {
    FETCH_PHOTOS (state, payload) {
      state.photos = payload
    },
    FETCH_FAVORITES (state, payload) {
      state.favorites = payload
    }
  },
  actions: {
    fetchPhotos (context, payload) {
      axios.get('/photos')
      .then(({ data }) => {
        context.commit('FETCH_PHOTOS', data)
      })
      .catch(console.log)
    }
  },
  modules: {
  }
})
