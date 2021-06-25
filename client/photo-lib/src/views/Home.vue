<template>
  <div class="home">
    <Navbar />
    <!-- Page Section  -->
    <section>
      <div class="container">
        <div class="row page-title">
          <p class="text-left">/Collections</p>
        </div>
      </div>
      <!-- Content Section -->
      <div class="card-container container align-items-center">
        <div class="div-contents row">
          <CardPhotos
          v-for="photo in photos.slice(0,20)"
          :key="photo.id"
          :photo="photo"
          :favorites="favorites"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import CardPhotos from '@/components/CardPhotos'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    CardPhotos
  },
  computed: mapState(['photos', 'favorites']),
  methods: mapActions(['fetchPhotos', 'fetchFavorites']),
  created () {
    this.fetchPhotos()
    this.fetchFavorites()
  }
}
</script>

<style>
.card-container {
  overflow-y: auto;
}
.contents {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
