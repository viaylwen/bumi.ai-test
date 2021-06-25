import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    favorites: []
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
    },
    fetchFavorites (context, payload) {
      axios.get('/favorites')
        .then(({ data }) => {
          context.commit('FETCH_FAVORITES', data)
        })
        .catch(console.log)
    },
    addToFavorite (context, payload) {
      Swal.fire({
        title: 'Hey!',
        text: 'Do you like this photo?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      })
        .then(res => {
          if (res.isConfirmed) {
            axios.post('/favorites', {
              PhotoId: payload.PhotoId
            })
            context.dispatch('fetchFavorites')
            router.push('/favorites')
          }
        })
        .catch(console.log)
    },
    delete (context, payload) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'This photo will be removed from favorite',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
      })
        .then(res => {
          let newFetch
          if (res.isConfirmed) {
            newFetch = axios.delete(`/favorites/${payload.id}`)
          }
          return newFetch
        })
        .then(() => {
          Swal.fire({
            title: 'Success',
            text: 'Successfully Removed From Favorites',
            icon: 'success'
          })
          context.dispatch('fetchFavorites')
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
