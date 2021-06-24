<template>
  <section>
    <div id="nav" class="d-flex justify-content-center">
      <div class="col-1">
        <router-link to="/">
          <button class="clickable-btn circle-icon"><i class="fas fa-home"></i></button>
        </router-link>
      </div>
      <div class="col-1">
        <router-link to="/favorites">
          <button class="clickable-btn circle-icon"><i class="fas fa-heart"></i></button>
        </router-link>
      </div>
    </div>
  <!-- Website Name -->
    <h2>Photo Library</h2>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
