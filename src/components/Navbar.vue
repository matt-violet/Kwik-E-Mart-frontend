<template>
  <div class="navbar-wrapper">
    <h4 class="app-header" data-aos="fade-in">Kwik-e-Mart</h4>
    <div class="nav-options-div">
    <div class="home-div nav-option-div">
      <a href="/home" class="home-text nav-text">Home</a>
    </div>
    <div class="shop-div nav-option-div">
      <a href="/shop" class="shop-text nav-text">Shop</a>
    </div>
    <div class="cart-div nav-option-div">
      <a href="/cart" class="cart-text nav-text">My Cart ({{ numCartItems }})</a>
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
      handler: function (cart) {
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
    height: 50px;
    padding: 10px 20px;
    text-align: center;
    vertical-align: middle;
    color: black;
    background: rgb(255, 137, 26);
  }
  .nav-options-div {
    float: right;
  }
  .nav-option-div {
    margin-left: 30px;
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
  }
  .nav-text:hover {
    cursor: pointer;
  }
  .app-header {
    float: left;
    font-weight: 900;
    margin: 0;
  }
</style>
