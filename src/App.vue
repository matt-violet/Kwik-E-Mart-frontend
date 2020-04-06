<template>
  <div id="app">
    <Navbar class="navbar" :cart="cartItems"/>
    <img alt="store image" data-aos="fade-in" class="store-img" src="./assets/store.png">
    <router-view
      v-bind:addToCart="handleAddToCart"
      v-bind:removeFromCart="handleRemoveFromCart"
      v-bind:savePaymentInfo="handleSavePaymentMethod"
      v-bind:getTotal="getTotal"
      :paymentInfo="paymentInfo"
      :cart="cartItems"
      :total="total"
      data-aos="zoom-in"
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
      paymentInfo: {},
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
    getTotal(cart) {
      let total = 0;
      for (const item of cart) {
        total += (item.qty * parseFloat(item.price))
      }
      this.$data.total = total.toFixed(2);
    },
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
    },
    handleSavePaymentMethod(tempPaymentInfo) {
      this.$data.paymentInfo = Object.assign({}, tempPaymentInfo);
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
  transition: .3s;
  color: white;
}
button {
  margin: 0 20px;
  border: 0px;
  border-radius: 5px;
  padding: 7px 15px;
  font-size: 16px;
  font-weight: 500;
}
</style>
