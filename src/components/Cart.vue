<template>
  <div class="cart-wrapper">
    <h4 class="cart-header">Cart</h4>
    <table class="totals-table">
      <tr>
        <td>Qty.</td>
        <td>Item</td>
        <td>Total</td>
      </tr>
      <tr v-for="(grocery, i) of cart" v-bind:key="i" class="grocery">
        <td>{{ findQtyOfItem(grocery) }}</td>
        <td>{{ grocery.name }}</td>
        <td>{{ findTotalOfItem(grocery) }}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart: {type: Array}
  },
  methods: {
    findQtyOfItem(grocery) {
      const filteredItems = this.cart.filter(item => item.name === grocery.name);
      const qty = filteredItems.length;
      return qty;
    },
    findTotalOfItem(grocery) {
      const filteredItems = this.cart.filter(item => item.name === grocery.name);
      const qty = filteredItems.length;
      const total = qty * parseFloat(grocery.price);
      return total;
    }
  }
}
</script>

<style scoped>
  .grocery {
    width: 500px;
    height: 50px;
    background: grey;
  }
</style>
