<template>
  <section>
    <div id="nav" class="d-flex justify-content-center">
      <div class="col-1">
        <router-link to="/">Home</router-link>
      </div>
      <div class="col-1">
        <router-link to="/favorites">Favorites</router-link>
      </div>
    </div>
  <!-- Website Name -->
    <h2 class="text-center">Photo Library</h2>
  </section>
</template>

<script>
import router from '../router'

export default {
  name: 'Navbar',
  methods: {
    redirHome () {
      router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #303841;
}

#nav a.router-link-exact-active {
  color: #303841;
}
</style>
