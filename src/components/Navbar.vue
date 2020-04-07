<template>
  <div class="navbar-wrapper">
    <router-link to="/">
      <h4 class="app-header">⚡ Kwik-e-Mart ⚡</h4>
    </router-link>
    <div class="nav-options-div">
      <div class="shop-div nav-option-div">
        <router-link to="shop">Shop</router-link>
      </div>
      <div class="cart-div nav-option-div">
        <router-link to="cart">My Cart ({{ numCartItems }})</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    cart: {type: Array}
  },
  data() {
    return {
      numCartItems: 0
    }
  },
  watch: {
    cart: {
      handler: function(cart) {
        let total = 0;
        for (const item of cart) {
          total += item.qty;
        }
        this.$data.numCartItems = total;
        return total;
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.navbar-wrapper {
  width: 100%;
  height: 55px;
  padding: 15px 40px;
  text-align: center;
  vertical-align: middle;
  background: rgb(31, 31, 31);
}
.nav-options-div {
  float: right;
}
.nav-option-div {
  margin-left: 40px;
  font-weight: 600;
  display: inline-block;
}
.nav-text:hover {
  cursor: pointer;
}
.app-header {
  float: left;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}
</style>
