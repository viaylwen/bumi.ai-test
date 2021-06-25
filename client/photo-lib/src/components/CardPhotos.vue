<template>
    <!-- photos detail -->
      <div class="photo-card col-3" align="center">
          <img
          :src="photo.thumbnailUrl"
          :key="photo.id"
          :alt="photo.title">
        <div class="action p-3 align-items-center" align="center">
          <b-btn class="button" @click="addToFavorite">Like</b-btn>
        </div>
      </div>
</template>

<script>
export default {
  name: 'CardPhotos',
  props: ['photo', 'favorites'],
  methods: {
    addToFavorite () {
      this.$store.dispatch('addToFavorite', {
        PhotoId: this.photo.id
      })
    }
  }
}
</script>
