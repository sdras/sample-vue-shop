<template>
  <main class="capsule">
    <app-masthead />
    <div class="contain">
      <app-sidebar />
      <section class="content">
        <app-item 
          v-for="(item, index) in products"
          key="item"
          :item="item"
          :index="index"
        />
      </section>
    </div>
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
/* no grid support */
aside {
  float: left;
  width: 19.1489%;
}

.content {
  /*no grid support*/
  float: right;
  width: 79.7872%;
  /* grid */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}

/* We need to set the widths used on floated items back to auto, and remove the bottom margin as when we have grid we have gaps. */
@supports (display: grid) {
  .capsule > * {
    width: auto;
    margin: 0;
  }
}
</style>
