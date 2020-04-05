<template>
  <div class="grocery-wrapper" data-aos="zoom-in">
    <div class="grocery-img-div">
      <img :src="grocery.image" class="grocery-img">
    </div>
    <div :class="grocery.qty > 0 ? 'details-div selected' : 'details-div'">
      <p class="name">
        {{ grocery.name }}
      </p>
      <p class="description">
        {{ grocery.description }}
      </p>
      <p v-if="grocery.qty <= 0" class="price">
        ${{ grocery.price }}
      </p>
      <p v-else class="price">
        ${{ grocery.price }} (x{{ grocery.qty }})
      </p>
      <button class="add btn" v-on:click="handleAddedGrocery(grocery)">
        &#43;
      </button>
      <button class="remove btn" v-on:click="handleRemovedGrocery(grocery)">
        &#8722;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grocery',
  props: {
    grocery: {type: Object},
    cart: {type: Array},
    addToCart: {type: Function},
    removeFromCart: {type: Function},
  },
  methods: {
    handleAddedGrocery(grocery) {
      this.$emit('addToCart', grocery);
    },
    handleRemovedGrocery(grocery) {
      this.$emit('removeFromCart', grocery);
    }
  }
}
</script>

<style scoped>
  .grocery-wrapper {
    width: 175px;
    border-radius: 5px;
    overflow: hidden;
    margin: 5px;
    display: inline-block;
    text-align: left;
  }
  .grocery-wrapper:hover {
    box-shadow: 10px 10px 20px;
    transition: .3s;
  }
  .grocery-img-div {
    overflow: hidden;
    height: 125px;
    width: 100%;
  }
  .grocery-img {
    min-width: 100%;
    height: 100%;
  }
  .details-div {
    padding: 5px 10px 8px 10px;
    background: rgb(233, 233, 233);
    color: rgb(70, 70, 70);
  }
  .name {
    font-size: 18px;
    font-weight: 900;
    margin: 0;
  }
  .description {
    margin: 0;
    font-weight: 500;
    font-size: 12px;
  }
  .price {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
  }
  .selected {
    background: rgb(87, 87, 87);
    color: rgb(180, 180, 180);
    transition: .3s;
  }
  .selected .name {
    color: white;
    transition: .3s;
  }
  .btn {
    margin: 5px 5px 0 0;
    padding: 0 5px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
  }
  .add {
    background: rgb(118, 230, 118);
  }
  .remove {
    background: rgb(255, 102, 102);
  }
</style>
