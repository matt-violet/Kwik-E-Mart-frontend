<template>
  <div id="app">
    <Navbar class="navbar" :cart="cartItems"/>
    <img alt="store image" data-aos="fade-up" class="store-img" src="./assets/store.png">
    <router-view
      v-bind:addToCart="handleAddToCart"
      v-bind:removeFromCart="handleRemoveFromCart"
      :cart="cartItems"
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
      cartItems: [],
      total: 0,
      featuredGrocery: {},
      showModal: false,
    }
  },
  mounted() {
    GroceryDataService.deleteAll()
    for (const grocery of groceries) {
      GroceryDataService.create(grocery)
    }
  },
  methods: {
    handleAddToCart(grocery) {
      let item = grocery;
      item.qty++;
      this.$data.total += parseFloat(item.price);
      GroceryDataService.update(grocery.id, item)
        .then(response => {
          let updatedGrocery = JSON.parse(response.config.data);
          for (const cartItem of this.$data.cartItems) {
            if (cartItem.name === updatedGrocery.name) {
              return;
            }
          }
          this.$data.cartItems.push(item);
      })
      .catch(e => {
        console.log(e);
      })
    },
    handleRemoveFromCart(grocery) {
      if (grocery.qty > 0) {
        let item = grocery;
        item.qty--;
        this.$data.total -= parseFloat(item.price);
        GroceryDataService.update(grocery.id, item)
          .then(response => {
            let updatedGrocery = JSON.parse(response.config.data);
            if (updatedGrocery.qty === 0) {
              this.$data.cartItems.splice(this.$data.cartItems.indexOf(updatedGrocery));
            }
          })
          .catch(e => {
            console.log(e);
          })
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
.navbar {
  display: block;
}
.store-img {
  display: block;
  width: 300px;
  margin: 20px auto 40px auto;
}
a {
  color: black;
}
a:hover {
  color: white;
}
</style>
