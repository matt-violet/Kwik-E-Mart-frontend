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
        <td>$ {{ getTotal(cart) }}</td>
      </tr>  
    </table>
    <div class="payment-div">
      <router-link to="shop">
        <button class="payment-btns edit">Edit Cart</button>
      </router-link>
      <button class="payment-btns checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    cart: {type: Array}
  },
  methods: {
    getTotal(cart) {
      let total = 0;
      for (const item of cart) {
        total += (item.qty * parseFloat(item.price))
      }
      return total;
    }
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
  .payment-btns {
    margin: 0 20px;
    border: 0px;
    border-radius: 20px;
    padding: 7px 15px;
    font-size: 16px;
  }
  .payment-btns:hover {
    transition: .3s;
    transform: scale(1.1);
  }
  .edit {
    background: lightskyblue;
  }
  .checkout {
    background: rgb(91, 214, 91);
  }
</style>
