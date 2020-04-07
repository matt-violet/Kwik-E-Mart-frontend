<template>
  <div class="shop-wrapper">
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
  name: 'Shop',
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
.shop-wrapper {
  width: 100%;
  height: 100%;
  padding: 0 50px;
  text-align: left;
}
</style>
