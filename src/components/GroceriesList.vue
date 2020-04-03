<template>
  <div class="groceries-list-wrapper">
    Grocery Item:
    <div class="grocery" v-for="grocery in groceries" v-bind:key="grocery.id">
      {{ grocery.name }}
      {{ grocery.description }}
      {{ grocery.image }}
    </div>
  </div>
</template>

<script>
import GroceryDataService from "../services/GroceryDataService";
export default {
  name: 'GroceriesLists',
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
          console.log(response.data);
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
