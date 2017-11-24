<template>
  <div>
    <img :src="`/${item.img}`" :alt="`Image of ${item.name}`">
    <h4>{{ item.name }}</h4>
    <p>{{ item.price | usdollar }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  }
};
</script>

<style scoped>

</style>