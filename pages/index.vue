<template>
  <main>
    <section class="container">
      <app-sidebar />
      <app-item 
        v-for="item in products"
        key="item"
        :item="item"
      />
    </section>
  </main>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue';
import AppItem from './../components/AppItem.vue';

export default {
  components: {
    AppSidebar,
    AppItem
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style>
main {
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  text-align: center;
}

.container {
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-gap: 10px;
}

.item {
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  background: white;
}
</style>
