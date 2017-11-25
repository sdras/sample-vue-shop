<template>
  <div class="item">
    <p>{{ item.name }}</p>
    <img :src="`/${item.img}`" :alt="`Image of ${item.name}`">
    <p>{{ item.price | usdollar }}</p>
    <button class="add" @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', this.item);
    }
  }
};
</script>

<style scoped>
.item {
  border-radius: 5px;
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 18px;
}
</style>