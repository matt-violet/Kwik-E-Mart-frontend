<template>
  <div class="add-payment-wrapper">
    <h4 class="add-payment-header">Add Payment Method</h4>
    <div class="add-payment-inner">
      <form>
        <div class="full-width-div">
          <div class="form-header">
            CARD TYPE:
          </div>
          <input type="radio" name="type" value="Visa" v-model="tempPaymentInfo.type">
          <label>Visa</label>
          <input type="radio" name="type" value="Mastercard" v-model="tempPaymentInfo.type">
          <label>Mastercard</label>
          <input type="radio" name="type" value="American Express" v-model="tempPaymentInfo.type">
          <label>American Express</label>
          <input type="radio" name="type" value="Discover" v-model="tempPaymentInfo.type"> 
          <label>Discover</label>
        </div>
        <div class="full-width-div">
          <div class="form-header">
            CARD NUMBER:
          </div>
          <input type="text" class="full-length-input" placeholder="Valid Card Number" v-model="tempPaymentInfo.number">
        </div>
        <div class="half-width-div">
          <div class="form-header">
            EXP. DATE:
          </div>
          <input type="text" class="half-length-input" placeholder="MMYY" v-model="tempPaymentInfo.exp">
        </div>
        <div class="half-width-div">
          <div class="form-header">
            CV CODE:
          </div>
          <input type="text" class="half-length-input" placeholder="CVC" v-model="tempPaymentInfo.cvv">
        </div>
        <router-link to="confirmpayment">
          <button type="submit" class="save-payment-btn" v-on:click="savePaymentInfo(tempPaymentInfo)">
            Save
          </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPayment",
  props: {
    cart: {type: Array},
    savePaymentInfo: {type: Function},
  },
  data() {
    return {
      tempPaymentInfo: {}
    }
  },
  methods: {
    saveTempPaymentInfo(tempPaymentInfo) {
      this.$emit("saveTempPaymentInfo", tempPaymentInfo);
      this.tempPaymentInfo = {};
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-right: 5px;
}
label {
  margin: 0 20px 0 0;
}
.add-payment-wrapper {
  width: 500px;
  overflow: hidden;
  border: 1px solid grey;
  border-radius: 5px;
  text-align: left;
}
.add-payment-header {
  text-align: center;
  padding: 20px;
  margin: 0;
  background: lightgrey;
  font-weight: 600;
  font-family: 'Montserrat Alternates', sans-serif;
}
.add-payment-inner {
  padding: 20px;
}
.form-header {
  margin-right: 20px;
  font-weight: 700;
  font-size: 14px;
}
.full-width-div {
  margin-bottom: 20px;
}
.half-width-div {
  display: inline-block;
  width: 50%;
}
.full-length-input {
  width: 100%;
}
.half-length-input {
  width: 95%;
}
.save-payment-btn {
  width: 100%;
  margin: 20px auto 0 auto;
  background: green;
}
</style>
