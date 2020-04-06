<template>
  <div class="groceries-list-wrapper">
    <h2 class="list-header">Grocery Items:</h2>
    <Grocery
      v-for="grocery in groceries"
      v-bind:key="grocery.id"
      :grocery="grocery"
      :cart="cart"
      @addToCart="addToCart"
      @removeFromCart="removeFromCart"
      class="grocery"
    />
  </div>
</template>

<script>
import GroceryDataService from "../services/GroceryDataService";
import Grocery from "./Grocery";
export default {
  name: 'GroceriesList',
  components: {
    Grocery,
  },
  props: {
    cart: {type: Array},
    addToCart: {type: Function},
    removeFromCart: {type: Function},
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
  padding: 0 50px;
  text-align: left;
}
.list-header {
  margin-left: 10px;
}
</style>
