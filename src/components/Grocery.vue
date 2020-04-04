<template>
  <div class="grocery-wrapper" data-aos="zoom-in">
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
    padding: 5px 10px;
    background: rgb(236, 236, 236);
    color: rgb(70, 70, 70);
  }
  .name {
    color: black;
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
  .add-btn {
    margin: 5px 5px 0 0;
    font-size: 12px;
    font-weight: 500;
    border: .5px solid;
    border-radius: 50%;
    background: rgb(118, 230, 118);
  }
  .remove-btn {
    border: .5px solid;
    margin: 5px 10px 0 0;
    font-size: 12px;
    font-weight: 500;
    border-radius: 50%;
    background: rgb(255, 147, 147);
  }
</style>
