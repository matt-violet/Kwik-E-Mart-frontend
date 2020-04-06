<template>
  <div class="cart-wrapper">
    <h4 class="cart-header">My Cart</h4>
    <table class="totals-table">
      <tr class="bold-row">
        <td>Qty.</td>
        <td>Item</td>
        <td>Total</td>
      </tr>
      <tr v-for="(grocery, i) of cart" v-bind:key="i" class="grocery-row">
        <td>{{ grocery.qty }} @ {{ grocery.price }}</td>
        <td>{{ grocery.name }}</td>
        <td>$ {{ (grocery.qty * grocery.price).toFixed(2) }}</td>
      </tr>
      <tr class="bold-row">
        <td colspan="2">Total: </td>
        <td>$ {{ total.toFixed(2) }}</td>
      </tr>  
    </table>
    <div class="payment-div">
      <router-link to="shop">
        <button class="edit">Edit Cart</button>
      </router-link>
      <router-link to="addpayment">
        <button class="checkout">Checkout</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    cart: {type: Array},
    total: {type: Number}
  }
}
</script>

<style scoped>
.cart-header {
  margin-bottom: 20px;
}
td {
  padding: 5px;
  border: 1px solid;
}
.totals-table {
  margin: auto;
  width: 400px;
  text-align: left;
  border-radius: 5px;
}
.bold-row {
  font-weight: 700;
  background: rgb(196, 196, 196);
}
.grocery-row {
  background: rgb(240, 240, 240);
}
.payment-div {
  margin-top: 50px;
}
.edit {
  background: lightskyblue;
}
.checkout {
  background: rgb(91, 214, 91);
}
</style>
