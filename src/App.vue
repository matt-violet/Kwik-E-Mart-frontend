<template>
  <div id="app">
    <img alt="store image" class="store-img" src="./assets/store.png">
    <GroceriesList/>
  </div>
</template>

<script>
import GroceryDataService from "./services/GroceryDataService";
import GroceriesList from "./components/GroceriesList.vue"
import groceries from "../data.js"
export default {
  name: 'App',
  components: {
    GroceriesList
  },
  methods: {
    seedGroceryData() {
      GroceryDataService.deleteAll()
        .then(response => {
          console.log(response.data.message)
        })
      for (const grocery of groceries) {
        GroceryDataService.create(grocery)
          .then(response => {
            this.groceries = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  },
  mounted() {
    this.seedGroceryData();
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
  width: 30%;
  margin-bottom: 50px;
}
</style>
