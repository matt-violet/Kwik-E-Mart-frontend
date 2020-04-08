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
        <td>${{ (grocery.qty * grocery.price).toFixed(2) }}</td>
      </tr>
      <tr class="bold-row">
        <td colspan="2">Total: </td>
        <td>${{ total.toFixed(2) }}</td>
      </tr>  
    </table>
    <div class="payment-div">
      <router-link to="shop">
        <button class="edit">Edit Cart</button>
      </router-link>
      <router-link v-if="Object.keys(paymentInfo).length" to="confirmpayment">
        <button class="checkout">Checkout</button>
      </router-link>
      <router-link to="addpayment" v-else>
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
    total: {type: Number},
    paymentInfo: {type: Object}
  }
}
</script>

<style scoped>
.cart-header {
  margin-bottom: 30px;
  font-weight: 600;
  font-family: 'Montserrat Alternates', sans-serif;
}
td {
  padding: 8px;
}
.totals-table {
  margin: auto;
  width: 400px;
  text-align: left;
  border-radius: 5px;
}
.bold-row {
  font-weight: 600;
  font-size: 18px;
  background: rgb(31, 31, 31);
  color: white;
}
.grocery-row {
  font-weight: 500;
  font-size: 14px;
  background: rgb(240, 240, 240);
}
.payment-div {
  margin: 50px auto;
}
.edit {
  background: rgb(0, 157, 255);
}
.checkout {
  background: rgb(0, 200, 0);
}
</style>
