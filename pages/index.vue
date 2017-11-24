<template>
  <main>
    <app-masthead />
    <!-- <app-sidebar /> -->
    <section class="container">
      <app-item 
        v-for="(item, index) in products"
        key="item"
        :item="item"
        :index="index"
      />
    </section>
  </main>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue';
import AppMasthead from './../components/AppMasthead.vue';
import AppItem from './../components/AppItem.vue';

export default {
  components: {
    AppSidebar,
    AppMasthead,
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
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.container {
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-gap: 10px;
  margin: 0 auto;
}

.item {
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  background: white;
}
</style>
