<template>
  <div class="navbar-wrapper">
   <div class="shop-div nav-option-div">
     <a href="/shop" class="shop-text nav-text">Shop</a>
   </div>
   <div class="cart-div nav-option-div">
     <a href="/cart" class="cart-text nav-text">My Cart ({{ cart.length }})</a>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    cart: {
      type: Array,
    }
  }
}
</script>

<style scoped>
  .navbar-wrapper {
    width: 100%;
    height: 50px;
  }
  .nav-option-div {
    width: 100px;
    font-weight: 500;
    display: inline-block;
  }
  .nav-text:hover {
    cursor: pointer;
  }
</style>
