<template>
    <!-- photos detail -->
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row card-container align-items-center">
        <div class="row d-flex">
          <div class="clickable-btn d-inline-flex flex-row-reverse">
            <b-button size="sm" class="p-1" @click="removeLike">
              <b-icon icon="x-square-fill"></b-icon>
            </b-button>
          </div>
          <div class="col-md-4" align="center">
            <img
            :src="favorite.Photo.url"
            class="img-fluid rounded-start p-2"
            :alt="favorite.PhotoId">
          </div>
          <div class="col-md-8">
            <div class="card-body" align="center">
              <h5 class="card-title">{{ favorite.Photo.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardFavorite',
  props: ['favorite'],
  methods: {
    removeLike () {
      this.$store.dispatch('delete', {
        id: this.favorite.id
      })
    }
  }
}
</script>
