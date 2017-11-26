<template>
  <main class="capsule">
    <app-masthead img="banner-ppl" title="Men's" bkcolor="#474598"/>
    <div class="contain">
      <app-sidebar />
      <section class="content">
        <app-item 
          v-for="(item, index) in mProducts"
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
    mProducts() {
      return this.$store.getters.men;
    }
  }
};
</script>
