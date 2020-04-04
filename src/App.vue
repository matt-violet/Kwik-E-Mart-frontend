<template>
  <div id="app">
    <Navbar class="navbar" :cart="cart"/>
    <h2 class="app-header" data-aos="fade-in">Kwik-e-Mart</h2>
    <img alt="store image" data-aos="fade-up" class="store-img" src="./assets/store.png">
    <router-view
      v-bind:addToCart="handleAddToCart"
      v-bind:removeFromCart="handleRemoveFromCart"
      :cart="cart"
    />
    <!-- <div v-if="showModal" class="modal">
      <router-view :grocery="featuredGrocery"/>
    </div> -->
  </div>
</template>

<script>
import GroceryDataService from "./services/GroceryDataService";
import groceries from "../data";
import Navbar from "./components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      cart: [],
      total: 0,
      featuredGrocery: {},
      showModal: false,
    }
  },
  mounted() {
    GroceryDataService.deleteAll()
      .then(response => {
        console.log(response.data.message);
      })
    for (const grocery of groceries) {
      GroceryDataService.create(grocery)
        .then(response => {
          console.log("Saved ", response.data.name)
        })
    }
  },
  methods: {
    handleAddToCart(grocery) {
      let item = grocery;
      this.$data.cart.push(item);
      this.$data.total += parseFloat(item.price);
    },
    handleRemoveFromCart(grocery) {
      for (let i = this.$data.cart.length - 1; i >= 0; i--) {
        if (this.$data.cart[i].name === grocery.name) {
          this.$data.total -= parseFloat(grocery.price);
          this.$data.cart.splice(i, 1);
          return;
        } 
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.app-header {
  padding: 10px 0;
  border: 1px solid;
  background: rgb(255, 137, 26);
  font-weight: 900;
}
.navbar {
  margin-bottom: 25px;
}
.store-img {
  width: 300px;
  margin-bottom: 25px;
}
</style>
