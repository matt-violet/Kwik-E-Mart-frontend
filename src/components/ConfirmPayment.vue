<template>
  <div class="confirm-payment-wrapper">
    <h4 class="confirm-header">Confirm & Pay</h4>
    <div class="order-summary-div">
      <h4 class="confirm-div-header">Payment Method:</h4>
      <div class="order-summary-inner-div">
        <div class="payment-header">
          TYPE: <p>{{ paymentInfo.type }}</p>
        </div>
        <div class="payment-header">
          NUMBER: <p>{{ showLastFourDigits(paymentInfo.number) }}</p>
        </div>
        <div class="payment-header">
          EXP. DATE: <p>{{ splitExpDate(paymentInfo.exp) }}</p>
        </div>
      </div>
    </div>
    <div class="order-summary-div">
      <h4 class="confirm-div-header">Order Summary</h4>
      <div class="order-summary-inner-div">
        <div class="summary-header">
          ITEMS ({{ getTotalItems(cart) }}): 
          <p>${{ total.toFixed(2) }}</p>
        </div>
        <div class="summary-header">TAX: 
          <p>${{ (total * .0856).toFixed(2) }}</p>
        </div>
        <div class="summary-header">TOTAL: 
          <p>${{ (total + (total * .0856)).toFixed(2) }}</p>
        </div>
      </div>
    </div>
    <h4 class="confirm-header final-total">Total: ${{ (total + (total * .0856)).toFixed(2) }}</h4>
    <router-link to="/thankyou">  
      <button class="confirm-btn">
        Confirm Payment
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ConfirmPayment",
  props: {
    cart: {type: Array},
    paymentInfo: {type: Object},
    total: {type: Number}
  },
  methods: {
    showLastFourDigits(cardNumber) {
      let result = [];
      const cardNumArr = cardNumber.split("");
      for (let i = cardNumArr.length - 1; i >= 0; i--) {
        i >= cardNumArr.length - 4 ? result.unshift(cardNumArr[i]) : result.unshift("*")
      }
      return result.join("");
    },
    splitExpDate(expDate) {
      const expDateArr = expDate.split("");
      expDateArr.splice(2, 0, "/");
      return expDateArr.join("");
    },
    getTotalItems(cart) {
      let total = 0;
        for (const item of cart) {
          total += item.qty;
        }
        this.$data.numCartItems = total;
        return total;
    }
  }
}
</script>

<style scoped>
p {
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 0 10px;
}
.confirm-header {
  margin-bottom: 40px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
}
.final-total {
  font-size: 20px;
  margin: 40px
}
.confirm-div-header {
  padding: 15px;
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  background: lightgrey;
  font-family: 'Montserrat Alternates', sans-serif;
}
.order-summary-div {
  width: 275px;
  margin: 0 15px;
  text-align: left;
  vertical-align: top;
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;
  display: inline-block;
}
.order-summary-inner-div {
  padding: 15px;
}
.payment-header, .summary-header {
  font-weight: 900;
  font-size: 12px;
}
.confirm-btn {
  background: rgb(0, 200, 0);
}
</style>
