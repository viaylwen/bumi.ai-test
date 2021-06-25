<template>
  <div class="favorites">
    <Navbar />
    <!-- Page Section  -->
    <section>
      <div class="container">
        <div class="row page-title">
          <p class="text-left">/Favorites</p>
        </div>
      </div>
      <!-- Content Section -->
      <div class="card-container container">
        <div class="col-6 mx-auto">
          <CardFavorite
          v-for="favorite in favorites"
          :key="favorite.id"
          :favorite="favorite"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import CardFavorite from '@/components/CardFavorite'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    CardFavorite
  },
  computed: mapState(['favorites']),
  methods: mapActions(['fetchFavorites']),
  created () {
    this.fetchFavorites()
  }
}
</script>

<style>
.card-container {
  overflow-y: auto;
}
</style>
