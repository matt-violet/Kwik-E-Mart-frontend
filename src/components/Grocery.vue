<template>
  <div class="grocery-wrapper">
    <div class="grocery-img-div">
      <img :src="grocery.image" class="grocery-img">
    </div>
    <div class="details-div">
      <p class="name">{{ grocery.name }}</p>
      <p class="description">{{ grocery.description }}</p>
      <p v-if="count <= 0" class="price">${{ grocery.price }}</p>
      <p v-else class="price">${{ grocery.price }} x{{ count }}</p>
      <button
        class="add-btn"
        v-on:click="handleAddedGrocery(grocery)"
      >
        &#43;
      </button>
      <button
        class="remove-btn"
        v-on:click="handleRemovedGrocery(grocery)"
      >
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
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleAddedGrocery(grocery) {
      this.$emit('addToCart', grocery);
      this.count++;
    },
    handleRemovedGrocery(grocery) {
      console.log('asdf', grocery)
      this.$emit('removeFromCart', grocery);
      this.count--;
    }
  }
}
</script>

<style scoped>
  .grocery-wrapper {
    width: 200px;
    border: 1px solid;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px;
    display: inline-block;
    text-align: left;
  }
  .grocery-wrapper:hover .details-div {
    background: rgb(233, 233, 233);
    transition: .3s;
  }
  .grocery-img-div {
    overflow: hidden;
    height: 150px;
    width: 100%;
  }
  .grocery-img {
    min-width: 100%;
    height: 100%;
  }
  .details-div {
    padding: 10px;
  }
  .name {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
  .description {
    margin: 0;
    font-size: 12px;
  }
  .price {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
  }
  .add-btn {
    margin: 5px 5px 0 0;
    padding: 3px 8px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 50%;
    background: lightgreen;
  }
  .remove-btn {
    margin: 5px 10px 0 0;
    padding: 3px 8px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 50%;
    background: rgb(255, 86, 86);
  }
</style>
