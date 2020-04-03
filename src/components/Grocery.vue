<template>
  <div class="grocery-wrapper">
    <div class="grocery-img-div">
      <img :src="grocery.image" class="grocery-img">
    </div>
    <div class="details-div">
      <p class="name">{{ grocery.name }}</p>
      <p class="description">{{ grocery.description }}</p>
      <p class="price">${{ grocery.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grocery',
  props: {
    grocery: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>
  .grocery-wrapper {
    width: 200px;
    border: 1px solid;
    border-radius: 5px;
    margin: 10px;
    display: inline-block;
    text-align: left;
  }
  .grocery-wrapper:hover {
    opacity: .7;
    cursor: pointer;
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
</style>
