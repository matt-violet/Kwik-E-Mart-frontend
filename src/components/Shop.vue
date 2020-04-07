<template>
  <div class="shop-wrapper">
    <div class="dropdown-div">
      <h4 class="filter-header">Filter by Type: </h4>
      <select class="types-dropdown" v-model="filter">
        <option selected value>All</option>
        <option value="snack">Candy / Snacks</option>
        <option value="produce">Produce</option>
        <option value="drink">Drinks</option>
        <option value="other">Miscellaneous</option>
      </select>
    </div>
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
      filter: "",
    }
  },
  methods: {
    retrieveGroceries() {
      GroceryDataService.getAll()
        .then(response => {
          this.groceries = response.data;
          if (this.$data.filter.length) {
              this.$data.groceries = this.$data.groceries.filter(grocery => grocery.type === this.$data.filter)
            }
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  watch: {
    filter: {
      handler: function() {
        this.retrieveGroceries();
      }
    }
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
.dropdown-div {
  display: block;
}
.filter-header {
  display: inline-block;
  margin: 0 10px 0 0;
  padding-left: 5px;
  font-size: 18px;
}
.types-dropdown {
  display: inline-block;
  margin: 0 auto 20px auto;
}
.types-dropdown:hover {
  cursor: pointer;
}
</style>
