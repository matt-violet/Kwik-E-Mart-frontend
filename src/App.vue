<template>
  <div id="app">
    <img alt="store image" class="store-img" src="./assets/store.png">
    <GroceriesList/>

    <div class="container mt-3">
      <router-view />
    </div>
    
  </div>
</template>

<script>
import GroceriesList from './components/GroceriesList.vue'

export default {
  name: 'App',
  components: {
    GroceriesList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.store-img {
  width: 500px;
}
</style>
