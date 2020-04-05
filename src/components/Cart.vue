<template>
  <div class="cart-wrapper">
    <h4 class="cart-header">My Cart</h4>
    <table class="totals-table">
      <tr class="table-header">
        <td>Qty.</td>
        <td>Item</td>
        <td>Total</td>
      </tr>
      <tr v-for="(grocery, i) of groceries" v-bind:key="i" class="grocery-row">
        <td>{{ grocery.qty }}</td>
        <td>{{ grocery.name }}</td>
        <td>$ {{ (grocery.qty * grocery.price).toFixed(2) }}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
import GroceryDataService from "../services/GroceryDataService";
export default {
  name: "Cart",
  props: {
    cart: {type: Array}
  },
  data() {
    return {
      groceries: []
    }
  },
  mounted() {
    GroceryDataService.getAll()
        .then(response => {
          this.groceries = response.data.filter(item => item.qty > 0);
        })
        .catch(e => {
          console.log(e);
        });
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
    width: 250px;
    text-align: left;
  }
  .table-header {
    font-weight: 700;
    background: rgb(170, 170, 170);
  }
  .grocery-row {
    background: rgb(223, 223, 223);
  }
</style>
