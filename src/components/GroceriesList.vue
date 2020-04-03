<template>
  <div class="groceries-list-wrapper">
    <h4>Grocery Items:</h4>
    <Grocery :grocery="grocery" class="grocery" v-for="grocery in groceries" v-bind:key="grocery.id"/>
  </div>
</template>

<script>
import GroceryDataService from "../services/GroceryDataService";
import Grocery from "./Grocery";
export default {
  name: 'GroceriesLists',
  components: {
    Grocery,
  },
  data() {
    return {
      groceries: [],
    }
  },
  methods: {
    retrieveGroceries() {
      GroceryDataService.getAll()
        .then(response => {
          this.groceries = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveGroceries();
  }
}
</script>

<style scoped>
  .groceries-list-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
